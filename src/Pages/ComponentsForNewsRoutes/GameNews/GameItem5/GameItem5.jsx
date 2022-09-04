//React
import React, { Component } from "react";
import { Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import { gameItem5__pic1 } from "../../../../Components/NewsImage/NewsImage";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules
class GameItem5 extends Component {
  state = {
    commentsArray: [],
  };
  componentDidMount() {
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
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h1>عناوین رایگان بعدی فروشگاه اپیک گیمز مشخص شدند</h1>
          <img src={gameItem5__pic1} alt="" />
          <p>
            بازی‌های Prey و Jotun: Valhalla Edition، عناوین رایگان بعدی فروشگاه
            اپیک گیمز هستند. بازی‌های مذکور از تاریخ 12 الی 19 می (22 الی 29
            اردیبهشت) به صورت رایگان قابل دریافت خواهند بود.
          </p>
          <p>
            پیش‌تر در دسامبر 2021، بازی اکشن اول شخص Prey به مدت 24 ساعت در
            فروشگاه اپیک گیمز رایگان شد. عناوین Prey و Jotun: Valhalla Edition
            جایگزین بازی Terraforming Mars خواهند شد که تا تاریخ 12 می برای
            دانلود رایگان خواهد بود.
          </p>
          <p>
            بازی Jotun: Valhalla Edition اثری در سبک اکشن ماجراجویی است که توسط
            استودیوی کانادایی Thunder Lotus Games توسعه یافته است. این بازی
            ابتدا در سپتامبر 2015 برای رایانه‌های شخصی، سپتامبر 2016 برای
            پلی‌استیشن 4 و ایکس‌باکس وان و در آوریل 2018 برای نینتندو سوییچ
            منتشر شد. همچنین بازی Prey، ساخته‌ی استودیوی آرکین (Arkane)، در سال
            2017 برای پلی‌استیشن 4، ایکس‌باکس وان و رایانه‌های شخصی منتشر گردید.
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default GameItem5;
