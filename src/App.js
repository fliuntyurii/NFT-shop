import Header from "./components/Header/Header";
import style from "./App.module.css"
import HomepageContainer from "./components/Homepage/HomepageContainer";
import ProductListContainer from "./components/ProductList/ProductListContainer";
import Contacts from "./components/Contacts/Contacts";
import ProductPageContainer from "./components/ProductPage/ProductPageContainer";

function App(props) {
  return (
    <div className={style.appComponent}>
      <Header />
      <HomepageContainer />
      <ProductListContainer />
      <Contacts />
      <ProductPageContainer />
    </div>
  );
}

export default App;