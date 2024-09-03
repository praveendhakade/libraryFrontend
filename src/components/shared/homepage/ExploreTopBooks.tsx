import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
  return (
    <div className=" pb-5 mb-4  header">
      <div className=" w-full h-full py-5  text-white flex justify-center items-center">
        <div className="flex flex-col gap-y-4 items-center">
          <Typography component={"h1"} className=" !text-[30px] !font-bold">
            Find your next adventure
          </Typography>
          <Typography component={"p"}>
            Where would you like to go next?
          </Typography>
          <Link to="/searchBooks" type="button">
            <Button variant="contained">Explore top books</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
