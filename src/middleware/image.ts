import * as Koa from 'koa';
import {MultipartRequest} from './multerCustomStorage';

export async function storeToDatabase(ctx: Koa.Context, next: () => Promise<any>) {

}


export async function checkFileUploaded(ctx: Koa.Context,  next: () =>Promise<any>) {
  const request = ctx.req as MultipartRequest;
  if (!request.file || !request.files) {
    // no files uploaded. Error 400 bad request
    ctx.throw('Empty file uploaded via /upload/', 400);
  } else {
    console.log(request.file);
  }
  await next();
}


export async function persistImageHandle(ctx: Koa.Context, next: () => Promise<any>) {
  
}
