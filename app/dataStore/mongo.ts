import { connect } from 'mongoose';

export class Mongo {
  url = 'mongodb://127.0.0.1:27017/local';

  constructor() {
    connect(this.url, {useNewUrlParser: true}, (err: any) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Mongo Succesfully Connected!");
      }
    });
  }
}
