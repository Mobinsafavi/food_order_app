import { Fragment } from "react";
import MealsCounter from '../shopPageComponents/MealsCounter'

const CartProductItem = (props) => {
  const { Id, shopId, shopName, sendingPrice, Name,Price , totalPrice} = props;
  return <Fragment>
    <div className="d-flex justify-content-between col-12"> 
    <div className="col-5 d-flex align-items-center "><div className="text-end ">{Name}</div></div>
    <div  className="col-3 d-flex"><MealsCounter className="m-auto" Id={Id} shopId={shopId} shopName={shopName} sendingPrice={sendingPrice} Name={Name} Price={Price} /></div>
    <div className="col-4 d-flex align-items-center justify-content-center"><div className="m-auto ">{totalPrice}</div> <div className="font-1">تومان</div> </div>
    </div>
  </Fragment>
};

export default CartProductItem;
