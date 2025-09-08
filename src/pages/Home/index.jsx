import classNames from "classnames/bind";

//scss
import styles from "./Home.module.scss";

//Comp

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Home</h1>
    </div>
  );
}

export default Home;
