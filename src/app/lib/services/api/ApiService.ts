import axios, { AxiosDefaults, AxiosError, AxiosInstance } from "axios";
import config from "config";
import TokenStorageService from "../TokenStorageService";
import LoadingService from "../LoadingService";
import GlobalStoreService from "../GlobalStoreService";
import { QueryClient } from "@tanstack/react-query";

type UrlExtension =
  | "auth"
  | "admin"
  | "users"
  | "products"
  | "files"
  | "categories"
  | "home";

enum HttpStatus {
  UNAUTHORIZED = 401,
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

class ApiService {
  protected $axios: AxiosInstance;
  protected queryClient: QueryClient = queryClient;

  private tokenStorageService = new TokenStorageService();
  private loadingService = new LoadingService();

  constructor() {
    this.$axios = axios.create({
      baseURL: config.BASE_URL,
      headers: {
        Authorization: "Bearer " + this.tokenStorageService.getAccessToken(),
      },
    });
    this.$axios.interceptors.request.use(
      (config) => {
        this.loadingService.addPluse();
        // Do something before request is sent
        return config;
      },
      (error) => {
        this.loadingService.removePluse();
        console.log(error);
        // this.globalStoreService.addApiStatus({
        //   status: "error",
        //   errorMsg: error,
        // });

        // Do something with request error
        return Promise.reject(error);
      }
    );
    this.$axios.interceptors.response.use(
      (config) => {
        this.loadingService.removePluse();
        // Do something before request is sent

        return config;
      },
      async (error: AxiosError) => {
        // this.loadingService.removePluse();
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }
  jsonToFormData(json: any) {
    const formData = new FormData();
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        formData.append(key, json[key]);
      }
    }
    return formData;
  }
}
export default ApiService;
