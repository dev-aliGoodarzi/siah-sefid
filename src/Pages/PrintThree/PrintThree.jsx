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
  computerItem7__pic5,
  computerItem8__pic1,
  computerItem9__pic1,
  mobileItem4__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules

class PrintThree extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-7",
        newsName: "ساتا اکسپرس چیست ؟",
        newsImage: computerItem7__pic5,
        newsTextContent: "فلسفه وجودی ساتا اکسپرس",
        writeIn: "2022/04/18",
        writeBy: "امیررضا خلجی",
        routeToNavigate: "computer-item-7",
      },
      {
        id: "computer-item-8",
        newsName: "حافظه SSD چیست",
        newsImage: computerItem8__pic1,
        newsTextContent: "تکنولوژی درایو اس اس دی",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-8",
      },
      {
        id: "computer-item-9",
        newsName: "  چیست ؟ PCI-E",
        newsImage: computerItem9__pic1,
        newsTextContent: "  دقیقا چیست ؟   PCI-E",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-9",
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
