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
  computerItem6__pic1,
  mobileItem6__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintFive extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-6",
        newsName: "باتری 6 سلولی لپ تاپ با باتری 4 سلولی چه فرقی دارد ؟",
        newsImage: computerItem6__pic1,
        newsTextContent: "تفاوت باتری های لپتاپ",
        writeIn: "2022/06/20",
        writeBy: "علیرضا حسینی",
        routeToNavigate: "computer-item-6",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-6",
        newsName: "فرق حافظه رم گوشی و کارت حافظه گوشی",
        newsImage: mobileItem6__pic1,
        newsTextContent: "تفاوت حافظه RAM گوشی و کارت حافظه گوشی",
        writeIn: "2022/06/20",
        writeBy: "حسین سیاهوشی",
        routeToNavigate: "mobile-item-6",
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

export default PrintFive;
