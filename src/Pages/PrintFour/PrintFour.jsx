//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../Components/Prints/PrintItems.module.css";
//CSS
//Modules
import { Fade } from "react-reveal";
import PrintPageMapper from "../../Components/PrintPageMapper/PrintPageMapper";
import {
  computerItem5__pic1,
  gameItem3__pic1,
  mobileItem5__pic2,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintFour extends Component {
  state = {
    computerItems: [
      {
        id: "topNews__computer__18__4__2022___1",
        newsName: "لپتاپ بدون سیستم عامل چیست ؟",
        newsImage: computerItem5__pic1,
        newsTextContent: "لپ تاپ بدون سیستم عامل یعنی چه ؟",
        writeIn: "2022/06/06",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "computer-item-5",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-5",
        newsName: "حسگر مجاورتی گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem5__pic2,
        newsTextContent: "وظیفه سنسور مجاورت گوشی چیست ؟",
        writeIn: "2022/06/06",
        writeBy: " حسین سیاهوشی ",
        routeToNavigate: "mobile-item-5",
      },
    ],
    gameItems: [
      {
        id: "topNews__game__18__4__2022___3",
        newsTextContent:
          "بازی The Callisto Protocol شدیداً استرس‌زا و ترسناک است",
        newsImage: gameItem3__pic1,
        newsName: " ",
        writeIn: "2022/06/06",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-3",
      },
    ],
  };
  render() {
    return (
      <div className={styles.printCustomConntainer}>
        <h1>کامپیوتر</h1>
        <Fade top>
          <PrintPageMapper printItems={this.state.computerItems} />
        </Fade>
        <h1>موبایل</h1>
        <Fade bottom>
          <PrintPageMapper printItems={this.state.mobileItems} />
        </Fade>
        <h1>بازی</h1>
        <Fade top>
          <PrintPageMapper printItems={this.state.gameItems} />
        </Fade>
      </div>
    );
  }
}

export default PrintFour;
