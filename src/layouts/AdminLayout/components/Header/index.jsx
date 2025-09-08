import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Trang quản lý của Admin</h1>
    </div>
  );
}

export default Header;
