import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";

//scss
import styles from "./Posts.module.scss";

// Comp
import { Pagination, Loading } from "../../components";

const cx = classNames.bind(styles);

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, [searchParams]);

  const handleOnPageChange = (page) => {
    if (page > 1) {
      setSearchParams({ page });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Posts</h1>
      <div className={cx("body")}>
        {loading ? (
          <Loading />
        ) : (
          posts.map((post) => (
            <Link to={`/posts/${post.id}`} className={cx("post")} key={post.id}>
              <h2 className={cx("post-title")}>{post.title}</h2>
              {/* <p className={cx("post-body")}>{post.body}</p> */}
            </Link>
          ))
        )}
      </div>
      <Pagination
        currentPage={page}
        totalPages={10}
        onPageChange={handleOnPageChange}
      />
    </div>
  );
}

export default Posts;
