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
  computerItem11__pic2,
  mobileItem12__pic1,
  mobileItem13__pic1,
  mobileItem14__pic1,
} from "../../Components/NewsImage/NewsImage";
//Modules
class PrintTen extends Component {
  state = {
    computerItems: [
      {
        id: "computer-item-11",
        newsName: "چرا اطلاعات حافظه رم کامپیوتر با قطع برق پاک می شود ؟ ",
        newsImage: computerItem11__pic2,
        newsTextContent: "حافظه رم داینمیک چیست ؟",
        writeIn: "2022/08/29",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "computer-item-11",
      },
    ],
    mobileItems: [
      {
        id: "mobile-item-12",
        newsName: `
            USB چیست ؟ USB 2.0 و USB 3.0 چه فرقی با هم دارند ؟
            `,
        newsImage: mobileItem12__pic1,
        newsTextContent: `
        USB چیست ؟`,
        writeIn: "2022/08/29",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-12",
      },
      {
        id: "mobile-item-13",
        newsName: `
        شارژ اولیه گوشی موبایل و تبلت
        `,
        newsImage: mobileItem13__pic1,
        newsTextContent: `
        آیا شارژ اولیه نیاز است ؟`,
        writeIn: "2022/08/29",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "mobile-item-13",
      },
      {
        id: "mobile-item-14",
        newsName: `
            تفاوت چیپست و پردازنده اصلی در گوشی
        `,
        newsImage: mobileItem14__pic1,
        newsTextContent: `فرقشون دقیقا چیه ؟`,
        writeIn: "2022/08/29",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-14",
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

export default PrintTen;
