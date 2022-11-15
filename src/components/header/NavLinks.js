import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import LoginIcon from "./LoginIcon";
import style from "./NavLinks.module.css";
import { Fragment, useState } from "react";
import CartModal from "../modal/CartModal";

const NavLinks = () => {
  const [showModal, setShowModal] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const closeModalHandler = () => {
    setShowModal(false)
  }

  const showModalHandler = () => {
    setShowModal(true)
  }
  return (
    <Fragment>
      {showModal && <CartModal onClose={closeModalHandler} ></CartModal>}
      <nav className={`d-flex justify-content-between px-1 ${style.navlinks}`}>
        <ul className="d-flex p-0 m-0 align-items-center col-8">
          <li>
            <NavLink activeClassName={style.linkStyle} to="/home" className="font-1">
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.linkStyle} to="/categury/allShops" className="font-1">
              دسته بندی
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.linkStyle} to="/about" className="font-1">
              درباره پروژه
            </NavLink>
          </li>
        </ul>
        <div className="d-flex col-4">
          <div className=" col-8 d-flex justify-content-center ">
            <button
              className={`d-flex col-10 justify-content-center align-items-center ${style.loginicon}`}
            >
              <LoginIcon></LoginIcon>
              <div className="font-1 me-1">ورود</div>
            </button>
          </div>
          <div className="col-4  d-flex align-items-center">
            <button className={`${style.carticon}`} onClick={showModalHandler}>
              <CartIcon></CartIcon>
              <span className="font-1">{totalQuantity}</span>
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavLinks;
