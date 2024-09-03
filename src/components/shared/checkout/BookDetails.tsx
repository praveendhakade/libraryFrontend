import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import Book from "../../../models/book";
import { Link } from "react-router-dom";
import { useAuthState } from "../../../hooks/authHook";
import { PostReview } from "./PostReview";

export const BookDetails = ({
  book,
  totalStars,
  userAddedReview,
}: {
  book: Book;
  totalStars: number;
  userAddedReview: boolean;
}) => {
  const { isLoggedIn } = useAuthState();
  return (
    <div className="p-2 my-4">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <CardMedia
          component={"img"}
          image={book?.img || "/images/booksImages/book-luv2code-1000.png"}
          alt="Book"
          sx={{
            width: "123px",
            height: "196px",
          }}
        />
        <div className="w-full sm:w-[70%]">
          <CardContent>
            <Typography component={"h4"} variant="h4">
              {book.title}
            </Typography>
            <Typography
              component={"h6"}
              variant="h6"
              className=" text-blue-500"
            >
              {book?.author || ""}
            </Typography>
            <Typography component={"p"} variant="body2">
              {book?.description || ""}
            </Typography>
            <Rating value={totalStars} precision={0.5} />
          </CardContent>
        </div>
        <Card className=" max-w-[280px]">
          <CardContent className="flex flex-col gap-4">
            <Typography variant="body2">0/5 books checked out</Typography>
            <Divider />
            <div className="flex flex-col gap-4">
              <Typography variant="h6" color={"green"}>
                Available
              </Typography>
              <div className="flex justify-between items-center">
                <Typography variant="body2">
                  {book?.copies || 0} copies
                </Typography>
                <Typography variant="body2">
                  {book?.copiesAvailable || 0} available
                </Typography>
              </div>
              {isLoggedIn ? (
                <Link to="/auth">
                  <Button variant="contained" color="success">
                    Checkout
                  </Button>
                </Link>
              ) : (
                <Link to="/auth">
                  <Button variant="contained" color="primary">
                    Sign in
                  </Button>
                </Link>
              )}
            </div>
            <Divider />
            <Typography variant="body2">
              This number can change until placing order has been complete.
            </Typography>
            {isLoggedIn ? (
              <PostReview book={book} userAddedReview={userAddedReview} />
            ) : (
              <Typography variant="body2">
                Sign in to be able to leave a reveiw.
              </Typography>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
