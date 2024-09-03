import { Button, Container, Typography } from "@mui/material";
import { useAuthState } from "../../../hooks/authHook";
import { Link } from "react-router-dom";

export const LibraryServices = () => {
  const { isLoggedIn } = useAuthState();
  return (
    <Container className=" shadow-lg py-5 border border-light-grey">
      <section className="flex ">
        <div className=" w-[60%] flex flex-col justify-center gap-4">
          <Typography variant="h2" component={"h2"}>
            Can't find what you are looking for?
          </Typography>
          <Typography variant="body2" component={"p"}>
            If you cannot find what you are looking for, send our library
            admin's a personal message!
          </Typography>
          <div>
            {isLoggedIn ? (
              <Link to={"#"}>
                <Button variant="contained">Library Services</Button>
              </Link>
            ) : (
              <Link to={"/auth"}>
                <Button variant="contained">Sign up</Button>
              </Link>
            )}
          </div>
        </div>
        <div className="home-img library-img h-[300px] w-[40%]" />
      </section>
    </Container>
  );
};
