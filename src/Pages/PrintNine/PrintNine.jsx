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
  mobileItem10__pic1,
  mobileItem11__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintNine extends Component {
  state = {
    computerItems: [],
    mobileItems: [
      {
        id: "mobile-item-10",
        newsName: "فلت گوشی چیست ؟ کاربرد و انواع کابل فلت",
        newsImage: mobileItem10__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/08/15",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-10",
      },
      {
        id: "mobile-item-11",
        newsName: `
            فرق نسخه ( ورژن ) و Type در استاندارد USB
        `,
        newsImage: mobileItem11__pic1,
        newsTextContent: `
        تفاوت ورژن و Type در استاندارد USB
        `,
        writeIn: "2022/08/15",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-11",
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

export default PrintNine;
