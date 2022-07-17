//React
import React, { Component } from "react";
//React
//Images
import {
  gameItem1__pic1,
  gameItem2__pic1,
  gameItem3__pic1,
  gameItem4__pic1,
  gameItem5__pic1,
} from "../NewsImage/NewsImage";
import { GoCalendar } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
//Images
//CSS
import styles from "./GameContainer.module.css";
import { Link } from "react-router-dom";
//CSS
//Modules
//Modules
class GameContainer extends Component {
  state = {
    computerNewsLittleItems: [
      {
        id: "topNews__game__18__4__2022___1",
        newsName:
          "شایعه: کانیه وست ایده‌ی یک بازی را به میاموتو ارائه داده بود",
        newsImage: gameItem1__pic1,
        newsTextContent: ` `,
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-1",
      },
      {
        id: "topNews__game__18__4__2022___2",
        newsName:
          "بازی Fortnite بدون خرید هیچ اشتراکی توسط ایکس باکس کلاود قابل استریم است",
        newsImage: gameItem2__pic1,
        newsTextContent: " ",
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-2",
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
      {
        id: "topNews__game__18__4__2022___4",
        newsName:
          " گزارش: بازی Call of Duty Modern Warfare 2 در اوایل ژوئن رونمایی خواهد شد",
        newsImage: gameItem4__pic1,
        newsTextContent: " ",
        writeIn: "06/05/2022",
        writeBy: " علی اصغر صفری  ",
        routeToNavigate: "game-item-4",
      },
    ],
    rightBigItem: {
      id: "topNews__game__18__4__2022___1",
      newsName: "عناوین رایگان بعدی فروشگاه اپیک گیمز مشخص شدند",
      newsImage: gameItem5__pic1,
      newsTextContent: "گیم ها رایگان در Epic Games",
      writeIn: "06/05/2022",
      writeBy: " علی اصغر صفری  ",
      routeToNavigate: "game-item-5",
    },
  };
  render() {
    return (
      <div className={styles.gamesContainer}>
        <div className={styles.rightContents}>
          <div className={styles.leftLittleItems}>
            {this.state.computerNewsLittleItems.map((item) => {
              return (
                <Link
                  to={item.routeToNavigate}
                  className={styles.littleItem}
                  key={item.id}
                >
                  <div className={styles.contents}>
                    <h4>{item.newsName}</h4>
                    <h6>
                      <GoCalendar />
                      {item.writeIn} <BsPencil />
                      {item.writeBy}
                    </h6>
                  </div>
                  <div
                    className={styles.picture}
                    style={{ backgroundImage: `url("${item.newsImage}")` }}
                  ></div>
                </Link>
              );
            })}
          </div>
          <Link
            to={this.state.rightBigItem.routeToNavigate}
            className={styles.rightBigItem}
          >
            <div
              className={styles.imageContainer}
              style={{
                backgroundImage: `url("${this.state.rightBigItem.newsImage}")`,
              }}
            ></div>
            <div className={styles.newsName}>
              {this.state.rightBigItem.newsName}
            </div>
            <div className={styles.newsAbout}>
              {this.state.rightBigItem.newsTextContent}
            </div>
            <div className={styles.writenBy}>
              <GoCalendar />
              {this.state.rightBigItem.writeIn} <BsPencil />
              {this.state.rightBigItem.writeBy}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default GameContainer;
