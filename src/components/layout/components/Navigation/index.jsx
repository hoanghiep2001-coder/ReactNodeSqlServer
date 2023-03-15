import classnames from "classnames/bind";
import styles from "./Navigation.module.scss";
import logo from "../../../../assets/img/digiBlackLogo.svg";
import shoppingCart from "../../../../assets/img/icon/shopping-cart.svg";
import searchIcon from "../../../../assets/img/icon/search.svg";
import Button from "../../../Button";
import Input from "../../../Input";
import { FaUserAlt } from "react-icons/fa";
const cb = classnames.bind(styles);
function Navigation() {
  return (
    <div className={cb("wrapper")}>
      <div className={cb("inner")}>
        <header
          className={cb(
            "header",
            "d-lg-flex",
            "align-items-center",
            "justify-content-between"
          )}
        >
          <Button href="#">
            <img src={logo} alt="Logo-Digiticket" />
          </Button>
          <div className={cb("search")}>
            <div className={cb("search__input")}>
              <input
                type="text"
                name="SearchKeyWord"
                placeholder={"Tìm kiếm trên Digiticket"}
                id="header-search"
                className={cb("search__input-el")}
              />
              <img
                src={searchIcon}
                alt="searchIcon"
                className={cb("search__input-icon")}
              />
            </div>

            <nav className="nav">
              <Button className="nav-link " aria-current="page" href="#">
                Active
              </Button>
              <Button className="nav-link" href="#">
                Link
              </Button>
              <Button className="nav-link" href="#">
                Link
              </Button>
              <Button className="nav-link" href={"#"}>
                Disabled
              </Button>
            </nav>
          </div>
          <div className={cb("actions")}>
            <div className={cb("account")}>
              <FaUserAlt className={cb("account-icon")} />
              <div className={cb("account-type")}>
                <span>Tài khoản</span>
                <span>Đăng nhập</span>
              </div>
            </div>
            <div className={cb("cart")}>
              <img src={shoppingCart} alt="" />
              <span>Giỏ hàng</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navigation;
