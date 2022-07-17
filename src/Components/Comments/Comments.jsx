//React
import React, { Component } from "react";
import Comment from "../Comment/Comment";
import CommentsInput from "../CommentsInput/CommentsInput";
//React
//Images
//Images
//CSS
import styles from "./Comments.module.css";
//CSS
//Modules
//Modules
class Comments extends Component {
  state = {};
  render() {
    return (
      <div className={styles.commentsContainer}>
        <div className={styles.wrraper}></div>
        <CommentsInput />
        <div className={styles.comments} style={{ background: "none" }}></div>
        <Comment commentsArray={this.props.commentsArray} />
        <div className={styles.comments}></div>
      </div>
    );
  }
}

export default Comments;
