import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import { getShopsData } from "./store/shop-thunke";
import CateguryPage from "./pages/CateguryPage";
import CartPage from "./pages/CartPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopsData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="home"></Redirect>
        </Route>
        <Route path="/home">
          <MainPage></MainPage>
        </Route>
        <Route path="/categury/:categuryName">
          <CateguryPage></CateguryPage>
        </Route>
        <Route path="/shop/:shopId">
          <ShopPage></ShopPage>
        </Route>
        <Route path="/cart">
          <CartPage></CartPage>
        </Route>
        <Route path="*" exact>
          <Redirect to="/home"></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
