export type BoxType = {
  title: string;
  content: string;
  showBtn: boolean;
};

// export interface IUser {
//   userName: string;
// }

export interface ILogin {
  username: "";
  password: "";
}

export interface ISignUp extends ILogin {
  confirmPassword: ""; // Only used for signup
}

export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IAuthResposnse extends IApiResponse<string> {
  token: string;
  isLoggedIn: boolean;
  email: string;
}
