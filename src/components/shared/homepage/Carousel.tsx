import { Button, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { CarouselItem } from "./Carouselitem";

import { useEffect, useState } from "react";
import Book from "../../../models/book";
import bookService from "../../../services/bookService";
import { LoadingSpinner } from "../ui/LoadingSpinner";
import { useNavigate } from "react-router-dom";

export const BookCarousel = () => {
  const [books, setBooks] = useState<Book[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setErrors] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result: Book[] = await bookService.getAllBooksAsync(navigate);
        const loadedBooks: Book[][] = [];
        if (result.length) {
          for (let i = 0; i < result.length - 3; i = i + 3) {
            loadedBooks.push([result[i], result[i + 1], result[i + 2]]);
          }
          setBooks(loadedBooks);
        }
      } catch (err: unknown) {
        setErrors(err as string);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <Container>
        <p>Could not fetch books. Error: {error}</p>
      </Container>
    );
  }
  return (
    <Container className="h-[500px] ">
      <header className="flex justify-center mb-4">
        <h3>Find your next 'I stayed up too late reading' book.</h3>
      </header>
      <Carousel indicators={false} className=" my-0 mx-auto" autoPlay={false}>
        {books.map((item: Book[], index: number) => {
          return (
            <div key={index} className="flex flex-row justify-center gap-x-10">
              {item.map((book: Book) => (
                <CarouselItem key={book.title} book={book} />
              ))}
            </div>
          );
        })}
      </Carousel>
      <footer className="flex justify-center mt-5">
        <Button variant="outlined">View More</Button>
      </footer>
    </Container>
  );
};
