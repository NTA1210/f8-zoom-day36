import classNames from "classnames/bind";

//scss
import styles from "./Users.module.scss";

const cx = classNames.bind(styles);

function Users() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Users</h1>
    </div>
  );
}

export default Users;
