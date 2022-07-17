//React
import React, { Component } from "react";
//React
import { Link } from "react-router-dom";
//Images
//Images
//CSS
import styles from "../../App.module.css";
//CSS
//Modules And Components
import ComputerContainer from "../../Components/ComputerContainer/ComputerContainer";
import GameContainer from "../../Components/GameContainer/GameContainer";
import MobileContainer from "../../Components/MobileContainer/MobileContainer";
import NewestContents from "../../Components/NewestContents/NewestContents";
import TopNews from "../../Components/TopNews/TopNews";
import Fade from "react-reveal/Fade";
//Modules And Components
class Home extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render() {
    return (
      <Fade bottom>
        <NewestContents />
        <TopNews />
        <Link id={"test"} to="/computer-news" className={styles.middy}>
          کامپیوتر
        </Link>
        <ComputerContainer />
        <Link to="/mobile-news" className={styles.middy}>
          موبایل
        </Link>
        <MobileContainer />
        <Link to="/game-news" className={styles.middy}>
          بازی
        </Link>
        <GameContainer />
      </Fade>
    );
  }
}

export default Home;
