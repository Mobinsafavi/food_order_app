import { Link } from "react-router-dom";

import Bakery_cat from "../../assets/Bakery_cat.png";
import Coffee_shop_cat from "../../assets/Coffee_shop_cat.png";
import Fruit_cat from "../../assets/Fruit_cat.png";
import nuts_cat from "../../assets/nuts_cat.png";
import Protein_cat from "../../assets/Protein_cat.png";
import Restaurant_cat from "../../assets/Restaurant_cat.png";
import Super_market_cat from "../../assets/Super_market_cat.png";
import Sweetmeat_cat from "../../assets/Sweetmeat_cat.png";

const CategurySlider = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-between my-2">
        <Link className="col-2 text-decoration-none text-body" to="/categury/bakery">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Bakery_cat} alt='bakery_icon'></img>
            </div>
            <div className="text-center font-1 py-1">نانوایی</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body"  to="/categury/coffeeshop">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Coffee_shop_cat} alt='coffeeshop_icon'></img>
            </div>
            <div className="text-center font-1 py-1">کافی شاپ</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body" to="/categury/fruit">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Fruit_cat} alt='fruit_icon'></img>
            </div>
            <div className="text-center font-1 py-1">میوه</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body" to="/categury/nut">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={nuts_cat} alt='nut_icon'></img>
            </div>
            <div className="text-center font-1 py-1">خشکبار</div>
          </div>
        </Link>
      </div>
      <div className="d-flex justify-content-between my-2">
        <Link className="col-2 text-decoration-none text-body" to="/categury/protein">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Protein_cat} alt='protein_icon'></img>
            </div>
            <div className="text-center font-1 py-1">پروتئین</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body" to="/categury/restaurant" >
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Restaurant_cat} alt='restaurant_icon'></img>
            </div>
            <div className="text-center font-1 py-1">رستوران</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body" to="/categury/supermarket">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Super_market_cat} alt='supermarket_icon'></img>
            </div>
            <div className="text-center font-1 py-1">سوپرمارکت</div>
          </div>
        </Link>
        <Link className="col-2 text-decoration-none text-body" to="/categury/sweetmeat">
          <div className="col-12">
            <div className="col-12">
              <img className="img-fluid" src={Sweetmeat_cat} alt='sweetmeat_icon'></img>
            </div>
            <div className="text-center font-1 py-1">شیرینی</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategurySlider;
