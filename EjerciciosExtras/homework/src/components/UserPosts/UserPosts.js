import React from "react";
import { connect } from "react-redux";
import { getAllUsersPost } from "../../actions/index";
import CommentsPost from "../CommentsPost/CommentsPost";
import "./UserPosts.css";

export class UserPosts extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getAllUsersPost(userId);
  }

  render() {
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.posts.userId}</h4>
        {this.props.posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <CommentsPost id={post.id} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.userPosts,
  };
};

export default connect(mapStateToProps, {
  getAllUsersPost,
})(UserPosts);
