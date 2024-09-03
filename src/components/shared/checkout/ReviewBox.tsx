import { Rating, Typography } from "@mui/material";
import Review from "../../../models/Review";

export const ReviewBox = ({ review }: { review: Review }) => {
  const date = new Date(review.date);
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const dateString = day + " " + month + " " + year;
  return (
    <div className="flex items-center gap-4 justify-between">
      <div>
        <Typography variant="h5">{review.userEmail}</Typography>
        <div className=" flex gap-4 items-center">
          <Typography variant="body2">{dateString}</Typography>
        </div>
        <Typography variant="body2">{review.reviewDescription}</Typography>
      </div>
      <Rating value={review.rating} precision={0.5} />
    </div>
  );
};
