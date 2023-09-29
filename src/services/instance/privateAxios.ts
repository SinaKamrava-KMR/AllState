import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { BASE_URL } from "../../configs/constance";

const privateAxios: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});


const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config;
};


const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};


privateAxios.interceptors.request.use(onRequest, onRequestError);

export default privateAxios;
