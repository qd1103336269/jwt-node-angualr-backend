
import mongoose, { Schema } from 'mongoose';

export class Mongo {
  constructor(
    private url: string = 'mongodb://localhost:27017/socket'
  ) {}
  public Connect() :void {
    mongoose.connect(this.url, (err) => {
      if(err) {
        console.log('connect failed')
      }else {
        console.log('connect succcessful')
      }
    })
  }
}

export const PictureSchema = new Schema ({
  Image: String,
  Name: String,
  Desc: String,
  Tags: String
})

export const Picture = mongoose.model('picture', PictureSchema)
