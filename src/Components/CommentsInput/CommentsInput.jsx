//React
import React, { Component } from "react";
import Swal from "sweetalert2";
//React
//Images
//Images
//CSS
import styles from "./CommentsInput.module.css";
//CSS
//Modules
//Modules
class CommentsInput extends Component {
  constructor() {
    super();
    this.nameInputRef = React.createRef();
    this.commentInputRef = React.createRef();
    this.commentEmailRef = React.createRef();
    this.reportRef = React.createRef();
  }
  state = {
    isValidEmail: false,
    isValidName: false,
    isValidComment: false,
  };
  ValidateEmail(emailText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailText.match(mailformat)) {
      return this.setState({ isValidEmail: true });
    } else {
      this.commentEmailRef.current.focus();
      return this.setState({ isValidEmail: false });
    }
  }
  validateName(nameText) {
    if (nameText.length > 3) {
      return this.setState({ isValidName: true });
    } else {
      this.nameInputRef.current.focus();
      return this.setState({ isValidName: false });
    }
  }
  validateComment(commentText) {
    if (commentText.length > 5) {
      return this.setState({ isValidComment: true });
    } else {
      this.commentInputRef.current.focus();
      return this.setState({ isValidComment: false });
    }
  }
  render() {
    return (
      <div className={styles.commentsInputContainer}>
        <label htmlFor="nameHolder" className={styles.commentHelp}>
          نام{" "}
        </label>
        <input
          ref={this.nameInputRef}
          type="text"
          id="nameHolder"
          placeholder="نام خود را وارد کنید"
          onChange={(e) => {
            this.validateName(e.target.value);
          }}
        />
        <label htmlFor="commentHolder" className={styles.commentHelp}>
          نظر شما
        </label>
        <input
          type="text"
          ref={this.commentInputRef}
          id="commentHolder"
          onChange={(e) => {
            this.validateComment(e.target.value);
          }}
          placeholder="نظر خود را وارد کنید"
        />
        <label htmlFor="" className={styles.commentHelp}>
          ایمیل شما
        </label>
        <input
          type="text"
          ref={this.commentEmailRef}
          id="commentHolder"
          pattern=""
          onChange={(e) => {
            this.ValidateEmail(e.target.value);
          }}
          placeholder="ایمیل خود را وارد کنید"
        />
        <button
          className={styles.report}
          ref={this.reportRef}
          onClick={() => {
            if (
              this.nameInputRef.current.value.length === 0 &&
              this.commentEmailRef.current.value.length === 0 &&
              this.commentInputRef.current.value.length === 0
            ) {
              Swal.fire({
                icon: "error",
                timer: 2000,
                timerProgressBar: true,
                title: "شما هنوز هیچی وارد نکردید",
                showClass: {
                  popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                  popup: "animate__animated animate__fadeOutUp",
                },
              });
            } else {
              if (
                this.state.isValidEmail &&
                this.state.isValidComment &&
                this.state.isValidName
              ) {
                this.nameInputRef.current.value = "";
                this.commentInputRef.current.value = "";
                this.commentEmailRef.current.value = "";
                Swal.fire({
                  icon: "success",
                  timer: 2000,
                  timerProgressBar: true,
                  title: "نظر شما برای بخش مدیریت ارسال شد",
                  text: " ! پس از تایید نمایش داده می شود ",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
              } else {
                if (!this.state.isValidEmail) {
                  Swal.fire({
                    icon: "error",
                    title: "آدرس ایمیل را اشتباه وارد کردید",
                    text: "لطفا یک آدرس ایمیل معتبر وارد کنید",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                } else if (!this.state.isValidComment) {
                  Swal.fire({
                    icon: "error",
                    title: "لطفا نظر خود را کامل وارد کنید",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                } else if (!this.state.isValidName) {
                  Swal.fire({
                    icon: "error",
                    title: "لطفا نام خود را وارد کنید",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                }
              }
            }
          }}
        >
          ارسال نظر
        </button>
      </div>
    );
  }
}

export default CommentsInput;
