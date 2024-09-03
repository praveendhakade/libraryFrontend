import { Button, Divider, Typography } from "@mui/material";
import Review from "../../../models/Review";
import { ReviewBox } from "./ReviewBox";
import { Link } from "react-router-dom";

export const LatestReviews = ({ reveiws }: { reveiws: Review[] }) => {
  return (
    <div className="my-4 flex gap-4 flex-col sm:flex-row  items-center">
      <header className=" self-start">
        <Typography variant="h4">Latest Reveiws:</Typography>
      </header>
      <section className=" flex-grow ">
        {reveiws.length > 0 ? (
          <>
            {reveiws.map((review) => (
              <ReviewBox review={review} key={review.id} />
            ))}
            <Divider className="!my-4" />
            <div>
              <Link to="/">
                <Button variant="contained">Reach all reviews</Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-start">
            Currently there are mo reviews for this book yet.
          </div>
        )}
      </section>
    </div>
  );
};
