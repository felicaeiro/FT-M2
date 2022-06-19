import React from "react";
import { connect } from "react-redux";
import { getAllCommentsPost } from "../../actions/index";

import "./CommentsPost.css";

export class CommentsPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    // const id = this.props.postId;
    // this.props.getAllCommentsPost(id);
    // console.log(this.props.commentsPost);
    // .then((c) => {
    //   console.log("Comentarios cargados con éxito...");
    // })
    // .catch((err) => console.error(err));
  }

  render() {
    return (
      <div className="details">
        <h4>Comentarios del Post {this.props.postId}</h4>
        {!this.props.commentsPost ? (
          <p>No hay comentarios</p>
        ) : (
          this.props.commentsPost.map((comment) => (
            <div key={comment.id} className="container">
              <h4>
                {comment.id} - {comment.name}
              </h4>
              <p>{comment.body}</p>
            </div>
          ))
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
