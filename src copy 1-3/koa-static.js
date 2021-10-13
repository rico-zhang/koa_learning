
const fs = require('fs');
const path = require('path');
const mime = require('mime');

async function getFilePath(urlPath, root) {
    const filePath = path.join(root, urlPath);
    try {
        const stat = await fs.promises.stat(filePath);
        if (stat.isDirectory()) {
            const newUrlPath = path.join(urlPath, 'index.html');
            return await getFilePath(newUrlPath, root);
        } else {
            return filePath;
        }
    } catch (error) {
        return null;
    }
}

module.exports = (root) => {
    return async (ctx, next) => {
        const filePath = await getFilePath(ctx.path, root);
        if (!filePath) {
            await next();
            return;
        }
        ctx.body = fs.createReadStream(filePath);
        ctx.type = mime.getType(filePath);
    }
}