import MealsList from "../components/shopPageComponents/MealsList";
import { useParams } from "react-router-dom";

const ShopPage = () => {
    const params = useParams()
    return <MealsList shopId={params.shopId}></MealsList>
}

export default ShopPage;