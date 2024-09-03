import Book from "../models/book";

export type SearchBooksResponse = {
  totalCount: number;
  filteredCount: number;
  totalPages: number;
  content: Book[];
};

export type CategoryOptions = "" | "FE" | "BE" | "Data" | "DevOps";
