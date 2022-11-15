import { Fragment } from "react";
import { useSelector } from "react-redux";
import ShopSlide from "../slider/ShopSlide";
import FilterBox from "./FilterBox";
const CateguryShopList = (props) => {
  const ShopsData = useSelector((state) => state.shop.shops);
  let sameShopCategury = ShopsData.filter((item) => item.type === props.params);
  if (sameShopCategury.length === 0) {
    sameShopCategury = ShopsData;
  }
  return (
    <Fragment>
      <FilterBox></FilterBox>
      {sameShopCategury.map((item) => (
        <ShopSlide
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          rate={item.rate}
          back_img={item.back_img}
          profile_img={item.profile_img}
        ></ShopSlide>
      ))}
    </Fragment>
  );
};

export default CateguryShopList;
