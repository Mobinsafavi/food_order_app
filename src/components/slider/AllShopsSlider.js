import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useSelector } from "react-redux";

import "swiper/modules/navigation/navigation.min.css";

import ShopSlide from "./ShopSlide";

const AllShopSlider = () => {
  const shopData = useSelector((state) => state.shop.shops);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      slidesPerGroup={1}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {shopData.map((item) => (
        <SwiperSlide key={item.id}>
          <ShopSlide
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            rate={item.rate}
            back_img={item.back_img}
            profile_img={item.profile_img}
          ></ShopSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AllShopSlider;
