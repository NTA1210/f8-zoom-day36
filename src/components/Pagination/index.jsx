import classNames from "classnames/bind";

//scss
import styles from "./Pagination.module.scss";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cx = classNames.bind(styles);

function Pagination({ currentPage = 1, totalPages, onPageChange, className }) {
  console.log(currentPage);

  return (
    <div className={cx("wrapper", className)}>
      <button
        onClick={() => currentPage > 1 && onPageChange(1)}
        className={cx("btn", "first", { disabled: currentPage === 1 })}
      >
        First
      </button>
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className={cx("btn", {
          disabled: currentPage === 1,
        })}
      >
        <IoIosArrowBack />
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <div
            key={page}
            onClick={() => onPageChange(page)}
            className={cx("btn", {
              active: page === currentPage,
              disabled: page === currentPage,
            })}
          >
            {page}
          </div>
        );
      })}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className={cx("btn", {
          disabled: currentPage === totalPages,
        })}
      >
        <IoIosArrowForward />
      </button>

      <button
        onClick={() => currentPage < totalPages && onPageChange(totalPages)}
        className={cx("btn", "last", { disabled: currentPage === totalPages })}
      >
        Last
      </button>
    </div>
  );
}

export default Pagination;
