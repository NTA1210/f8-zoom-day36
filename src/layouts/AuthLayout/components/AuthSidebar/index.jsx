import classNames from "classnames/bind";

//scss
import styles from "./AuthSidebar.module.scss";
import { Link } from "react-router";

const cx = classNames.bind(styles);

function AuthSidebar() {
  return (
    <aside className={cx("wrapper")}>
      <h1 className={cx("title")}>AuthSidebar</h1>
      <div className={cx("body")}>
        <Link to="/login" className={cx("link")}>
          Login
        </Link>
        <Link to="/register" className={cx("link")}>
          Register
        </Link>
        <Link to="/forgot" className={cx("link")}>
          Forgot password
        </Link>
      </div>
    </aside>
  );
}

export default AuthSidebar;
