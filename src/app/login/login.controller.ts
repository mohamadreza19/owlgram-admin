import { ErrorFactory, TokenStorageService } from '@lib/services';
import { LoginPostBody } from './interfaces';
import LoginApiService from './login.api';
import LoginService from './login.service';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

class LoginController {
  constructor(
    private loginService: LoginService,
    private loginApiService: LoginApiService,
    private tokenStorageService: TokenStorageService,
    private router: AppRouterInstance
  ) {}
  handleLogin = async (body: LoginPostBody) => {
    const result = await this.loginApiService.getLogin(body);
    if (!result.token) throw ErrorFactory.ERR_BAD_REQUEST("Can't find user ");
    this.tokenStorageService.setAccessToken(result.token);
    this.tokenStorageService.setAccessTokenExpire(
      String(result.expireDateToken)
    );

    this.router.push('/');
  };

  authorizeUserIfLogin = (path: string) => {
    const expireDate_ms = this.tokenStorageService.getAccessTokenExpire();
    const now_ms = Number(new Date());
    if (expireDate_ms) {
      let expireDate_msToNum = Number(expireDate_ms);
      let date = new Date(expireDate_msToNum);

      if (expireDate_msToNum > now_ms) {
        if (path.includes('login')) {
          this.router.push('/');
        }
      } else {
        this.router.push('/login');
      }
    } else {
      this.router.push('/login');
    }
  };

  // Add controller methods here
}
export default LoginController;
