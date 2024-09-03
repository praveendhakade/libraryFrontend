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

export const CarouselItem = ({ book }: { book: Book }) => {
  return (
    <Card className="flex justify-center items-center flex-col my-0 w-[250px] ">
      {book?.img ? (
        <CardMedia
          component={"img"}
          image={book.img}
          alt={book.title}
          sx={{ width: "151px", height: "233px" }}
        />
      ) : (
        <CardMedia
          component={"img"}
          image={"/images/booksImages/book-luv2code-1000.png"}
          alt={book.title}
          sx={{ width: "151px", height: "233px" }}
        />
      )}
      <CardContent>
        <Typography component={"h6"} variant="h6">
          {book.title}
        </Typography>
        <Typography component={"p"}>{book?.author || ""}</Typography>
      </CardContent>
      <CardActions>
        <Link to="/auth">
          <Button variant="contained" size="small">
            Reserve
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
