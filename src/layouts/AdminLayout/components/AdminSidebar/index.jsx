import classNames from "classnames/bind";
import { Link } from "react-router";

//scss
import styles from "./AdminSidebar.module.scss";

const cx = classNames.bind(styles);

function AdminSidebar() {
  return (
    <aside className={cx("wrapper")}>
      <h1 className={cx("title")}>AdminSidebar</h1>
      <div className={cx("body")}>
        <Link to="/admin" className={cx("link")}>
          Dashboard
        </Link>
        <Link to="/admin/users" className={cx("link")}>
          Users
        </Link>
        <Link to="/admin/setting" className={cx("link")}>
          Setting
        </Link>
      </div>
    </aside>
  );
}

export default AdminSidebar;
