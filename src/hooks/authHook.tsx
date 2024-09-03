import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";
import { ILogin } from "../types/heros";
import { useLocalStorage } from "./useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../store/slices/authSlice";
import { RootState } from "../store/store";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setLocalStorage, removeItem } = useLocalStorage();
  const login = async (loginState: ILogin) => {
    const result = await authService.login(navigate, loginState);
    if (result.isLoggedIn) {
      setLocalStorage("token", result.token);
      dispatch(logIn(result));
      navigate("/");
    }
  };
  const signup = async (loginState: ILogin) => {
    const result = await authService.signup(navigate, loginState);
    if (result.isLoggedIn) {
      dispatch(logIn(result));
      setLocalStorage("token", result.token);
      navigate("/");
    }
  };

  const logout = () => {
    removeItem("token");
    dispatch(logOut());
    navigate("/auth");
  };

  return { login, signup, logout };
};

export const useAuthState = () => {
  const { isLoggedIn, token, email } = useSelector(
    (state: RootState) => state.auth
  );
  return { isLoggedIn, token, email };
};
