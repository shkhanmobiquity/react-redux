import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export interface IApiResponse {
    responseData: any;
    responseCode: string;
    responseSuccess: boolean;
    responseStatus: string;
    responseError?: any;
    responseMessage?: string;
}

class ApiService {
    authorizationToken = null;
    httpClient = null;
    axiosInstance = axios.create({
        baseURL: "https://dummyjson.com/",
    });
    api_token = '';

    constructor() {
        this.setHeaders();
        this.axiosInstance.interceptors.response.use(
            function (response: AxiosResponse<any, any>) {
              return {
                  responseData: response.data,
                  responseCode: response.status,
                  responseStatus: response.status,
                  responseSuccess: true,
                  responseMessage: '',
              } as unknown as AxiosResponse<IApiResponse>;
            },
            function (error: any) {
              return {
                responseData: {},
                responseCode: '',
                responseStatus: '',
                responseSuccess: false,
                responseError: error,
                responseMessage: error.message
              } as unknown as AxiosResponse<IApiResponse>;
            }
        );
    }

    setHeaders() {
        this.authorizationToken = null;
        let headers: any = {
            Accept: "application/json"
        };
        if (this.api_token) {
            headers.Authorization = `Bearer ${
                this.authorizationToken
            }`;
        }
        this.axiosInstance = axios.create({
            baseURL: 'https://dummyjson.com/',
            timeout: 31000,
            headers: headers
        });
    }


    get = (url: string, config: AxiosRequestConfig<any>) => {
       return this.axiosInstance.get(url, config) as Promise<IApiResponse>;
    }

    post = (url: string, data: any, config: AxiosRequestConfig<any>) => {
        return this.axiosInstance.post(url, data, config) as Promise<IApiResponse>;
    }
}

export default ApiService;
