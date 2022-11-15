import { Fragment } from "react";
import NavLinks from "./NavLinks";
import TopHeader from "./TopHeader";

const MainHeader = () => {
  return (
    <Fragment>
      <TopHeader></TopHeader>
      <NavLinks></NavLinks>
    </Fragment>
  );
};

export default MainHeader;
