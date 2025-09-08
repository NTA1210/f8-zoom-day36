import classNames from "classnames/bind";
import styles from "./Navigation.module.scss";

import { Link } from "react-router";

const cx = classNames.bind(styles);

function Navigation() {
  return (
    <nav className={cx("wrapper")}>
      <ul className={cx("list")}>
        <li className={cx("item")}>
          <Link to="/">Home</Link>
        </li>
        <li className={cx("item")}>
          <Link to="/about">About</Link>
        </li>
        <li className={cx("item")}>
          <Link to="/posts">Posts</Link>
        </li>
        <li className={cx("item")}>
          <Link to="/admin">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
