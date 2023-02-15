import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ApiService from "../../../../core/services/api.service";
import { cartActions } from "../../../../stores/cart";
import "./ProductDetailPage.scss";

const ProductDetailPage: React.FC<any> = (props) => {
  const [productDatail, setProductDetail] = useState({
    isLoaded: false,
    product: {} as any,
  });
  const dispatch = useDispatch();
  const { product, isLoaded } = productDatail ?? {};
  // Api Service
  const apiService = new ApiService();
  // Route Params
  const routeParams = useParams();
  // Component First Time Rendar
  useEffect(() => {
    const getSingleProduct = async () => {
      const apiResponce = await apiService.get(
        `/products/${routeParams.productId}`,
        {}
      );
      setProductDetail({
        isLoaded: true,
        product: apiResponce.responseData,
      });
    };
    setTimeout(() => {
      getSingleProduct();
    }, 2000);
  }, []);
  return (
    <React.Fragment>
      {isLoaded && (
        <div className="container-fluid bg-secondary py-1">
          <div className="container">
            <h1 className="text-white py-5 text-center text-uppercase fs-1 lh-sm">
              {product.title}
            </h1>
          </div>
        </div>
      )}
      <div className="container">
        {!isLoaded && <h1 className="mt-5">Fetching Product Details...</h1>}
        {isLoaded && (
          <div className="d-flex my-5 flex-wrap">
            <div className="col-md-5 pe-5">
              <div className="big-image border">
                <img
                  src={product.thumbnail}
                  alt="Product Thumb"
                  className="img-fluid"
                />
              </div>
              <div className="d-flex flex-wrap">
                {product.images.map((img: string) => {
                  return (
                    <div className="img-thumbnail m-2">
                      <img src={img} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-7">
              <span className="bg-danger text-white d-inline-block px-2 rounded mb-2">
                {product.brand}
              </span>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              {product.stock > 0 ? (
                <p className="text-success px-2 border d-inline-block rounded">
                  In Stock
                </p>
              ) : (
                <p className="rounded text-danger  px-2 border d-inline-block">
                  Out of Stock
                </p>
              )}
              <h2 className="">
                <small>Price: </small>
                <i>${product.price} </i>
                <del>
                  {" "}
                  $
                  {(
                    (product.price * product.discountPercentage) / 100 +
                    product.price
                  ).toFixed(2)}
                </del>
              </h2>
              <h2 className="text-success fs-4">
                <small>Discount: </small>
                <i>{product.discountPercentage}%</i>
              </h2>
              <button className="btn btn-success mt-3" onClick={() => dispatch(cartActions.add(product))}>Add to Cart</button>
            </div>

            <div className="content mt-1 col-12 p-4 border">
              <p className="fs-6 lh-lg text-align-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit illo optio non, enim laudantium debitis laborum sed,
                suscipit sint officiis nostrum vitae. Aspernatur vitae nostrum
                officiis dolorem nulla qui similique? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Impedit illo optio non, enim
                laudantium debitis laborum sed, suscipit sint officiis nostrum
                vitae. Aspernatur vitae nostrum officiis dolorem nulla qui
                similique? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Impedit illo optio non, enim laudantium debitis laborum
                sed, suscipit sint officiis nostrum vitae. Aspernatur vitae
                nostrum officiis dolorem nulla qui similique? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Impedit illo optio non,
                enim laudantium debitis laborum sed, suscipit sint officiis
                nostrum vitae. Aspernatur vitae nostrum officiis dolorem nulla
                qui similique? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Impedit illo optio non, enim laudantium
                debitis laborum sed, suscipit sint officiis nostrum vitae.
                Aspernatur vitae nostrum officiis dolorem nulla qui similique?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit illo optio non, enim laudantium debitis laborum sed,
                suscipit sint officiis nostrum vitae. Aspernatur vitae nostrum
                officiis dolorem nulla qui similique? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Impedit illo optio non, enim
                laudantium debitis laborum sed, suscipit sint officiis nostrum
                vitae. Aspernatur vitae nostrum officiis dolorem nulla qui
                similique? Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Impedit illo optio non, enim laudantium debitis laborum
                sed, suscipit sint officiis nostrum vitae. Aspernatur vitae
                nostrum officiis dolorem nulla qui similique? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Impedit illo optio non,
                enim laudantium debitis laborum sed, suscipit sint officiis
                nostrum vitae. Aspernatur vitae nostrum officiis dolorem nulla
                qui similique? Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Impedit illo optio non, enim laudantium
                debitis laborum sed, suscipit sint officiis nostrum vitae.
                Aspernatur vitae nostrum officiis dolorem nulla qui similique?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit illo optio non, enim laudantium debitis laborum sed,
                suscipit sint officiis nostrum vitae. Aspernatur vitae nostrum
                officiis dolorem nulla qui similique? Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Impedit illo optio non, enim
                laudantium debitis laborum sed, suscipit sint officiis nostrum
                vitae. Aspernatur vitae nostrum officiis dolorem nulla qui
                similique?
              </p>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default ProductDetailPage;
