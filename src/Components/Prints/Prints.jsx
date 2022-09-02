//React
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
//React
//Images
//Images
//CSS
import styles from "./Prints.module.css";
//CSS
//Modules
//Modules
class Prints extends Component {
  state = {};
  render() {
    return (
      <Fade>
        <div className={styles.printsContainer}>
          <Link to="/prints/printOne">
            <div className={styles.left}>چاپ اول</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printTwo">
            <div className={styles.left}>چاپ دوم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printThree">
            <div className={styles.left}>چاپ سوم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printFour">
            <div className={styles.left}>چاپ چهارم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printFive">
            <div className={styles.left}>چاپ پنجم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printSix">
            <div className={styles.left}>چاپ ششم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printSeven">
            <div className={styles.left}>چاپ هفتم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printEight">
            <div className={styles.left}>چاپ هشتم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printNine">
            <div className={styles.left}>چاپ نهم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
          <Link to="/prints/printTen">
            <div className={styles.left}>چاپ دهم</div>
            <div className={styles.right}>جهت مشاهده کلیک کنید</div>
          </Link>
        </div>
      </Fade>
    );
  }
}

export default Prints;
