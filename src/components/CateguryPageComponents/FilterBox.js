import { NavLink } from "react-router-dom";
import style from "./FilterBox.module.css";

const FilterBox = () => {
  return (
    <div className="d-flex justify-content-around">
      <div className="col-3 font-1 text-center my-auto fw-bold">
        {" "}
        فیلتر فروشگاه ها :
      </div>
      <div className={`${style.filterlinks} col-9 d-flex py-2`}>
        <ul className="d-flex p-0 m-0 align-items-center">
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/allShops"
              className="font-1"
            >
              <div className={style.linktitle}>همه فروشگاه ها</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/restaurant"
              className="font-1"
            >
              <div className={style.linktitle}>رستوران</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/coffeeshop"
              className="font-1"
            >
              <div className={style.linktitle}>کافی شاپ </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/fruit"
              className="font-1"
            >
              <div className={style.linktitle}>میوه و سبزیجات</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/nut"
              className="font-1"
            >
              <div className={style.linktitle}>آجیل و خشکبار</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/bakery"
              className="font-1"
            >
              <div className={style.linktitle}>نانوایی</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/protein"
              className="font-1"
            >
              <div className={style.linktitle}>پروتئین</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/supermarket"
              className="font-1"
            >
              <div className={style.linktitle}>سوپرمارکت</div>
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={style.linkStyle}
              to="/categury/sweetmeat"
              className="font-1"
            >
              <div className={style.linktitle}>شیرینی</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBox;
