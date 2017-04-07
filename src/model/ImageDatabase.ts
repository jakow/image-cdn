import {Core, Model} from 'iridium';
import Image, {ImageDocument} from './image';

export default class ImageDatabase extends Core {
  Images = new Model<ImageDocument, Image>(this, Image);
}
