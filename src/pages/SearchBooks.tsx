import React, { useCallback, useEffect, useState } from "react";
import Book from "../models/book";
import bookService from "../services/bookService";
import {
  Button,
  Container,
  FormControl,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingSpinner } from "../components/shared/ui/LoadingSpinner";
import { SearchBook } from "../components/shared/searchBooks/SearchBook";
import { CategoryOptions, SearchBooksResponse } from "../types/books";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "../hooks/authHook";

export const SearchBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setErrors] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [filteredCount, setFilteredCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState<CategoryOptions>("");
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthState();
  const fetchBooks = useCallback(
    async (url: string) => {
      try {
        const result: SearchBooksResponse =
          await bookService.getBooksBySearchAsync(url, navigate);
        setBooks(result.content);
        setTotalPages(result.totalPages);
        setTotalCount(result.totalCount);
        setFilteredCount(result.filteredCount);
      } catch (err: unknown) {
        setErrors(err as string);
      } finally {
        setIsLoading(false);
        window.scrollTo(0, 0);
      }
    },
    [searchText, page, category]
  );

  useEffect(() => {
    const url = `title=${searchText ? searchText : ""}&page=${page - 1}&size=3`;
    fetchBooks(url);
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };
  const handleSearch = async () => {
    const url = `title=${searchText ? searchText : ""}&page=${page - 1}&size=3`;
    await fetchBooks(url);
  };

  const handleSelect = async (event: SelectChangeEvent) => {
    const newCategory = event.target.value as CategoryOptions;
    setCategory(newCategory);
    const url = `category=${newCategory}&page=${page - 1}&size=3`;
    await fetchBooks(url);
  };

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
    <Container>
      <section className="py-4">
        <div className="flex justify-start items-start gap-4 ">
          <div className="flex gap-4">
            <TextField
              type="search"
              value={searchText}
              onChange={onChange}
              size="small"
              placeholder="Search"
            />
            <Button variant={"outlined"} onClick={handleSearch}>
              Search
            </Button>
          </div>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              size="small"
              value={category}
              displayEmpty
              className=" bg-light-grey"
              onChange={handleSelect}
            >
              <MenuItem value={""}>All</MenuItem>
              <MenuItem value={""} hidden={true} className=" !hidden">
                Category
              </MenuItem>
              <MenuItem value={"FE"}>Front End</MenuItem>
              <MenuItem value={"BE"}>Back End</MenuItem>
              <MenuItem value={"Data"}>Data</MenuItem>
              <MenuItem value={"DevOps"}>DevOps</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="mt-4">
          {totalPages > 1 && (
            <>
              <h5 className=" font-semibold">
                Number of results: {filteredCount} of {totalCount}{" "}
              </h5>
              <p>
                Showing: {page} of total {totalPages} pages
              </p>
            </>
          )}
        </div>
      </section>
      <section>
        {books.length ? (
          books.map((book: Book) => (
            <SearchBook book={book} key={book.author} />
          ))
        ) : (
          <div className="flex flex-col gap-4 justify-center items-start">
            <Typography variant="body2">
              Can't find what you are looking for?
            </Typography>
            {isLoggedIn ? (
              <Link to={"#"}>
                <Button variant="contained">Library Services</Button>
              </Link>
            ) : (
              <Button variant="contained">Sign up</Button>
            )}
          </div>
        )}
      </section>
      <section className="flex justify-center my-5">
        {totalPages > 1 && (
          <Pagination count={totalPages} page={page} onChange={handleChange} />
        )}
      </section>
    </Container>
  );
};
