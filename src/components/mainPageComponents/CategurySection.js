import { Link } from "react-router-dom";
import CategurySlider from "../slider/CategurySlider";
import style from "./MainPage.module.css";

const CategurySection = () => {
  return (
    <div className="d-flex flex-column justify-content-center mt-4">
      <div className="col-12 d-flex justify-content-between  m-auto">
        <div className="font-4 fw-bolder">دسته بندی</div>
        <button className={`${style.more} font-1`}>
          <Link to="/categury/allShops">
            <div>مشاهده</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
            </div>
          </Link>
        </button>
      </div>
      <div className="col-10 mx-auto my-4">
        <CategurySlider></CategurySlider>
      </div>
    </div>
  );
};

export default CategurySection;
