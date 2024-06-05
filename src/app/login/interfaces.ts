import LoginService from "./login.service";
import LoginController from "./login.controller";
export type LoginResponse = {
  token: string;
  expireDateToken: number;
};
export type LoginPostBody = {
  username: string;
  password: string;
};

export interface LoginInjectionEntities {
  loginService: LoginService;
  loginController: LoginController;
}
