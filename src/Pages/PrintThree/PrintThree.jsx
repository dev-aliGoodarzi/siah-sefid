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
  computerItem4__pic1,
  mobileItem4__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules

class PrintThree extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-4",
        newsName: "بازی با سیستم خوبه یا بد ؟",
        newsImage: computerItem4__pic1,
        newsTextContent: "آیا بازی سرای سیستم ضرر دارد ؟",
        writeIn: "2022/05/23",
        writeBy: "علی صفری",
        routeToNavigate: "computer-item-4",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-4",
        newsName: "اینفرارد گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem4__pic1,
        newsTextContent: "وظیفه سنسور مادون قرمز گوشی چیست ؟",
        writeIn: "2022/05/23",
        writeBy: "یونس عسگری ",
        routeToNavigate: "mobile-item-4",
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

export default PrintThree;
