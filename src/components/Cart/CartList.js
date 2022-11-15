import { useSelector } from "react-redux";
import styles from "./CartList.module.css";
import CartShopItem from "./CartShopItem";
import EmptyCartSvg from "../modal/EmptyCartSvg";

const CartList = () => {
  const orders = useSelector((state) => state.cart.orders);
  return (
    <div className={styles.cartBody}>
      {orders.length === 0 ? (
        <div>
          <EmptyCartSvg></EmptyCartSvg>
          <div className="font-4 fw-bold text-center">
            سبد خرید شما خالی است
          </div>
        </div>
      ) : (
        orders.map((item) => (
          <div key={item.id}>
            <CartShopItem
              shopId={item.id}
              shopName={item.shopName}
            ></CartShopItem>
            <hr></hr>
          </div>
        ))
      )}
    </div>
  );
};

export default CartList;
