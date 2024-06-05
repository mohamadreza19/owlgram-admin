import { AxiosError } from "axios";

export default class {
  static ERR_BAD_REQUEST(message: string) {
    const error = new AxiosError(message, "ERR_BAD_REQUEST");

    return error;
  }
}
