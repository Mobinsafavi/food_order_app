import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartProductItem from "./CartProductItem";
const CartShopItem = (props) => {
  const orders = useSelector((state) => state.cart.orders);
  const existingShop = orders.find((item) => item.id === props.shopId);
  return (
    <Fragment>
      <div className="fw-bold font-3 py-2 ">{props.shopName}</div>
      {existingShop.products.map((item) => (
        <CartProductItem
          key={item.id}
          shopId={existingShop.id}
          shopName={existingShop.shopName}
          sendingPrice={existingShop.sendingPrice}
          Id={item.id}
          Name={item.name}
          Price={item.price}
          totalPrice={item.totalPrice}
        ></CartProductItem>
      ))}
    </Fragment>
  );
};

export default CartShopItem;
