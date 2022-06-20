import React from "react";
import { connect } from "react-redux";
import { getAllCommentsPost } from "../../actions/index";

import "./CommentsPost.css";

export class CommentsPost extends React.Component {
  componentDidMount() {
    this.props.getAllCommentsPost(this.props.id);
  }

  render() {
    return (
      <div className="details">
        <h4>Comentarios del Post {this.props.postId}</h4>
        {!this.props.commentsPost ? (
          <p>No hay comentarios</p>
        ) : (
          this.props.commentsPost.map((comment) => {
            if (this.props.id === comment.postId) {
              return (
                <div key={comment.id} className="container">
                  <h4>
                    {comment.id} - {comment.name}
                  </h4>
                  <p>{comment.body}</p>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    commentsPost: state.commentsPost,
  };
}

export default connect(mapStateToProps, { getAllCommentsPost })(CommentsPost);
