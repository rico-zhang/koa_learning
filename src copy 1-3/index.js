const path = require('path');
const Koa = require('koa');
const app = new Koa();

app.use(require('./koa-fallback'));

const staticRoot = path.resolve(__dirname, 'public');
const koaStatic = require('./koa-static');
app.use(koaStatic(staticRoot))

app.listen(9527, () => {
    console.log('listen on port 9527');
});