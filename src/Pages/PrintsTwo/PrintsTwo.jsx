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
  computerItem4__pic1,
  computerItem5__pic1,
  computerItem6__pic1,
  mobileItem4__pic1,
  mobileItem5__pic2,
} from "../../Components/NewsImage/NewsImage";
import PrintPageMapper from "../../Components/PrintPageMapper/PrintPageMapper";
//Modules

class PrintsTwo extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-4",
        newsName: "بازی با سیستم خوبه یا بد ؟",
        newsImage: computerItem4__pic1,
        newsTextContent: "آیا بازی سرای سیستم ضرر دارد ؟",
        writeIn: "2022/04/18",
        writeBy: "علی صفری",
        routeToNavigate: "computer-item-4",
      },
      {
        id: "topNews__computer__18__4__2022___1",
        newsName: "لپتاپ بدون سیستم عامل چیست ؟",
        newsImage: computerItem5__pic1,
        newsTextContent: "لپ تاپ بدون سیستم عامل یعنی چه ؟",
        writeIn: "2022/04/18",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "computer-item-5",
      },
      {
        id: "computer-item-6",
        newsName: "باتری 6 سلولی لپ تاپ با باتری 4 سلولی چه فرقی دارد ؟",
        newsImage: computerItem6__pic1,
        newsTextContent: "تفاوت باتری های لپتاپ",
        writeIn: "2022/04/18",
        writeBy: "علیرضا حسینی",
        routeToNavigate: "computer-item-6",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-4",
        newsName: "اینفرارد گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem4__pic1,
        newsTextContent: "وظیفه سنسور مادون قرمز گوشی چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری ",
        routeToNavigate: "mobile-item-4",
      },
      {
        id: "mobile-item-5",
        newsName: "حسگر مجاورتی گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem5__pic2,
        newsTextContent: "وظیفه سنسور مجاورت گوشی چیست ؟",
        writeIn: "2022/04/18",
        writeBy: " حسین سیاهوشی ",
        routeToNavigate: "mobile-item-5",
      },
    ],
    gameItems: [],
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
