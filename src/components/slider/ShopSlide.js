import { Link } from "react-router-dom";
import style from "./ShopSlide.module.css";

const ShopSlide = (props) => {
  return (
    <div className={`d-flex flex-column  rounded col-10 mx-auto my-4 ${style.card}`}>
      <div>
        <img
          src={require(`../../assets/${props.back_img}.jpg`).default}
          className="col-12 rounded-top "
          alt="background-img"
        />
      </div>
      <div className={`${style.profile} col-3 profile_img`}>
        <img
          src={require(`../../assets/${props.profile_img}.jpg`).default}
          className="col-12 rounded-top "
          alt="background-img"
        />
      </div>
      <div className="d-flex flex-column mt-3">
        <div className="font-3 fw-bold mx-auto mt-4 mb-2">{props.name}</div>
        <div className="d-flex align-items-center mx-auto">
          <div className="text-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </div>
          <div className="font-2 mt-1 mx-2 fw-bold">{props.rate}</div>
        </div>
        <div className="font-1 mx-auto text-muted my-2">
          {props.description}
        </div>
        <button
          className={`${style.orderbtn} col-5 p-1 d-flex justify-content-center mb-4 mt-3 mx-auto font-2 fw-bold text-muted`}
        >
          <Link to={`/shop/${props.id}`}>سفارش دهید !</Link>
        </button>
      </div>
    </div>
  );
};

export default ShopSlide;
