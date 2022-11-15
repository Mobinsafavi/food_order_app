import MealsCounter from "./MealsCounter";
import { Fragment } from "react";

const MealsItem = (props) => {
  const { Id, shopId, shopName, sendingPrice, Name, Price } = props;
  return (
    <Fragment>
      <div className="col-12 d-flex my-3">
        <div className="col-8 d-flex flex-column">
          <h5 className="font-3 fw-bold">{props.Name}</h5>
          <p className="font-1 text-secondary">{props.Description}</p>
          <span className="font-3 mt-auto">{props.Price}</span>
        </div>
        <div className="col-4">
          <img
            src={require(`../../assets/${props.Src}.jpg`).default}
            className="img-fluid rounded"
            alt="food-img"
          />
          <MealsCounter Id={Id} shopId={shopId} shopName={shopName} sendingPrice={sendingPrice} Name={Name} Price={Price} />
        </div>
      </div>
      <hr></hr>
    </Fragment>
  );
};

export default MealsItem;
