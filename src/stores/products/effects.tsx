import ApiService from "../../core/services/api.service";
import { productActions } from "./slice";

// As Effect
export const getProducts: any = (queryParams: any) => {
    return (dispatch?: any) => {
        const apiService = new ApiService();
        // Get Request Send
        dispatch(productActions.getProductRequestSend({}));
        // Service Method
        apiService.get('products', {
            params: queryParams
        }).then(({responseData, responseSuccess}) => {
            if (responseSuccess) {
                dispatch(productActions.getProductRequestSuccess({...responseData, page: queryParams.page}));
            } else {
                dispatch(productActions.getProductRequestFailed({}));
            }
        });
    }
}