import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classnames from "classnames/bind";
import styles from "./login.module.scss";
import logo from "../../../../assets/img/digiBlackLogo.svg";
// import SelfButton as Button from "../../../Button";
import { Button } from "react-bootstrap";
const cb = classnames.bind(styles);
function Login() {
  return (
    <>
      <div className={cb("wrapper")}>
        <div className={cb("inner")}>
          <form className={cb("form")}>
            <div className={cb("logo")}>
              <a className={cb("logo-link")} href="/">
                <img
                  className={cb("logo-img")}
                  src={logo}
                  alt="logo-digiticket"
                />
              </a>
            </div>
            <div className={cb("controls")}>
              <InputGroup className={cb("mb-3")}>
                <Form.Control
                  className={cb("controls-input")}
                  placeholder="Email hoặc số điện thoại"
                  aria-label="Email hoặc số điện thoại"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className={cb("mb-3")}>
                <Form.Control
                  className={cb("controls-input")}
                  placeholder="Mật khẩu"
                  aria-label="Mật khẩu"
                  aria-describedby="basic-addon1"
                  type="password"
                />
              </InputGroup>
              <InputGroup className={cb("mb-3")}>
                <Form.Control
                  className={cb("controls-input")}
                  placeholder="Nhập lại mật khẩu"
                  aria-label="Nhập lại mật khẩu"
                  aria-describedby="basic-addon1"
                  type="password"
                />
              </InputGroup>
              <Button variant="warning" className={cb("submit")}>
                Đăng Nhập
              </Button>
              <div className={cb("d-flex", "link-wrapper")}>
                <a
                  href="/"
                  className={cb("btn", "btn-warning", "another-link")}
                >
                  Trang Chủ
                </a>
                <a
                  href="/register"
                  className={cb("btn", "btn-warning", "another-link")}
                >
                  Đăng Ký
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
