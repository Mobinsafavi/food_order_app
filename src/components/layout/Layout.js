import { Fragment } from "react";
import MainHeader from "../header/MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader></MainHeader>
        <div className="container">
            {props.children}
        </div>
    </Fragment>
  );
};

export default Layout;
