import classnames from "classnames/bind";
import Banner from "./components/Banner";
import ProductContainer from "./components/ProductContainer";
import Slider from "./components/Slider";
import styles from "./Home.module.scss";

const cb = classnames.bind(styles);
function Home() {
  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <Slider />
        <ProductContainer />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
