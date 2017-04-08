import {Instance, Collection, Index, Property, ObjectID} from "iridium";
// const isValidPath: (x: string) => boolean = require("is-valid-path");

export interface ImageMetadata {
  width: number; // in px;
  height: number; // in px;
}

const metadataSchema = {
  height: Number,
  width: Number,
};

export interface ImageDocument {
 _id?: string;
 path: string; // the path to the initial file uploaded to the CDN
 extension: string; // file extension
 mimetype: string;
 metadata?: ImageMetadata;
}

const mimeValidator = /^image\/[\w-.+]+$/;

@Index({name : 1 })
@Collection("images")
// @Validate("isPath", str => this.assert(isValidPath(str)))
export default class Image extends Instance<ImageDocument, Image> implements ImageDocument {
  @ObjectID
  public _id: string;  // tslint:disable-line
  @Property(/^.+$/)
  public path: string;

  @Property(/^.+$/) // non empty string
  public extension: string;

  @Property(mimeValidator)
  public mimetype: string;

  @Property(metadataSchema, false)
  public metadata?: ImageMetadata;

}
