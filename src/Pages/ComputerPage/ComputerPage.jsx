//React
import React, { Component } from "react";
import { BsPencil } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
//React
//Images
import {
  computerItem10__pic1,
  computerItem11__pic2,
  computerItem1__pic1,
  computerItem2__pic1,
  computerItem3__pic1,
  computerItem4__pic1,
  computerItem5__pic1,
  computerItem6__pic1,
  computerItem7__pic5,
  computerItem8__pic1,
  computerItem9__pic1,
} from "../../Components/NewsImage/NewsImage";
//Images
//CSS
import styles from "./ComputerPage.module.css";
//CSS
//Modules
import Fade from "react-reveal/Fade";
//Modules
class ComputerPage extends Component {
  constructor() {
    super();
    this.ComputerPageRef = React.createRef();
  }
  state = {
    computerItems: [
      //First
      {
        id: "computer-item-1",
        newsName: "تبلت / لپتاپ هیبریدی چیست ؟",
        newsImage: computerItem1__pic1,
        newsTextContent: "تبلت / لپتاپ های هیبریدی چه کاربردی دارند ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-1",
      },
      {
        id: "computer-item-2",
        newsName: "آیا باتری لپتاپ من سالم است ؟",
        newsImage: computerItem2__pic1,
        newsTextContent: "تست سلامت باتری لپتاپ من",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-2",
      },
      {
        id: "computer-item-3",
        newsName: "قفل کنسینگتون چیست ؟",
        newsImage: computerItem3__pic1,
        newsTextContent: "از قفل کنسینگتون چه میدانید ؟",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-3",
      },
      //Second
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
      //Third
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
      //Fourth
      {
        id: "computer-item-10",
        newsName: "کلاک پالس یا پالس ساعت چیست ؟ ",
        newsImage: computerItem10__pic1,
        newsTextContent: "سیگنال کلاک چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-10",
      },
      // Fifth
      {
        id: "computer-item-11",
        newsName: "چرا اطلاعات حافظه رم کامپیوتر با قطع برق پاک می شود ؟ ",
        newsImage: computerItem11__pic2,
        newsTextContent: "حافظه رم داینمیک چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "computer-item-11",
      },
    ],
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  }

  render() {
    return (
      <Fade left>
        <div className={styles.computerPage} ref={this.ComputerPageRef}>
          <h3>
            انتخاب لپتاپ یا کامپیوتر مناسب برای هر کاربری مسئله بسیار مهمی است
            اما متاسفانه تبلیغات قدرتمند و کاملا هوشمندانه شرکت های تولید کننده
            لپتاپ یا کامپیوتر و همینطور تکنیک های فروشندگی فروشندگان لپتاپ یا
            کامپیوتر باعث سردرگمی هر چه بیشتر خریداران لپتاپ یا کامپیوتر شده و
            از این رو مجله اینترنتی سیاه و سفید سعی دارد تا نکات علمی مهم را به
            زبانی کاملا ساده و شیوا برای خوانندگان این مجله تشریح کند و به همه
            سوالات شما خوانندگان عزیز درباره لپتاپ یا کامپیوتر و همینطور لوازم
            جانبی لپتاپ یا کامپیوتر پاسخ دقیق و کاربردی دهد .
          </h3>
          <div className={styles.newsItemsMasterContainer}>
            {this.state.computerItems.map((item) => {
              return (
                <Link
                  to={`/${item.routeToNavigate}`}
                  className={styles.computerNewsItem}
                  key={item.id}
                >
                  <div
                    className={styles.picContainer}
                    style={{ backgroundImage: `url("${item.newsImage}")` }}
                  ></div>
                  <div className={styles.absoluteItem}></div>

                  <div className={styles.contentContainer}>
                    <p className={styles.newsName}>{item.newsName}</p>
                    <p className={styles.newsName}>{item.newsTextContent}</p>
                    <p className={styles.writenBy}>
                      <GoCalendar />
                      {item.writeIn} <BsPencil />
                      {item.writeBy}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
}

export default ComputerPage;
