import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { NavigateFunction } from "react-router-dom";

class BaseService {
  baseUrl: string = "http://localhost:8080/api";

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Retrieve the token from storage (localStorage/sessionStorage or other means)
        const token = localStorage.getItem("token"); // Adjust as needed to your app's logic
        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`, // Add Authorization header
          } as AxiosRequestHeaders;
          // config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error: AxiosError) => {
        // Handle request error
        return Promise.reject(error);
      }
    );
  }

  async get(endPoint: string, navigate: NavigateFunction) {
    try {
      const response: AxiosResponse = await this.axiosInstance.get(endPoint);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error as AxiosError, navigate);
      throw error;
    }
  }

  async post(
    endPoint: string,
    navigate: NavigateFunction,
    requestBody: unknown
  ) {
    try {
      const response: AxiosResponse = await this.axiosInstance.post(
        endPoint,
        requestBody
      );
      return response.data;
    } catch (error: unknown) {
      this.handleError(error as AxiosError, navigate);
      throw error;
    }
  }

  private handleError(error: AxiosError, navigate: NavigateFunction): void {
    if (error.response) {
      // Server responded with a status code out of 2xx range
      console.error("Error Response:", error.response.data);
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Error Request:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error Message:", error.message);
    }
    console.error("Config:", error.config);
    navigate("/auth");
  }
}

export const baseService = new BaseService();
