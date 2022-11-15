import { Fragment } from "react";
import { useSelector } from "react-redux";
import CartShopItem from "../components/Cart/CartShopItem";
const CartPage = () => {
  const orders = useSelector((state) => state.cart.orders);
  return (
    <Fragment>
      {orders.map((item) => (
        <div key={item.id}>
          <CartShopItem
            shopId={item.id}
            shopName={item.shopName}
          ></CartShopItem>
          <div className="d-flex justify-content-between pt-3 pb-1">
            <div className="col-6 font-2">هزینه ارسال از فروشگاه :</div>
            <div className="col-4 d-flex  align-items-center justify-content-center">
              <div className="m-auto font-2">{item.sendingPrice}</div>
              <div className="font-1">تومان</div>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="col-6  font-2 fw-bold">قابل پرداخت :</div>
            <div className="col-4 d-flex  align-items-center justify-content-center">
              <div className="m-auto font-3 fw-bold ">{item.shopTotalPrice}</div>
              <div className="font-1">تومان</div>
            </div>
          </div>
          <hr className="bg-dark"></hr>
        </div>
      ))}
    </Fragment>
  );
};

export default CartPage;
