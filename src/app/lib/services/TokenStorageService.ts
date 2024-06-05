export default class TokenStorageService {
  setAccessToken(token: string) {
    localStorage.setItem("accessToken", token);
  }
  setAccessTokenExpire(time: string) {
    localStorage.setItem("AccessTokenExpire", time);
  }

  getAccessTokenExpire() {
    return localStorage.getItem("AccessTokenExpire");
  }

  getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }

  getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
}
