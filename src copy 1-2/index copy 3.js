const Koa = require('koa');
const app = new Koa();

app.use(require('./format-json'));

app.use((ctx, next) => {
    // let a = null;
    // console.log(a.b);
    ctx.throw(403, 'you hava no permission', { a:1});
    const user = {
        loginId: 'rico',
        name: 'long'
    };
    ctx.state.user = user;
    next();
});

app.use((ctx, next) => {
    console.log(ctx.state);
    ctx.body = {
        a: 1,
        b: 2
    }
    next();
})

app.on('error', (err,ctx) => {
    console.log("error---", err);
})

app.listen(9527, () => {
    console.log('listen on port 9527');
})