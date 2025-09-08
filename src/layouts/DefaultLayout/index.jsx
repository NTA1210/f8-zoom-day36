import classNames from "classnames/bind";
import { Outlet } from "react-router";

//scss
import styles from "./DefaultLayout.module.scss";

//Comp
import Header from "../components/Header";
import Footer from "./components/Footer";
import Navigation from "../components/Navigation";

const cx = classNames.bind(styles);

function DefaultLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <Navigation />
      <div className={cx("container")}>{<Outlet />}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
