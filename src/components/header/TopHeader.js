import logo from "../../assets/logo.svg";
import SearchBox from "./SearchBox";


const TopHeader = () => {
  return (
    <div className="d-flex justify-content-between pt-2 px-1">
      <div className="col-3 d-flex">
        <img src={logo} alt='logo' className="img-fluid align-items-center p-2"></img>
      </div>
      <SearchBox></SearchBox>
    </div>
  );
};

export default TopHeader;
