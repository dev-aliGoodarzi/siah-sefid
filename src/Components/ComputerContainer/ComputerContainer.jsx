//React
import React, { Component } from "react";
//React
//Images
import {
  computerItem1__pic1,
  computerItem2__pic1,
  computerItem3__pic1,
  computerItem4__pic1,
  computerItem5__pic1,
} from "../NewsImage/NewsImage";
import { GoCalendar } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
//Images
//CSS
import styles from "./ComputerContainer.module.css";
import { Link } from "react-router-dom";
//CSS
//Modules
//Modules
class ComputerContainer extends Component {
  constructor() {
    super();
    this.testi = null;
  }
  state = {
    computerNewsLittleItems: [
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
        writeBy: "علی گودرزی",
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
      {
        id: "computer-item-4",
        newsName: "بازی با سیستم خوبه یا بد ؟",
        newsImage: computerItem4__pic1,
        newsTextContent: "آیا بازی سرای سیستم ضرر دارد ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-4",
      },
    ],
    rightBigItem: {
      id: "topNews__computer__18__4__2022___1",
      newsName: "لپتاپ بدون سیستم عامل چیست ؟",
      newsImage: computerItem5__pic1,
      newsTextContent: "لپ تاپ بدون سیستم عامل یعنی چه ؟ راهنمای خرید لپ تاپ",
      writeIn: "2022/04/18",
      writeBy: "علی مرادی تبار",
      routeToNavigate: "computer-item-5",
    },
  };

  render() {
    return (
      <div className={styles.computerContainerr}>
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

export default ComputerContainer;
