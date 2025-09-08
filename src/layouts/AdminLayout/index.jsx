import classNames from "classnames/bind";
import { Outlet } from "react-router";

//scss
import styles from "./AdminLayout.module.scss";
import AdminSidebar from "./components/AdminSidebar";

//Comp
import Header from "./components/Header";

const cx = classNames.bind(styles);

function AdminLayout() {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Outlet />
        <AdminSidebar />
      </div>
    </div>
  );
}

export default AdminLayout;
