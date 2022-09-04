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
import {
  computerItem3__pic1,
  gameItem2__pic1,
  mobileItem3__pic1,
} from "../../Components/NewsImage/NewsImage";
import PrintPageMapper from "../../Components/PrintPageMapper/PrintPageMapper";
//Modules

class PrintsTwo extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-3",
        newsName: "قفل کنسینگتون چیست ؟",
        newsImage: computerItem3__pic1,
        newsTextContent: "از قفل کنسینگتون چه میدانید ؟",
        writeIn: "2022/05/07",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-3",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-3",
        newsName: "آیا استفاده از گوشی هنگام شارژ کردن خطرناکه ؟",
        newsImage: mobileItem3__pic1,
        newsTextContent: "آیا واقعا خطرناکه ؟",
        writeIn: "2022/05/07",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-3",
      },
    ],
    gameItems: [
      {
        id: "topNews__game__18__4__2022___2",
        newsTextContent:
          "بازی Fortnite بدون خرید هیچ اشتراکی توسط ایکس باکس کلاود قابل استریم است",
        newsImage: gameItem2__pic1,
        newsName: " ",
        writeIn: "2022/05/07",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-2",
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

export default PrintsTwo;
