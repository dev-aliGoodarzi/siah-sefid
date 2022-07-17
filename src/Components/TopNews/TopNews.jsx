//React
import React, { Component } from "react";
//React
//Images
import {
  computerItem4__pic1,
  computerItem5__pic1,
  gameItem3__pic1,
  mobileItem3__pic1,
} from "../NewsImage/NewsImage";
import { GoCalendar } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
//Images
//CSS
import styles from "./TopNews.module.css";
import { Link } from "react-router-dom";
//CSS
//Modules
//Modules
class TopNews extends Component {
  constructor() {
    super();
    this.hOneRef = React.createRef();
  }
  // state ro avaz Kon khod Content Avaz Mishe !
  // Format [ {} ]
  state = {
    topNews: [
      {
        id: "computer-item-4",
        newsName: "بازی با سیستم خوبه یا بد ؟",
        newsImage: computerItem4__pic1,
        newsTextContent: "آیا بازی سرای سیستم ضرر دارد ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-4",
      },
      {
        id: "topNews__computer__18__4__2022___1",
        newsName: "لپتاپ بدون سیستم عامل چیست ؟",
        newsImage: computerItem5__pic1,
        newsTextContent: "لپ تاپ بدون سیستم عامل یعنی چه ؟ راهنمای خرید لپ تاپ",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",
        routeToNavigate: "computer-item-5",
      },
      {
        id: "mobile-item-3",
        newsName: "آیا استفاده از گوشی هنگام شارژ کردن خطرناکه ؟",
        newsImage: mobileItem3__pic1,
        newsTextContent: "آیا واقعا خطرناکه ؟",
        writeIn: "06/05/2022",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-3",
      },
      {
        id: "topNews__game__18__4__2022___3",
        newsName: "بازی The Callisto Protocol شدیداً استرس‌زا و ترسناک است",
        newsImage: gameItem3__pic1,
        newsTextContent: " ",
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-3",
      },
    ],
  };
  render() {
    return (
      <div className={styles.topNews}>
        <h1 ref={this.hOneRef}>جدیدترین اخبار</h1>
        <div className={styles.fourNewestNewsContainer}>
          {this.state.topNews.map((item) => {
            return (
              <Link
                to={item.routeToNavigate}
                className={styles.newsItem}
                key={item.id}
                onMouseEnter={() => {
                  this.hOneRef.current.style.opacity = 0;
                }}
                onMouseLeave={() => {
                  this.hOneRef.current.style.opacity = 1;
                }}
              >
                <div
                  className={styles.imgContainer}
                  style={{ backgroundImage: `url("${item.newsImage}")` }}
                >
                  <div className={styles.absoluteOpacity}></div>
                </div>
                <h3 className={styles.headerContent}>{item.newsName}</h3>
                <p className={styles.textContent}>{item.newsTextContent}</p>
                <p className={styles.writenBy}>
                  <GoCalendar />
                  {item.writeIn} <BsPencil />
                  {item.writeBy}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopNews;
