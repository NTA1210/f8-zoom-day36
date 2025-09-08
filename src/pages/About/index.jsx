import classNames from "classnames/bind";

//scss
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>About</h1>
    </div>
  );
}

export default About;
