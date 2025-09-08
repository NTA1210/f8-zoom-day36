import classNames from "classnames/bind";
import { Outlet } from "react-router";

//scss
import styles from "./AuthLayout.module.scss";

//Comp
import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";

const cx = classNames.bind(styles);

function AuthLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Outlet />
        <AuthSidebar />
      </div>
    </div>
  );
}

export default AuthLayout;
