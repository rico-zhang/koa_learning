const Koa = require('koa');
const http = require('http');
const app = new Koa();
const server = http.createServer(app.callback());
server.listen(9527, () => {
    console.log('listening on port 9527');
});