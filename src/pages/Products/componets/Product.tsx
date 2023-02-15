import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// model
import { IProduct } from '../../../stores/products';
// css
import './Product.scss'

const Product: React.FC<{product: IProduct, tiggerAddToCart: (item: IProduct) => void}> = props => {
    const { product, tiggerAddToCart } = props ?? {};
    const { thumbnail, title, description, price, id } = product ?? {};
    return (
        <React.Fragment>
            <Card className='h-100'>
                <div className="product-image">
                    <Card.Img variant="top" src={thumbnail}/>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <h5 className='fs-3'><small>Price: </small> ${price}</h5>
                    <div className="d-flex">
                        <Link className='btn btn-primary' to={`/products/${id}`}>View Product</Link>
                        <button className='btn btn-success ms-2' onClick={() => tiggerAddToCart(product)}>Add to Cart</button>
                    </div>
                </Card.Body>
            </Card> 
        </React.Fragment>
    )
}
export default Product;