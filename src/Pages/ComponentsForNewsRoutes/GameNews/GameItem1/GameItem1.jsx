//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules
import ReactTooltip from "react-tooltip";
import { gameItem1__pic1 } from "../../../../Components/NewsImage/NewsImage";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
class GameItem1 extends Component {
  state = {
    commentsArray: [
      {
        id: "g1-1",
        name: "اریانا",
        comment: " من تیزر این بازی رو دیدم خیلی عالیه ",
      },
    ],
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
      <Fade top>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>شایعه: کانیه وست ایده‌ی یک بازی را به میاموتو ارائه داده بود</h2>
          <img src={gameItem1__pic1} alt="kaniyeUngGame" />
          <p>
            بنا بر گزارشی، کانیه وست (Kanye West) ایده‌‌ی یک بازی با محوریت رفتن
            مادرش به بهشت را در E3 2015 به شیگرو میاموتو (Shigeru Miyamoto)
            ارائه داده بود.
          </p>
          <p>
            این رپر و طراح مد از پیش قصد داشت بازی مذکور را با عنوان Only One و
            طی رویدادی در شهر New York در فوریه 2016 معرفی کند. نام این بازی با
            عنوان آهنگی که وست در سال 2014 برای دخترش نوشته بود و از زبان مادر
            دومش، داندا وست (Donda West)، روایت می‌شد، یکسان بود.
          </p>
          <p>
            ادعا شده است که پیش از رونمایی عمومی این بازی، وست اقداماتی جهت
            ترغیب نینتندو برای قبول پروژه‌اش انجام داده و حتی با میاموتو در این
            باره صحبت کرده است. کارمند سابق رسانه‌ی IGN و تهیه‌کننده‌ی کنونی
            کامیونیتی توییچ یعنی زکری رایان (Zachary Ryan) امروز اعلام کرد که
            اوایل سال 2016 برای مصاحبه با میاموتو از طرف Star Fox Zero به New
            York رفته بود. به گزارش این شخص، زمانی که طی صحبت‌های رایان و یکی از
            نمایندگان نینتندو نام کانیه وست و آلبوم جدید او ذکر شد، میاموتو به
            شرح این موضوع و نحوه‌ی وقوع آن در E3 سال گذشته پرداخت. این فرد در
            توییتی نوشت:
          </p>
          <hr />
          <blockquote class={styles.borderRight}>
            <p>
              او گفت که کانیه وست، بی‌خبر به غرفه‌ی نینتندو آمد و درخواست کرد که
              در همان لحظه، با شخص میاموتو دیدار کند. کانیه نمونه‌ی اولیه‌ی یک
              بازی ویدئویی را به او نشان داد که در آن، نقش مادر او در حال پرواز
              به سوی بهشت را در اختیار دارید و موسیقی متن آن نیز ساخته‌ی خود او
              بود. حین توصیف این پروژه، میاموتو سر خود را به نشانه‌ی تأیید تکان
              می‌داد و به نظرش بازی بدی نبود، اما بیش‌تر با حالتی که باورش
              نمی‌شد کانیه وست برای ارائه‌ی این بازی پیش او آمده باشد.
            </p>
            <cite>زکری رایان</cite>
          </blockquote>

          <p>
            ظاهراً پس از آنکه میاموتو شرح ظواهر بازی را به اتمام رساند، اعلام
            کرد که این بازی، او را تحت تأثیر قرار داده است.
          </p>
          <blockquote class={styles.borderRight}>
            <p>
              در آخر، سری تکان داد و گفت:«خیلی جالب بود.» بعد از مدتی سکوت، او
              ادامه داد:«بسیار تأثیرگذار بود.» سپس با شدت خندید و گفت:«کانیه وست
              قصد دارد با نینتندو بازی بسازد.» و با دو دستش به من علامت شست نشان
              داد. در آن لحظه دیگر نمی‌توانستم خودم را کنترل کنم و به شدت
              خندیدم. چه اتفاقات مضحکی! نه فقط برای این اتفاق، بلکه برای اینکه
              ماجرا به این شکل خاص برای من نقل شد.
            </p>
          </blockquote>
          <p>
            وست بازی Only One را حدوداً دو هفته پس از دیدار با میاموتو معرفی کرد
            و هنگام رونمایی از آن گفت:
          </p>
          <blockquote class={styles.borderRight}>
            <p>
              روی یک بازی ویدئویی کار می‌کنم و می‌خواهم آن را به شما نشان بدهم.
              ایده‌ی بازی، گذر مادرم از دروازه‌های بهشت است.
            </p>
          </blockquote>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default GameItem1;
