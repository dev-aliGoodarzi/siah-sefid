//React
import React, { Component } from "react";
import { BsPencil } from "react-icons/bs";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
//React
//Images
import {
  mobileItem10__pic1,
  mobileItem11__pic1,
  mobileItem12__pic1,
  mobileItem13__pic1,
  mobileItem14__pic1,
  mobileItem1__pic1,
  mobileItem2__pic1,
  mobileItem3__pic1,
  mobileItem4__pic1,
  mobileItem5__pic2,
  mobileItem6__pic1,
  mobileItem7__pic1,
  mobileItem8__pic1,
  mobileItem9__pic1,
} from "../../Components/NewsImage/NewsImage";
//Images
//CSS
import styles from "./MobilePage.module.css";
//CSS
//Modules
import Fade from "react-reveal/Fade.js";
//Modules
class MobilePage extends Component {
  constructor() {
    super();
    this.mobilePageRef = React.createRef();
  }
  state = {
    mobilePage: [
      //First
      {
        id: "mobile-item-1",
        newsName: "پاوربانک تقلبی چجوریه ؟ تشخیص پاوربانک فیک",
        newsImage: mobileItem1__pic1,
        newsTextContent: "راهنمای تشخصی پاوربانک تقلبی",
        writeIn: "2022/04/18",
        writeBy: "علی مرادی تبار",

        routeToNavigate: "mobile-item-1",
      },
      {
        id: "mobile-item-2",
        newsName: "جک هدفون چیست ؟ معنی جک 3.5 میلی متری",
        newsImage: mobileItem2__pic1,
        newsTextContent: "بررسی ساختار جک هدفون",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری",

        routeToNavigate: "mobile-item-2",
      },
      //SEC
      {
        id: "mobile-item-3",
        newsName: "آیا استفاده از گوشی هنگام شارژ کردن خطرناکه ؟",
        newsImage: mobileItem3__pic1,
        newsTextContent: "آیا واقعا خطرناکه ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-3",
      },
      //Third
      {
        id: "mobile-item-4",
        newsName: "اینفرارد گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem4__pic1,
        newsTextContent: "وظیفه سنسور مادون قرمز گوشی چیست ؟",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری ",
        routeToNavigate: "mobile-item-4",
      },
      // Fourth
      {
        id: "mobile-item-5",
        newsName: "حسگر مجاورتی گوشی موبایل چیست و چه کاربردی داره ؟",
        newsImage: mobileItem5__pic2,
        newsTextContent: "وظیفه سنسور مجاورت گوشی چیست ؟",
        writeIn: "2022/04/18",
        writeBy: " حسین سیاهوشی ",
        routeToNavigate: "mobile-item-5",
      },
      //Five
      {
        id: "mobile-item-6",
        newsName: "فرق حافظه رم گوشی و کارت حافظه گوشی",
        newsImage: mobileItem6__pic1,
        newsTextContent: "تفاوت حافظه RAM گوشی و کارت حافظه گوشی",
        writeIn: "2022/04/18",
        writeBy: "حسین سیاهوشی",

        routeToNavigate: "mobile-item-6",
      },
      //SIX
      {
        id: "mobile-item-7",
        newsName: "فرق سری A و M گوشی های سامسونگ چیست؟",
        newsImage: mobileItem7__pic1,
        newsTextContent: "سری های سامسونگ",
        writeIn: "2022/04/18",
        writeBy: "علی اصغر صفری",
        routeToNavigate: "mobile-item-6",
      },
      //SEVEN
      {
        id: "mobile-item-8",
        newsName: "فرق زوم دیجیتال و زوم اپتیکال چیست ؟",
        newsImage: mobileItem8__pic1,
        newsTextContent: "مقایسه زوم دیجیتال و زوم اپتیکال",
        writeIn: "2022/04/18",
        writeBy: "یونس عسگری",
        routeToNavigate: "mobile-item-8",
      },
      //EIGHT
      {
        id: "mobile-item-9",
        newsName: "فلت گوشی چیست ؟ کاربرد و انواع کابل فلت",
        newsImage: mobileItem9__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/04/18",
        writeBy: "امیررضا خلجی ",
        routeToNavigate: "mobile-item-9",
      },
      //NINE
      {
        id: "mobile-item-10",
        newsName: "فلت گوشی چیست ؟ کاربرد و انواع کابل فلت",
        newsImage: mobileItem10__pic1,
        newsTextContent: "کابل فلت چیه ؟",
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-10",
      },
      //TEN
      {
        id: "mobile-item-11",
        newsName: `
            فرق نسخه ( ورژن ) و Type در استاندارد USB
        `,
        newsImage: mobileItem11__pic1,
        newsTextContent: `
        تفاوت ورژن و Type در استاندارد USB
        `,
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-11",
      },
      {
        id: "mobile-item-12",
        newsName: `
            USB چیست ؟ USB 2.0 و USB 3.0 چه فرقی با هم دارند ؟
            `,
        newsImage: mobileItem12__pic1,
        newsTextContent: `
        USB چیست ؟`,
        writeIn: "2022/04/18",
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
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-14",
      },
      {
        id: "mobile-item-14",
        newsName: `
            تفاوت چیپست و پردازنده اصلی در گوشی
        `,
        newsImage: mobileItem14__pic1,
        newsTextContent: `فرقشون دقیقا چیه ؟`,
        writeIn: "2022/04/18",
        writeBy: "علی گودرزی",
        routeToNavigate: "mobile-item-14",
      },
    ],
  };
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 50 });
    }
  }
  render() {
    return (
      <Fade left>
        <div className={styles.mobilePage} ref={this.mobilePageRef}>
          {this.state.mobilePage.map((item) => {
            return (
              <Link
                to={`/${item.routeToNavigate}`}
                className={styles.mobileNewsItem}
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
          <h3>
            گوشی موبایل یکی از ملزومات اساسی و غیر قابل اجتناب ما شده ، تنوع
            برندها و امکانات مختلف در گوشی موبایل باعث سردرگمی خیلی ها میشه ! از
            بهترین مارک و برندها در تولید گوشی موبایل میشه به سامسونگ ، اپل ،
            سونی ، موتورولا ، هواوی الجی و HTC اشاره کرد . بازار گوشی موبایل تحت
            تاثیر گوشی های چینی قرار گرفته و تا چند سال آینده شاهد تغییر و
            تحولات زیادی در صنعت گوشی موبایل خواهیم بود .
          </h3>
        </div>
      </Fade>
    );
  }
}

export default MobilePage;
