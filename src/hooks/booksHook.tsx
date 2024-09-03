import { useState } from "react";
import Book from "../models/book";
import bookService from "../services/bookService";
import { useNavigate } from "react-router-dom";

export const useBooks = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setErrors] = useState<string | null>(null);
  const navigate = useNavigate();
  const getBookById = async (bookId?: string) => {
    try {
      const result: Book = await bookService.getAllBookByIdAsync(
        bookId ? bookId : "1",
        navigate
      );
      setBook(result);
    } catch (err: unknown) {
      setErrors(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  return { book, isLoading, error, getBookById };
};
