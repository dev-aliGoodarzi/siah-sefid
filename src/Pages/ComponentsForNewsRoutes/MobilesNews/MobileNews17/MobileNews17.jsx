import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";

//React
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules

class MobileNews17 extends Component {
  state = {
    commentsArray: [
      {
        id: "m6-1",
        name: "علی",
        comment:
          "من خودم پاور بانک دارم ، خیلی مطالب شما مفید و کاربردیه ، اگر بخوام به کسی پیشنهاد بدم چطور بخره ، حتما سایت شما رو معرفی میکنم",
      },
      {
        id: "m6-2",
        name: "آرتمیس",
        comment: "خیلی مفید بود ، تشکر",
      },
      {
        id: "m6-3",
        name: "طاهره",
        comment: "خیلی خوب توضیح دادین ، ممنون",
      },
    ],
  };
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else if (window.innerWidth > 1900) {
      window.scrollTo({ top: 190 });
    } else if (window.innerWidth > 1300) {
      window.scrollTo({ top: 120 });
    } else if (window.innerWidth < 800) {
      window.scrollTo({ top: 130 });
    }
  }
  render() {
    return (
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews17;
