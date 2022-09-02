//React
import React, { Component } from "react";
//React
//Images
import { GoCalendar } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
//Images
//CSS
import styles from "./NewestContents.module.css";
//CSS
//Modules
import {
  computerItem2__pic1,
  computerItem1__pic1,
  mobileItem9__pic1,
  mobileItem13__pic1,
  mobileItem14__pic1,
} from "../NewsImage/NewsImage";
import { Link } from "react-router-dom";
//Modules
class NewestContents extends Component {
  constructor() {
    super();
    this.rightBigItem = React.createRef();
  }
  // Inja Jadid Tarin Khabar Ha ro Minvisim !
  // Format : [ {} ]
  state = {
    news: [
      {
        id: "mobile-item-9",
        name: "فلت گوشی چیست ؟ ",
        image: mobileItem9__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/08/01",
        writeBy: "امیررضا خلجی ",
        routeToNavigate: "mobile-item-9",
        about: "موبایل",
      },
      {
        id: "mobile-item-13",
        name: `
        شارژ اولیه گوشی موبایل و تبلت
        `,
        image: mobileItem13__pic1,
        newsTextContent: `
        آیا شارژ اولیه نیاز است ؟`,
        writeIn: "2022/08/29",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "mobile-item-14",
        about: "موبایل",
      },
      {
        id: "mobile-item-14",
        name: `
            تفاوت چیپست و پردازنده اصلی 
        `,
        image: mobileItem14__pic1,
        newsTextContent: `فرقشون دقیقا چیه ؟`,
        writeIn: "2022/08/29",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-14",
        about: "موبایل",
      },
      {
        id: "computer-item-2",
        name: "آیا باتری لپتاپ من سالم است ؟",
        image: computerItem2__pic1,
        newsTextContent: "تست سلامت باتری لپتاپ من",
        writeIn: "2022/05/06",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-2",
        about: "موبایل",
      },
      {
        id: "computer-item-1",
        name: "تبلت / لپتاپ هیبریدی چیست ؟",
        image: computerItem1__pic1,
        newsTextContent: "تبلت / لپتاپ های هیبریدی چه کاربردی دارند ؟",
        writeIn: "2022/05/06",
        writeBy: "علی گودرزی",
        routeToNavigate: "computer-item-1",
        about: "کامپیوتر",
      },
    ],
  };
  render() {
    return (
      <div className={styles.newestContents}>
        <Link
          ref={this.rightBigItem}
          to={this.state.news[4].routeToNavigate}
          className={styles.right}
          id={styles.rightBigItem}
          style={{ backgroundImage: `url("${this.state.news[4].image}")` }}
        >
          <div className={styles.absoluteOverly}></div>
          <div className={styles.about}>{this.state.news[4].about}</div>
          <div className={styles.name}>{this.state.news[4].name}</div>
          <div className={styles.dateAndWrite}>
            <GoCalendar />
            {this.state.news[4].writeIn}

            <BsPencil />
            {this.state.news[4].writeBy}
          </div>
        </Link>
        {/*  */}
        {/*  */}
        <div className={styles.left}>
          <div className={styles.top}>
            <Link
              id={styles.topLeft}
              to={this.state.news[0].routeToNavigate}
              className={styles.left}
              style={{ backgroundImage: `url("${this.state.news[0].image}")` }}
            >
              <div className={styles.absoluteOverly}></div>
              <div className={styles.about}>{this.state.news[0].about}</div>
              <div className={styles.name}>{this.state.news[0].name}</div>
              <div className={styles.dateAndWrite}>
                <GoCalendar />
                {this.state.news[0].writeIn}

                <BsPencil />
                {this.state.news[0].writeBy}
              </div>
            </Link>
            <Link
              to={this.state.news[1].routeToNavigate}
              className={styles.right}
              id={styles.topRight}
              style={{ backgroundImage: `url("${this.state.news[1].image}")` }}
            >
              <div className={styles.absoluteOverly}></div>
              <div className={styles.about}>{this.state.news[1].about}</div>
              <div className={styles.name}>{this.state.news[1].name}</div>
              <div className={styles.dateAndWrite}>
                <GoCalendar />
                {this.state.news[1].writeIn}

                <BsPencil />
                {this.state.news[1].writeBy}
              </div>
            </Link>
          </div>
          <div className={styles.bottom}>
            <Link
              to={this.state.news[2].routeToNavigate}
              className={styles.left}
              id={styles.bottomLeft}
              style={{ backgroundImage: `url("${this.state.news[2].image}")` }}
            >
              <div className={styles.absoluteOverly}></div>
              <div className={styles.about}>{this.state.news[2].about}</div>
              <div className={styles.name}>{this.state.news[2].name}</div>
              <div className={styles.dateAndWrite}>
                <GoCalendar />
                {this.state.news[2].writeIn}

                <BsPencil />
                {this.state.news[2].writeBy}
              </div>
            </Link>
            <Link
              to={this.state.news[3].routeToNavigate}
              className={styles.right}
              id={styles.bottomRight}
              style={{ backgroundImage: `url("${this.state.news[3].image}")` }}
            >
              <div className={styles.absoluteOverly}></div>
              <div className={styles.about}>{this.state.news[3].about}</div>
              <div className={styles.name}>{this.state.news[3].name}</div>
              <div className={styles.dateAndWrite}>
                <GoCalendar />
                {this.state.news[3].writeIn}
                <BsPencil />
                {this.state.news[3].writeBy}
              </div>
            </Link>
          </div>
        </div>
        {/*  */}
        {/*  */}
      </div>
    );
  }
}

export default NewestContents;
