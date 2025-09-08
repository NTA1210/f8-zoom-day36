import classNames from "classnames/bind";

//scss
import styles from "./DashBoard.module.scss";

const cx = classNames.bind(styles);

function DashBoard() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>DashBoard</h1>
    </div>
  );
}

export default DashBoard;
