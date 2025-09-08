import classNames from "classnames/bind";

//scss
import styles from "./Contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Contact page</h1>
      <div className={cx("body")}>
        <div className={cx("content")}>
          <div className={cx("description")}>
            Bạn có thể liên hệ với khóa học F8 qua các kênh sau:{" "}
            <span className={cx("bold-text")}>
              Điện thoại: 08 1919 8989, Email: contact@fullstack.edu.vn
            </span>
            . Bạn có thể liên hệ với khóa học F8 qua các kênh sau: , hoặc tìm
            hiểu thêm trên trang web chính thức tại{" "}
            <a href="https://fullstack.edu.vn" className={cx("link")}>
              fullstack.edu.vn
            </a>
            . Ngoài ra, bạn cũng có thể tìm thấy thông tin liên hệ trên trang{" "}
            <a
              href="https://www.facebook.com/fullstack.edu.vn"
              className={cx("link")}
            >
              Facebook chính thức của F8
            </a>
          </div>
          <div className={cx("specification")}>
            <h1 className={cx("title")}>Thông tin liên hệ:</h1>
            <div className="list">
              <div className={cx("row")}>
                <label className={cx("label")}>Website:</label>
                <span className={cx("value")}>
                  <a href="https://fullstack.edu.vn" className={cx("link")}>
                    fullstack.edu.vn
                  </a>
                </span>
              </div>
              <div className={cx("row")}>
                <label className={cx("label")}>Điện thoại:</label>
                <span className={cx("value")}>08 1919 8989</span>
              </div>
              <div className={cx("row")}>
                <label className={cx("label")}>Email:</label>
                <span className={cx("value")}>contact@fullstack.edu.vn</span>
              </div>
              <div className={cx("row")}>
                <label className={cx("label")}>Địa chỉ:</label>
                <span className={cx("value")}>
                  Số 1, ngõ 41, Trần Duy Hưng, phường Trung Hòa, quận Cầu Giấy,
                  TP. Hà Nội{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* side bar */}
        <aside className={cx("sidebar")}>
          <h1 className={cx("title")}>Thông tin các khóa học</h1>
          <ul className={cx("list")}>
            <li className={cx("item")}>Khóa học F8</li>
            <li className={cx("item")}>Khóa học F8</li>
            <li className={cx("item")}>Khóa học F8</li>
            <li className={cx("item")}>Khóa học F8</li>
            <li className={cx("item")}>Khóa học F8</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
