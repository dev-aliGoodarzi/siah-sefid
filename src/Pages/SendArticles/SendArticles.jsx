//React
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
//React
//Images
//Images
//CSS
import styles from "./SendArticles.module.css";
//CSS
//Modules
//Modules

class SendArticles extends Component {
  state = {};
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 50 });
    }
  }
  render() {
    return (
      <Fade left>
        <div className={styles.sendArticlesContainer}>
          <p>
            جهت ارسال مقاله ی خود به این مجله از طریق راه های ارتباطی درج شده{" "}
            <mark>
              <Link to="/contact-us"> &nbsp; این قسمت &nbsp; </Link>
            </mark>
            اقدام نمایید
          </p>
        </div>
      </Fade>
    );
  }
}

export default SendArticles;
