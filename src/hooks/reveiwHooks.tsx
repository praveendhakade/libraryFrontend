import { useState } from "react";
import Review from "../models/Review";
import { reviewService } from "../services/reveiwService";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "./authHook";

export const useReviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const { email } = useAuthState();
  const [totalStars, setTotalStars] = useState<number>(0);
  const [userAddedReview, setUserAddedReview] = useState<boolean>(false);
  const [isLoadingReviews, setisLoadingReviews] = useState<boolean>(true);
  const navigate = useNavigate();
  const loadReviews = async (bookId: string) => {
    try {
      const reviewsResponse = await reviewService.getReviewsAsync(
        bookId,
        navigate
      );
      if (reviewsResponse.length) {
        setReviews(reviewsResponse);
        reviewsResponse.forEach((item) => {
          if (item.userEmail === email) setUserAddedReview(true);
        });
        const totalStarsReviews: number = reviewsResponse.reduce(
          (acc, curr) => {
            return (acc += curr.rating);
          },
          0
        );
        setTotalStars(
          Number(
            (
              Math.round((totalStarsReviews / reviewsResponse.length) * 2) / 2
            ).toFixed(1)
          )
        );
      }
    } catch (err) {
      console.log(err);
    } finally {
      setisLoadingReviews(false);
    }
  };

  const addReviewByBookId = async (
    bookId: string,
    review: string,
    rating: number
  ) => {
    const savedReview: Review = new Review(
      0,
      email,
      "",
      parseInt(bookId),
      rating,
      review
    );
    const result = await reviewService.addReveiw(savedReview, navigate);
    if (result.success) {
      return result.success;
    } else return false;
  };

  return {
    reviews,
    totalStars,
    isLoadingReviews,
    loadReviews,
    addReviewByBookId,
    userAddedReview,
  };
};
