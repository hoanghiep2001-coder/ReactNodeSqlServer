import classnames from "classnames/bind";
import styles from "./Layout.module.scss";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import {Helmet} from "react-helmet";
import logo from "../../../src/assets/img/icon/logo.svg";
const cb = classnames.bind(styles);
function Layout() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={logo}></link>
      </Helmet>
      <div className={cb("wrapper")}>
        <div className={cb("inner")}>
          <Navigation />
          <Home />
          <Blog />
        </div>
      </div>
    </>
  );
}

export default Layout;
