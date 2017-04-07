import * as path from 'path';
import * as uuid from 'uuid';
import http from 'http';
const multer : any = require('koa-multer');

export interface MultipartRequest extends http.IncomingMessage {
  file?: UploadedFile;
  files?: Array<UploadedFile>;
}

export interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

 const storage = multer.diskStorage({
  destination: 'storage/',
  filename: (req: MultipartRequest, file: UploadedFile,
    callback: (n: null, filename: string) => void) => {
      // get file extension
      let filename: string = file.originalname;
      const extension : string = path.extname(filename);
      // remove it from the filename
      filename = filename.slice(0, -extension.length);
      // append an id
      const id : string = uuid.v1().split('-')[0];
      filename += `-${id}${extension}`;
      console.log(`Saving file at: ${filename}`);
      callback(null, filename);
  }
});

export default storage;
