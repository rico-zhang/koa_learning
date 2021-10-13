const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.path);
    ctx.body = '9528'
    ctx.status = 200;
    await next();
});

app.listen(9528, () => {
    console.log('listen on port 9528');
});