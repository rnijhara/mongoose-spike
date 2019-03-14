import { Router } from 'express';
import * as booksController from '../controllers/booksController';

const api = Router();

api.get("/books", booksController.allBooks);
api.get("/books/:id", booksController.getBook);
api.post("/books", booksController.addBook);
api.put("/books/:id", booksController.updateBook);
api.delete("/books/:id", booksController.deleteBook);

export default api;
