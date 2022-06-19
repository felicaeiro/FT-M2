import React from "react";
import { connect } from "react-redux";
import { getAllUsersPost, getAllCommentsPost } from "../../actions/index";
import { CommentsPost } from "../CommentsPost/CommentsPost";
import "./UserPosts.css";

export class UserPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  componentDidMount() {
    const userId = this.props.match.params.id;
    this.props.getAllUsersPost(userId);
  }

  render() {
    // this.props.getAllCommentsPost(1);
    // console.log(this.props.commentsPost);
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {this.props.posts.userId}</h4>
        {this.props.posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {/* { if(post.id===this.props.commentsPost.id) */}
            {/* <CommentsPost
              postId={post.id}
              // commentsPost={this.state.commentsPost}
            /> */}
            {/* } */}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.userPosts,
    commentsPost: state.commentsPost,
  };
};

export default connect(mapStateToProps, {
  getAllUsersPost,
  getAllCommentsPost,
})(UserPosts);
