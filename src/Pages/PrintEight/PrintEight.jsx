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
import { mobileItem9__pic1 } from "../../Components/NewsImage/NewsImage";
//Modules
class PrintEight extends Component {
  state = {
    computerItems: [],
    mobileItems: [
      {
        id: "mobile-item-9",
        newsName: "فلت گوشی چیست ؟ کاربرد و انواع کابل فلت",
        newsImage: mobileItem9__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/08/01",
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

export default PrintEight;
