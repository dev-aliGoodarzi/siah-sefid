//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
import ReactTooltip from "react-tooltip";
import { gameItem4__pic1 } from "../../../../Components/NewsImage/NewsImage";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
//Modules

class GameItem4 extends Component {
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
          <h2>
            گزارش: بازی Call of Duty Modern Warfare 2 در اوایل ژوئن رونمایی
            خواهد شد
          </h2>
          <img src={gameItem4__pic1} alt="MWIILOGO" />
          <p>
            تام هندرسون (Tom Henderson) در گزارش اخیر خود ادعا کرده است که بازی
            Call of Duty Modern Warfare 2 در اوایل ماه ژوئن معرفی خواهد شد.
          </p>
          <p>
            استودیوی اینفینیتی وارد (Infinity Ward) هفته‌ی گذشته با انتشار تیزری{" "}
            از لوگوی بازی Modern Warfare 2رونمایی کرد . در همین راستا، به‌تازگی
            گزارشی در خصوص تاریخ رونمایی رسمی از این بازی منتشر شده است
          </p>
          <p>
            طبق گفته‌ی تام هندرسون، انتظار می‌رود رونمایی از Modern Warfare 2 در
            ماه ژوئن، شامل یک تریلر از بخش کمپین این بازی باشد. همچنین گفته
            می‌شود گیم‌پلی این بازی احتمالاً در جریان رویداد Summer Game Fest
            2022 نمایش داده خواهد شد.
          </p>
          <p>
            ساعاتی پیش، تاریخ برگزاری رویداد Summer Game Fest 2022 مشخص شد . این
            رویداد در تاریخ ۱۹ خرداد ۱۴۰۱ (۹ ژوئن ۲۰۲۲) ساعت ۲۲:۳۰ به وقت تهران
            برگزار خواهد شد و ناشرهای بزرگی مانند پلی‌استیشن، ایکس‌باکس،
            یوبیسافت، سگا و کپکام در این مراسم حضور خواهند داشت.
          </p>
          <p>
            همچنین به گفته‌ی هندرسون، بخش چندنفره‌ی این بازی احتمالاً در ماه
            آگوست معرفی خواهد شد. هنوز مشخص نیست که آیا معرفی این بخش، شامل
            رونمایی از رویداد جدید Warzone خواهد بود یا خیر.
          </p>
          <p>
            علاوه بر بازی Call of Duty Modern Warfare 2 که احتمالاً در اکتبر یا
            نوامبر 2022 عرضه خواهد شد، نسخه‌ی دوم Warzone نیز قرار است در اواخر
            سال جاری میلادی به طور کامل معرفی گردد.
          </p>
          <ReactTooltip />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default GameItem4;
