import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth, useAuthState } from "../../hooks/authHook";

export const NavOptions = ({ flexClasss }: { flexClasss: string }) => {
  const { isLoggedIn } = useAuthState();
  const { logout } = useAuth();
  return (
    <div className={`flex flex-1 justify-between  ${flexClasss}`}>
      <div className={`flex justify-start ${flexClasss}`}>
        <div>
          <Link to={"/"}>
            <Button color="inherit">Home</Button>
          </Link>
        </div>
        <div>
          <Link to={"/searchBooks"}>
            <Button color="inherit">Search Books</Button>
          </Link>
        </div>
      </div>
      <div>
        {isLoggedIn ? (
          <Button color="inherit" variant="outlined" onClick={logout}>
            Log out
          </Button>
        ) : (
          <Link to="/auth">
            <Button color="inherit">Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
