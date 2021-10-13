const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    // http://localhost:9527/news/2736?a=1&b=2#ddd
    // url /news/2736?a=1&b=2
    // originalUrl /news/2736?a=1&b=2
    // origin http://localhost:9527
    // href http://localhost:9527/news/2736?a=1&b=2
    // path /news/2736
    // querystring a=1&b=2
    // search ?a=1&b=2
    // host localhost:9527
    // hostname localhost
    // URL URL {
    //   href: 'http://localhost:9527/news/2736?a=1&b=2',
    //   origin: 'http://localhost:9527',
    //   protocol: 'http:',
    //   username: '',
    //   password: '',
    //   host: 'localhost:9527',
    //   hostname: 'localhost',
    //   port: '9527',
    //   pathname: '/news/2736',
    //   search: '?a=1&b=2',
    //   searchParams: URLSearchParams { 'a' => '1', 'b' => '2' },
    //   hash: ''
    // }
    // console.log('url', ctx.request.url);
    // console.log('originalUrl', ctx.request.originalUrl);
    // console.log('origin', ctx.request.origin);
    // console.log('href', ctx.request.href);
    // console.log('path', ctx.request.path);
    // console.log('querystring', ctx.request.querystring);
    // console.log('search', ctx.request.search);
    // console.log('host', ctx.request.host);
    // console.log('hostname', ctx.request.hostname);
    // console.log('URL', ctx.request.URL);

    ctx.response.status = 200;
    ctx.response.message = 'afds';
    ctx.response.body = {
        a: 1,
        b: 2
    }

});

app.listen(9527, () => {
    console.log('listen on port 9527');
});