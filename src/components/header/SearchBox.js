import style from "./TopHeader.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchResultBox from "./SearchResultBox";

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState("");
  const [resultBoxShow , setResultBoxShow] = useState(false)
  const [resultShops , setResultShops] = useState("")

  const shopData = useSelector((state) => state.shop.shops);

  const searchInputHandler = (event) => {
    setResultBoxShow(true)
    setSearchInput(event.target.value);

    const resultShops = shopData.filter(item => item.name.includes(searchInput))
    console.log(resultShops);
    setResultShops(resultShops)
  };

  return (
    <div className="col-8">
      <input
        onChange={searchInputHandler}
        value={searchInput}
        className={`col-11 py-1 px-2 font-2 ${style.searchbar}`}
        placeholder="جست و جو"
      ></input>
      {resultBoxShow && searchInput.length > 1 && <SearchResultBox resultShops={resultShops} ></SearchResultBox>}
    </div>
  );
};

export default SearchBox;
