//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "./Comment.module.css";
//CSS
//Modules
//Modules

class Comment extends Component {
  state = {};
  render() {
    return this.props.commentsArray.length === 0 ? (
      <div>هنوز نظری ثبت نشده ، اولین نفری باشید که نظر ثبت می کنید</div>
    ) : (
      <div className={styles.comnments}>
        {this.props.commentsArray.map((item) => {
          return (
            <div className={styles.pearsonCommentContainer} key={item.id}>
              <p> نام نظر دهنده : {item.name}</p>
              <p> متن نظر : {item.comment}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comment;
