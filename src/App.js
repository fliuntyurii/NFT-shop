import Header from "./components/Header/Header";
import style from "./App.module.css"
import HomepageContainer from "./components/Homepage/HomepageContainer";
import ProductListContainer from "./components/ProductList/ProductListContainer";

function App(props) {
  return (
    <div className={style.appComponent}>
      <Header />
      <HomepageContainer />
      <ProductListContainer />
    </div>
  );
}

export default App;