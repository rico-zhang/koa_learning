const Router = require('@koa/router');

const router = new Router({
    prefix: '/api/user'
});

router.get("/:id",  (ctx) => {
    console.log(ctx.params.id);
    ctx.body = {
        loginId: 'rico',
        name: 'long',
        age: 18
    }
});

module.exports = router.routes();