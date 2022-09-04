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
  computerItem8__pic1,
  mobileItem8__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintSeven extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-8",
        newsName: "حافظه SSD چیست",
        newsImage: computerItem8__pic1,
        newsTextContent: "تکنولوژی درایو اس اس دی",
        writeIn: "2022/07/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-8",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-8",
        newsName: "فرق زوم دیجیتال و زوم اپتیکال چیست ؟",
        newsImage: mobileItem8__pic1,
        newsTextContent: "مقایسه زوم دیجیتال و زوم اپتیکال",
        writeIn: "2022/07/18",
        writeBy: "یونس عسگری",
        routeToNavigate: "mobile-item-8",
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

export default PrintSeven;
