import MealsItem from "./MealsItem";
import { useSelector } from "react-redux";

const MealsList = (props) => {
  const shopData = useSelector(state => state.shop.shops) 

  const shopInfo = shopData.find(item => item.id === props.shopId)

  return (
    <div className="shadow col-12 p-2 rounded bg-white">
      {shopInfo.product.map((item) => {
        return (
          <MealsItem
            key={item.id}
            Id={item.id}
            shopId={shopInfo.id}
            shopName={shopInfo.name}
            sendingPrice={shopInfo.sending_price}
            Name={item.name}
            Description={item.recipe}
            Price={item.price}
            Src={item.img}
          />
        );
      })}
    </div>
  );
};

export default MealsList;
