import classNames from "classnames/bind";

//scss
import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function Setting() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Setting</h1>
    </div>
  );
}

export default Setting;
