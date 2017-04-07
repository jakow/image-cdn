import {Core, Model, Instance, Collection, Index, Property, ObjectID, Validate} from 'iridium';
import * as fs from 'fs';

interface ImageMetadata {
  width: number; // in px;
  height: number; // in px;

}

interface ImageDocument {
 _id?: string;
 basePath: string; // the path to the initial file uploaded to the CDN
 extension: string; // file extension
}

@Index({name : 1 })
@Collection('images')
@Validate('isPath', str => )
class Image extends Instance<ImageDocument, Image> {
  @ObjectID _id: string;

  @Property('isPath')
  basePath: string;
}
