//React
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
//React
//Images
//Images
//CSS
import styles from "./Footer.module.css";
//CSS
//Modules
//Modules
class Footer extends Component {
  state = {};
  render() {
    return (
      <Fade left>
        <div className={styles.footer}>
          <div className={styles.linkContainer}>
            <p>لینک های کمکی</p>
            <div className={styles.linkItems}>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                خانه
              </Link>
              <Link to="/send-articles">ارسال مقاله</Link>
            </div>
          </div>

          <div className={styles.linkContainer}>
            <p>راه های ارتباطی ما </p>
            <div className={styles.linkItems}>
              <Link to="/creators">سازندگان</Link>
              <Link to="/contact-us">تماس با ما</Link>
            </div>
          </div>
          <div className={styles.linkContainer}>
            <p>قوانین استفاده</p>
            <div className={styles.linkItems}>
              <Link to="/eula">EULA</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
          <div className={styles.socialNetworkContainer}></div>
        </div>
      </Fade>
    );
  }
}

export default Footer;
