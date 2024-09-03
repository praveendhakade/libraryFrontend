import { Button, Menu, MenuItem, Rating, Typography } from "@mui/material";
import { useRef, useState } from "react";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ReviewForm from "./ReviewForm";
import { useReviews } from "../../../hooks/reveiwHooks";
import Book from "../../../models/book";

const RATINGS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
export const PostReview = ({
  book,
  userAddedReview,
}: {
  book: Book;
  userAddedReview: boolean;
}) => {
  const [rating, setRating] = useState<number>(0);
  const { addReviewByBookId } = useReviews();
  const [open, setOpen] = useState<boolean>(false);
  const [showReviewField, setShowReviewField] = useState<boolean>(false);
  //   const [isReveiwAdded, setIsReviewAdded] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const handleSelect = (value: number) => {
    setRating(value);
    setOpen(false);
    setShowReviewField(true);
  };

  const postReview = async (review: string) => {
    const result = await addReviewByBookId(String(book.id), review, rating);
    // if (result) setIsReviewAdded(true);
    // else setIsReviewAdded(false);
    console.log(result);
  };

  return (
    <div>
      {userAddedReview ? (
        <p className=" font-semibold">Thank you for your review.</p>
      ) : (
        <div className=" flex flex-col justify-start">
          <header className="flex justify-start items-center ">
            <Typography variant="h6">Leave a review?</Typography>
            <div ref={buttonRef}>
              <Button
                onClick={() => setOpen(!open)}
                className="!m-0 !p-0"
                size="small"
              >
                <ArrowDropDownSharpIcon className=" text-black" />
              </Button>
            </div>
            <Menu
              open={open}
              anchorEl={buttonRef.current}
              onClose={() => setOpen(false)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              {RATINGS.map((item) => (
                <MenuItem
                  key={item}
                  value={item}
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </header>
          <Rating precision={0.5} value={rating} />
          {showReviewField && <ReviewForm postReview={postReview} />}
        </div>
      )}
    </div>
  );
};
