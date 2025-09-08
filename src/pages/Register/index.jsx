import classNames from "classnames/bind";

//scss
import styles from "./Register.module.scss";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Register</h1>
    </div>
  );
}

export default Register;
