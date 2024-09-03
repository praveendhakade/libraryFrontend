import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Book from "../../../models/book";
import { Link } from "react-router-dom";

export const SearchBook = ({ book }: { book: Book }) => {
  return (
    <Card className="my-5 p-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
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
            <Typography component={"h5"} variant="h5">
              {book?.author || ""}
            </Typography>
            <Typography component={"h4"} variant="h4">
              {book.title}
            </Typography>
            <Typography component={"p"} variant="body2">
              {book?.description || ""}
            </Typography>
          </CardContent>
        </div>

        <CardActions>
          <Link to={`/checkout/${book.id}`}>
            <Button type="button" variant="contained">
              View More
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  );
};
