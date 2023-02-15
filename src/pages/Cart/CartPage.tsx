import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions, cartItemsSelector } from '../../stores/cart';

const CartPage: React.FC<any> = () => {
  const items = useSelector(cartItemsSelector);
  const dispatch = useDispatch();
  const isCartItemsAvailable = items.length > 0;

  const totalAmount = items.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.price;
  }, 0);

  // Events
  const removeFromCart = (id: string) => {
    dispatch(cartActions.remove(id))
  }
  const removeAllItem = () => {
    dispatch(cartActions.clear())
  }
  return (
    <React.Fragment>
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <h1 className="text-white py-5 text-center text-uppercase fs-1 lh-sm">
            Your Cart
          </h1>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {!isCartItemsAvailable && (
                <tr>
                  <td colSpan={5} className="text-center p-5">
                    Cart is empty.
                  </td>
                </tr>
              )}
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.quantity * item.price}</td>
                    <td>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-danger"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              {isCartItemsAvailable && (
                <tr>
                  <td colSpan={2} align="right">
                    <b>Total Amount:</b>
                  </td>
                  <td>
                    <b>${totalAmount}</b>
                  </td>
                  <td colSpan={2}>
                    <button
                      className="btn btn-success"
                      onClick={() => removeAllItem()}
                    >
                      Checkout
                    </button>
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartPage;
