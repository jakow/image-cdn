import * as path from 'path';
import * as Koa from 'koa';
import * as compression from 'koa-compress';
import * as bodyParser from 'koa-bodyparser';
import * as logger from 'koa-logger';
import * as views from 'koa-views';
import router from './routes';

const app = new Koa();

const viewDir = path.resolve(__dirname, './views');
app.use(views(viewDir, {
    map: {
      'hbs': 'handlebars'
    },
    extension: 'hbs'
}));
app.use(bodyParser());
app.use(logger());
app.use(compression());
app.use(router.routes());
app.listen(3000);
