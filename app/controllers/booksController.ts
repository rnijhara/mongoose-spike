import { Request, Response } from "express";
import { BookRepository } from '../entities/Book';

export const allBooks = async (req: Request, res: Response) => {
  const books = await BookRepository.find();
  res.send(books);
};

export const getBook = async (req: Request, res: Response) => {
  const book = await BookRepository.findByTitle('Database Management System');
  if (!book) {
    res.sendStatus(404);
  }
  res.send(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const book = await BookRepository.deleteOne({_id: req.params.id});
  if (!book) {
    res.sendStatus(404);
  }
  res.send(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await BookRepository.findByIdAndUpdate(req.params.id, req.body);
  if (!book) {
    res.sendStatus(404);
  }
  res.send({message: 'updated'});
};

export const addBook = async (req: Request, res: Response) => {
  const book = new BookRepository(req.body);
  await book.save();
  res.send(book);
};
