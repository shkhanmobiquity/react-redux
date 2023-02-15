export interface IPaginator {
    filteredTotal: number;
    total: number;
    page: number;
    limit: number;
}

export interface IState<T> {
    listData: T[],
    paginoator?: IPaginator,
    status?: {
        getListStatus: 'idle' | 'pending' | 'succeeded' | 'failed',
        [key: string]: any
    },
    successMessage?: {
        getListStatus: string,
        [key: string]: any
    },
    errorMessage?: {
        getListStatus: string,
        [key: string]: any
    },
    [key: string]: any
}