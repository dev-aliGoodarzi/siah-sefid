//React
import React, { Component } from "react";
//React
//Images
import {
  mobileItem1__pic1,
  mobileItem2__pic1,
  mobileItem3__pic1,
  mobileItem4__pic1,
  mobileItem5__pic2,
} from "../NewsImage/NewsImage";
import { GoCalendar } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
//Images
//CSS
import styles from "./MobileContainer.module.css";
import { Link } from "react-router-dom";
//CSS
//Modules
//Modules
class MobileContainer extends Component {
  state = {
    mobileNewsList: [
      {
        id: "mobile-item-2",
        newsName: "جک هدفون چیست ؟ معنی جک 3.5 میلی متری",
        newsImage: mobileItem2__pic1,
        newsTextContent: "بررسی ساختار جک هدفون",
        writeIn: "2022/04/18",
        writeBy: "حسین سیاهوشی",
        routeToNavigate: "mobile-item-2",
      },
      {
        id: "mobile-item-3",
        newsName: "آیا استفاده از گوشی هنگام شارژ کردن خطرناکه ؟",
        newsImage: mobileItem3__pic1,
        newsTextContent: "آیا واقعا خطرناکه ؟",
        writeIn: "2022/04/18",
        writeBy: "حسین سیاهوشی",
        routeToNavigate: "mobile-item-3",
      },
      {
        id: "mobile-item-4",
        newsName: "اینفرارد گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem4__pic1,
        newsTextContent: "وظیفه سنسور مادون قرمز گوشی چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-4",
      },
      {
        id: "mobile-item-5",
        newsName: "حسگر مجاورتی گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem5__pic2,
        newsTextContent: "وظیفه سنسور مجاورت گوشی چیست ؟",
        writeIn: "2022/05/06",
        writeBy: "حسین سیاهوشی",
        routeToNavigate: "mobile-item-5",
      },
    ],

    rightBigItem: {
      id: "mobile-item-1",
      newsName: "پاوربانک تقلبی چجوریه ؟ تشخیص پاوربانک فیک",
      newsImage: mobileItem1__pic1,
      newsTextContent: "راهنمای تشخصی پاوربانک تقلبی",
      writeIn: "2022/04/18",
      writeBy: "علی گودرزی",

      routeToNavigate: "mobile-item-1",
    },
  };
  componentDidMount() {
    // window.scrollTo({
    //   top: Math.round(
    //     (window.scrollY /
    //       (window.document.body.scrollHeight - window.innerHeight)) *
    //       2
    //   ),
    // });

    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else if (window.innerWidth > 1900) {
      window.scrollTo({ top: 190 });
    } else if (window.innerWidth > 1300) {
      window.scrollTo({ top: 120 });
    } else if (window.innerWidth < 800) {
      window.scrollTo({ top: 130 });
    }
  }
  render() {
    return (
      <div className={styles.mobileContainer}>
        <div className={styles.rightContents}>
          <div className={styles.leftLittleItems}>
            {this.state.mobileNewsList.map((item) => {
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

export default MobileContainer;
