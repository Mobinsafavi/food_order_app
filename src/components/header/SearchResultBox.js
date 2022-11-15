import SearchResultItem from './SearchResultItem'
import style from './SearchResultBox.module.css'
const SearchResultBox = (props) => {
    return <div className={style.ResultBox}>{props.resultShops.map(item => <SearchResultItem key={item.key} name={item.name}></SearchResultItem>)}</div>
}

export default SearchResultBox;