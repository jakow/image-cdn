import {Instance, Collection, Index, Property, ObjectID, Validate} from 'iridium';
const isValidPath: (x: string) => boolean = require('is-valid-path');

export interface ImageMetadata {
  width: number; // in px;
  height: number; // in px;
}

export interface ImageDocument {
 _id?: string;
 basePath: string; // the path to the initial file uploaded to the CDN
 extension: string; // file extension
 metadata?: ImageMetadata
}

const defaultMetadata : ImageMetadata = {
  width: 0,
  height: 0
}


@Index({name : 1 })
@Collection('images')
// @Validate('isPath', str => this.assert(isValidPath(str)))
export default class Image extends Instance<ImageDocument, Image> {
  @ObjectID _id: string;

  @Property(/^.+$/)
  basePath: string;

  @Property(/^.+$/) // non empty string
  extension: string;

  @Property(null)
  metadata?: ImageMetadata;

}
