import classNames from "classnames/bind";
import { Link } from "react-router";

// scss
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("links")}>
        <Link to="/contact" className={cx("link")}>
          Liên hệ
        </Link>
        <Link to="/privacy" className={cx("link")}>
          Chính sách bảo mật
        </Link>
      </div>
      <h1 className={cx("title")}>Chúc mọi người một ngày vui vẻ</h1>
    </div>
  );
}

export default Footer;
