import classNames from "classnames/bind";

//scss
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Login</h1>
    </div>
  );
}

export default Login;
