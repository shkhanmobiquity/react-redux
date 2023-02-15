import { useSelector } from "react-redux";
import { IState } from "../interfaces/api.interface";

const useAsyncActionSelector = (moduleSelector: any) => {
    const state: IState<any> = useSelector(moduleSelector);
    const isRequestSent = state.status?.getListStatus === 'pending';
    const isRequestSuccess = state.status?.getListStatus === 'succeeded';
    const isRequestFailed = state.status?.getListStatus === 'failed';
    const data = state.listData;
    const paginator = state.paginoator;
    const successMsg = state.successMessage?.getListStatus;
    const errorMsg = state.errorMessage?.getListStatus;
    // Blocks
    const isShowErrorBlock = isRequestFailed;
    const isShowDataBlock = ( isRequestSuccess || data.length > 0 );
    const isShowLoaderBlock = (isRequestSent && data.length === 0);
    const isShowLoaderAgainBlock = ( isRequestSent && data.length > 0 );
    return {
        isRequestSent, isRequestSuccess,
        isRequestFailed, data, paginator,
        message: isRequestSuccess ? successMsg : errorMsg,
        isShowErrorBlock, isShowDataBlock, isShowLoaderBlock, isShowLoaderAgainBlock
    }
}

export default useAsyncActionSelector;