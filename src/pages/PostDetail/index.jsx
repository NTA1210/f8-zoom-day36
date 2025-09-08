import classNames from "classnames/bind";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

//scss
import styles from "./PostDetail.module.scss";

//Comp
import { Loading } from "../../components";

const cx = classNames.bind(styles);

function PostDetail() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loadingPost, setLoadingPost] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      setLoadingPost(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();

      if (Object.keys(data).length === 0) {
        navigate("/posts", { replace: true });
        return;
      }

      setPost(data);
      setLoadingPost(false);
    };

    const fetchComments = async () => {
      setLoadingComments(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const data = await response.json();
      setComments(data);
      setLoadingComments(false);
    };

    fetchPost();
    fetchComments();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        {/* Post  */}
        <div className={cx("postDetail")}>
          {loadingPost ? (
            <Loading />
          ) : (
            <div className={cx("post")}>
              <h1 className={cx("title")}>{post.title}</h1>
              <p className={cx("body")}>{post.body}</p>
              <p className={cx("userId")}>By: {post.id}</p>
              <div className={cx("line")}></div>
            </div>
          )}
        </div>

        {/* Comments */}
        <div className={cx("comments")}>
          {loadingComments ? (
            <Loading />
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className={cx("comment")}>
                <div className={cx("user")}>
                  <p className={cx("name")}>{comment.name}</p>
                  <div className="line">-</div>
                  <p className={cx("email")}>{comment.email}</p>
                </div>
                <p className={cx("body")}>{comment.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
