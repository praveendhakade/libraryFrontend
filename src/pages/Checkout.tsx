import { Container, Divider } from "@mui/material";
import { useEffect } from "react";
import { LoadingSpinner } from "../components/shared/ui/LoadingSpinner";

import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/booksHook";
import { BookDetails } from "../components/shared/checkout/BookDetails";
import { useReviews } from "../hooks/reveiwHooks";
import { LatestReviews } from "../components/shared/checkout/LatestReviews";

export const Checkout = () => {
  const { book, isLoading, error, getBookById } = useBooks();
  const {
    isLoadingReviews,
    reviews,
    loadReviews,
    totalStars,
    userAddedReview,
  } = useReviews();
  const { bookId } = useParams();
  useEffect(() => {
    (async function () {
      await getBookById(bookId);
      await loadReviews(bookId!);
    })();
  }, [bookId]);

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
    <Container className="mt-4">
      {book && (
        <BookDetails
          book={book}
          totalStars={totalStars}
          userAddedReview={userAddedReview}
        />
      )}
      <Divider />
      {isLoadingReviews ? "Loading.." : <LatestReviews reveiws={reviews} />}
    </Container>
  );
};
