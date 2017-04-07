import * as Router from 'koa-router';
import * as Koa from 'koa';
const multer : any = require('koa-multer');
import '../views/upload.hbs';
import storage from '../middleware/multerCustomStorage';

const router = new Router();


const upload = multer({storage});

router.get('/img/:id', (ctx: Koa.Context) => {
  ctx.body = `getImg ${ctx.params.id}`;
});

router.post('/img/', (ctx: Koa.Context) => {

});

router.get('/upload', async (ctx: Koa.Context)  => {
  await ctx.render('upload');

})


router.post('/upload', upload.single('image'));



export default router;
