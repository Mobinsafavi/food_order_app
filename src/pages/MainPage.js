import { Fragment } from "react";
import CategurySection from "../components/mainPageComponents/CategurySection";
import AllShopSection from "../components/mainPageComponents/AllShopsSection"

const MainPage = () => {
  return (
    <Fragment>
      <CategurySection></CategurySection>
      <AllShopSection></AllShopSection>
    </Fragment>
  );
};

export default MainPage;
