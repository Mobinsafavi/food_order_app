import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartSliceAction } from "../../store/cart-slice";

const MealsCounter = (props) => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);

  const addToCartHandler = () => {
    dispatch(
      cartSliceAction.addToCart({
        id: props.shopId,
        shopName: props.shopName,
        sendingPrice: props.sendingPrice,
        product: { id: props.Id, name: props.Name, price: props.Price },
      })
    );
  };


  const removeHandler = () => {
    dispatch(
      cartSliceAction.removeOrder({
        shopId: props.shopId,
        productId: props.Id ,
      })
    )
  }

  let productAmount;
  const existingShop = orders.find((item) => item.id === props.shopId);
  if (!existingShop) {
    productAmount = 0;
  } else {
    const existingProduct = existingShop.products.find(
      (item) => item.id === props.Id
    );
    if (!existingProduct) {
      productAmount = 0;
    } else {
      productAmount = existingProduct.amount;
    }
  }

  return (
    <Fragment>
      {productAmount === 0 ? (
        <button
          onClick={addToCartHandler}
          className={`col-12 btn btn-outline-primary btn-sm mt-2`}
        >
          افزودن
        </button>
      ) : (
        <div className={`col-12 d-flex justify-content-evenly mt-2`}>
          <button
            className="col-3 btn btn-primary btn-sm p-0"
            onClick={addToCartHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
          <div className="col-3 border border-secondary rounded d-flex justify-content-center align-items-center">
            {productAmount}
          </div>
          <button className="col-3 btn btn-primary btn-sm p-0" onClick={removeHandler}>
            {productAmount === 1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default MealsCounter;
