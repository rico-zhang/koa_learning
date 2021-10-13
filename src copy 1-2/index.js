const Koa = require('koa');
const app = new Koa();

app.use(require('./format-json'));
app.use((ctx, next) => {
    const user = {
        loginId: 'rico',
        name: 'long'
    };
    app.emit('abc', 123);
    app.keys = ['rico','zhang'];
    ctx.cookies.set('token', '736248763',{
        path:'/news',
        signed:true
    });
    ctx.state.user = user;
    next();
});

app.use((ctx, next) => {
    console.log(ctx.state);
    console.log(ctx.cookies.get('token',{
        signed:true
    }));
    ctx.body = {
        a: 1,
        b: 2
    };
    next();
});

app.on('abc', data => {
    console.log(data);
});

app.listen(9527, () => {
    console.log('listen on port 9527');
});