import { Document, model, Schema } from 'mongoose';

export interface Book extends Document {
  title: string;
  author: string;

  fullName(): string;
}

export const BookSchema = new Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
});

BookSchema.methods.fullName = function (): string {
  return `${this.title} by ${this.author}`;
};

export const BookModel = model<Book>("Book", BookSchema);

export class BookRepository extends BookModel {
  public static findByTitle(title: string) {
    return this.find({title});
  }
}
