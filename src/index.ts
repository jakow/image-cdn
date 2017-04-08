import * as koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as compression from "koa-compress";
import * as logger from "koa-logger";
import * as path from "path";
import router from "./routes";
import * as views from "koa-views";

const app = new koa();
const viewDir = path.resolve(__dirname, "./views");
app.use(views(viewDir, {
  extension: "hbs",
    map: {
        hbs: "handlebars",
    },
}));
app.use(bodyParser());
app.use(logger());
app.use(compression());
app.use(router.routes());
app.listen(3000);
