//React
import React, { Component } from "react";
import { BsPencil } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
//React
//Images
import {
  gameItem1__pic1,
  gameItem2__pic1,
  gameItem3__pic1,
  gameItem4__pic1,
  gameItem5__pic1,
} from "../../Components/NewsImage/NewsImage";
//Images
//CSS
import styles from "./GamePage.module.css";
//CSS
//Modules
import Fade from "react-reveal/Fade";
//Modules
class GamePage extends Component {
  constructor() {
    super();
    this.gamePageRef = React.createRef();
  }
  state = {
    gamePage: [
      //First
      {
        id: "topNews__game__18__4__2022___1",
        newsName:
          "شایعه: کانیه وست ایده‌ی یک بازی را به میاموتو ارائه داده بود",
        newsImage: gameItem1__pic1,
        newsTextContent: ` `,
        writeIn: "2022/04/23",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-1",
      },
      //Second
      {
        id: "topNews__game__18__4__2022___2",
        newsName:
          "بازی Fortnite بدون خرید هیچ اشتراکی توسط ایکس باکس کلاود قابل استریم است",
        newsImage: gameItem2__pic1,
        newsTextContent: " ",
        writeIn: "2022/05/07",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-2",
      },
      //fourth
      {
        id: "topNews__game__18__4__2022___3",
        newsName: "بازی The Callisto Protocol شدیداً استرس‌زا و ترسناک است",
        newsImage: gameItem3__pic1,
        newsTextContent: " ",
        writeIn: "2022/06/06",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-3",
      },
      //sixth
      {
        id: "topNews__game__18__4__2022___4",
        newsName:
          " گزارش: بازی Call of Duty Modern Warfare 2 در اوایل ژوئن رونمایی خواهد شد",
        newsImage: gameItem4__pic1,
        newsTextContent: " ",
        writeIn: "2022/07/04",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-4",
      },
      //nine
      {
        id: "topNews__game__18__4__2022___5",
        newsName: "عناوین رایگان بعدی فروشگاه اپیک گیمز مشخص شدند",
        newsImage: gameItem5__pic1,
        newsTextContent: "گیم ها رایگان در Epic Games",
        writeIn: "2022/08/15",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-5",
      },
    ],
  };

  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    }
    window.scrollTo({
      top: 0,
    });
  }
  render() {
    return (
      <Fade left>
        <div className={styles.gamePage} ref={this.gamePageRef}>
          <h3>
            این روز ها دغدغه ی یکسری افراد علاوه بر کار در خارج یا داخل خانه ،
            اخبار حاشیه ی دنیای گیم و بازی می باشد از این رو مجله آموزشی سیاه و
            سفید سعی در پوشش حداکثری اخبار حوزه دنیای گیم دارد .
          </h3>
          {this.state.gamePage.map((item) => {
            return (
              <Link
                to={`/${item.routeToNavigate}`}
                className={styles.gameNewsItem}
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
      </Fade>
    );
  }
}

export default GamePage;
