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
  computerItem10__pic1,
  mobileItem8__pic1,
  mobileItem9__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintFour extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-10",
        newsName: "کلاک پالس یا پالس ساعت چیست ؟ ",
        newsImage: computerItem10__pic1,
        newsTextContent: "سیگنال کلاک چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-10",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-8",
        newsName: "فرق زوم دیجیتال و زوم اپتیکال چیست ؟",
        newsImage: mobileItem8__pic1,
        newsTextContent: "مقایسه زوم دیجیتال و زوم اپتیکال",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری",
        routeToNavigate: "mobile-item-8",
      },
      {
        id: "mobile-item-9",
        newsName: "فلت گوشی چیست ؟ کاربرد و انواع کابل فلت",
        newsImage: mobileItem9__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/04/18",
        writeBy: "امیررضا خلجی ",
        routeToNavigate: "mobile-item-9",
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

export default PrintFour;
