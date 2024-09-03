import { NavigateFunction } from "react-router-dom";
import { baseService } from "./baseService";
import { IAuthResposnse, ILogin } from "../types/heros";

class AuthService {
  private baseService = baseService;

  async login(
    navigate: NavigateFunction,
    loginState: ILogin
  ): Promise<IAuthResposnse> {
    return this.baseService.post("/login", navigate, loginState);
  }

  async signup(
    navigate: NavigateFunction,
    loginState: ILogin
  ): Promise<IAuthResposnse> {
    return this.baseService.post("/signup", navigate, loginState);
  }
}

export const authService = new AuthService();
