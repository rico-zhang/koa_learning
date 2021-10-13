module.exports = async (ctx, next) => {
    await next();
    //格式化消息
    const body = ctx.body;
    ctx.body = {
        code: 0,
        msg: '',
        data: body
    }
}