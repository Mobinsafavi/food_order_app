import { Fragment } from "react";
import CateguryShopList from "../components/CateguryPageComponents/CateguryShopList";
import { useParams } from "react-router-dom";

const CateguryPage = () => {
    const params = useParams()
  return (
    <Fragment>
        <CateguryShopList params={params.categuryName}></CateguryShopList>
    </Fragment>
  );
};

export default CateguryPage;
