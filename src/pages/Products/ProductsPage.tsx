import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PageTitle } from '../../shared/UI';
import useAsyncActionSelector from '../../core/hooks/async-action-selector';
import { getProducts, IProduct, productsSelector } from '../../stores/products'
import Product from './componets/Product';
import RPagination from '../../shared/components/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import './ProductsPage.scss'
import { cartActions } from '../../stores/cart';
const ProductsPage = () => {
    const dispatch = useDispatch();
    
    const productSelectors = useAsyncActionSelector(productsSelector);
    const initialQuery = { limit: 8, skip: 0, page: 1 }
    // Hooks
    useEffect(() => {
        dispatch(getProducts(initialQuery));
    }, [dispatch]); 
    // Page Change
    const paginationChange = ({page,skip }: any) => {
        dispatch(getProducts({ ...initialQuery, skip, page }));
    }

    // Events
    const addToCart = (item: IProduct) => {
        dispatch(cartActions.add(item))
    }


    // Data Properties
    const pageTitle = 'Products';
    return <React.Fragment>
        <div className="container-fluid bg-secondary py-5">
            <div className="container">
                <PageTitle>{pageTitle}</PageTitle>
            </div>
        </div>
        <div className="container-fluid py-5">
            <div className="container position-relative">
                {/* Product list api loader */}
                {
                    productSelectors.isShowLoaderAgainBlock && <React.Fragment>
                        <div className="text-center block-loader">
                            <Spinner animation="border" />
                        </div>
                    </React.Fragment>
                }
                {
                    productSelectors.isShowLoaderBlock && <React.Fragment>
                        <div className="text-center mt-5 mb-5">
                            <Spinner animation="border" />
                            <h1 className='text-center mt-4'>API is calling please wait...</h1>
                        </div>
                    </React.Fragment>
                }
                {/* Product list api error */}
                {
                    productSelectors.isShowErrorBlock && <h1>There is an error!</h1>
                }
                {/* Prodcuct list wraper */}
                {
                    productSelectors.isShowDataBlock && <React.Fragment>
                        <div className="d-flex flex-wrap">
                            {productSelectors.data?.map((product) => {
                                return <div className="col-md-3 p-2" key={product.id} >
                                    <Product tiggerAddToCart={addToCart} product={product}/>
                                </div>
                            })}
                        </div>
                        <div className="d-flex justify-content-center mt-4">
                            <RPagination change={paginationChange} total={productSelectors?.paginator?.total ?? 1} limit={productSelectors?.paginator?.limit ?? 10} currentPage={productSelectors?.paginator?.page ?? 1}/>
                        </div>
                    </React.Fragment>
                }
            </div>
        </div> 
    </React.Fragment>
}

export default ProductsPage;