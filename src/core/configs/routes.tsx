export interface IRoute {
    id: number,
    label: string,
    path: string,
}
export const NAVIBARIONS: IRoute[] = [
    {
        id: 1,
        label: 'Home',
        path: '/',
    },
    {
        id: 2,
        label: 'Products',
        path: 'products',
    },
    {
        id: 3,
        label: 'About',
        path: 'about',
    },
    {
        id: 4,
        label: 'Faq',
        path: 'faq',
    },
    {
        id: 5,
        label: 'Login',
        path: 'login',
    }
];