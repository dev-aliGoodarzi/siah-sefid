//React
import React, { Component } from "react";
import { Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import { gameItem5__pic1 } from "../../../../Components/NewsImage/NewsImage";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules
class GameItem6 extends Component {
  state = {};
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

export default GameItem6;
