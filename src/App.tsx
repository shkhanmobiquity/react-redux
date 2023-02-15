
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
// pages
import AboutPage from './pages/About/AboutPage';
import ErrorPage from './pages/Errors/ErrorPage';
import HomePage from './pages/Home/HomePage';
import LayoutPage from './pages/Layout/LayoutPage';
import LoginPage from './pages/Login/LoginPage';
import ProductDetailPage from './pages/Products/pages/ProductDetail/ProductDetailPage';
import ProductsPage from './pages/Products/ProductsPage';
// Redux
import store from './stores';
import CartPage from './pages/Cart/CartPage';

const routes = createBrowserRouter([
    {
        path: '',
        element: <LayoutPage/>,
        errorElement: <ErrorPage/>,
        loader: () => {
            console.log('jell');
            return true;
        },
        children: [
            {
                path: '',
                index: true,
                element: <HomePage/>
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'cart',
                element: <CartPage/>
            },
            {
                path: 'products',
                children: [
                  {
                    path: '',
                    index: true,
                    element: <ProductsPage/>,
                  },
                  {
                    path: ':productId',
                    element: <ProductDetailPage/>,
                  }
                ]
            }
        ]
    }
])

const App = () => {
    return (
        <Provider store={store}>
            <RouterProvider router={routes}/>
        </Provider>
    )
}
export default App;