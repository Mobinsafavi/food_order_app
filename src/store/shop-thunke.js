import { shopsSliceAction } from "./shop-slice";

export const getShopsData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch('https://food-order-ae7d4-default-rtdb.firebaseio.com/shops.json');

      if (!response.ok) {
        throw new Error ('geting data failed') 
      }

      const data = await response.json();
      return data;
    };

    try{
        const shopsData = await getRequest()
        dispatch(shopsSliceAction.setShopInfo({
            shopsData : shopsData
        }))
    }catch (error) {}
  };
};
