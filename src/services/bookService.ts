import { NavigateFunction } from "react-router-dom";
import Book from "../models/book";
import { SearchBooksResponse } from "../types/books";
import { baseService } from "./baseService";

class BookService {
  private baseService = baseService;

  async getAllBooksAsync(navigate: NavigateFunction): Promise<Book[]> {
    return this.baseService.get("/books", navigate);
  }
  async getAllBookByIdAsync(
    bookId: string,
    navigate: NavigateFunction
  ): Promise<Book> {
    return this.baseService.get(`/books/${bookId}`, navigate);
  }

  async getBooksBySearchAsync(
    url: string,
    navigate: NavigateFunction
  ): Promise<SearchBooksResponse> {
    return this.baseService.get(`/books/search?${url}`, navigate);
  }
}

const bookService = new BookService();

export default bookService;
