//React
import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
import { gameItem2__pic1 } from "../../../../Components/NewsImage/NewsImage";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
//Modules
class GameItem2 extends Component {
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
      <Fade top>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>
            بازی Fortnite بدون خرید هیچ اشتراکی توسط ایکس باکس کلاود قابل استریم
            است
          </h2>
          <img src={gameItem2__pic1} alt="forniteGameLOGO" />
          <p>
            بازی Fortnite به اولین بازی رایگان سرویس ایکس باکس کلاود تبدیل شد و
            می‌توان بدون خرید هیچ اشتراکی آن را از طریق تمامی پلفترم‌های میزبان
            این سرویس استریم کرد.
          </p>
          <p>
            در واقع، گیمرهای علاقه‌مند برای استریم کردن این بازی نیازی به خرید
            اشتراک ایکس باکس گلد و یا ایکس باکس گیم پس نخواهند داشت و تنها با
            نصب اپلیکیشن سرویس ایکس باکس کلاود می‌توانند Fortnite را روی
            گوشی‌های هوشمند، تبلت‌ها و یا رایانه‌های شخصی استریم کنند.
          </p>
          <p>
            همچنین، با وجود این که این بازی در سال 2020 از فروشگاه اپل اپ استور
            حذف شد، این قابلیت به دارندگان گوشی‌های مبتنی بر سیستم عامل iOS این
            اجازه را می‌دهد تا Fortnite را از این طریق تجربه کنند. علاوه بر این،
            نایب رئیس و سرپرست ایکس باکس کلاود گیمینگ (
            <a
              href="https://www.xbox.com/en-US/xbox-game-pass/cloud-gaming"
              title="Xbox Cloud Gaming"
            >
              Xbox Cloud Gaming
            </a>
            ) یعنی کترین گلاکستین (Catherine Gluckstein) در پست جدید وبلاگ رسمی
            ایکس باکس وایر (Xbox Wire) گفت که افزوده شدن بازی Fortnite یک نقطه‌ی
            عطف کلیدی برای این سرویس خواهد بود.
          </p>
          <blockquote class={styles.borderRight}>
            <p>
              امروز به یک نقطه‌ی عطف کلیدی دیگری رسیدیم، زیرا در حال توسعه‌ی
              تجارت خود هستیم و قصد داریم تا فضای ابری را به روش‌های بیشتری در
              دسترس افراد مختلف قرار دهیم. بنابراین، فارغ از گیم پس اقدام به
              ارائه‌ی اولین بازی رایگان خود کردیم.
            </p>
            <p>
              با همکاری با شرکت اپیک (Epic)، بازی Fortnite از طریق سرویس ایکس
              باکس کلاود در دسترس قرار گرفت تا طرفداران این بازی بتوانند از طریق
              مرورگرهای خود در دستگاه‌های مبتنی بر سیستم عامل‌های iOS، گوشی‌های
              هوشمند، تبلت‌ها و یا رایانه‌های شخصی آن را تجربه کنند.
            </p>
            <p>
              این تازه شروع کار ما است. ما آزمون و خطا خواهیم کرد، از بازخوردها
              استفاده خواهیم کرد و به مرور زمان عناوین رایگان بیشتری را در
              اختیار گیمرهای خود قرار خواهیم داد.
            </p>
          </blockquote>
          <p>
            همچنین، وی اظهار داشت که از زمان راه‌اندازی نسخه‌ی آزمایشی ایکس باکس
            کلاود در سال 2020، بیش از 10 میلیون نفر بازی‌های این سرویس را به
            عنوان بخشی از سرویس ایکس باکس گیم پس آلتیمیت استریم کرده‌اند.مسلماً،
            قابل توجه‌ترین بخش این خبر این است که گیمرهای دستگاه‌های iOS
            می‌توانند به تجربه‌ی Fortnite بپردازند و این موضوع می‌تواند خیل
            عظیمی از کاربران این پلتفرم را راهی سرویس کلاود ایکس باکس کند.
          </p>
          <p>
            بازی Fortnite ، هم اکنون از طریق پلتفرم رایانه‌های شخصی، سرویس کلاود
            ایکس باکس، گوشی‌های هوشمند مبتنی بر سیستم عامل اندروید و کنسول‌های
            پلی استیشن ۵، پلی استیشن ۴، ایکس باکس وان، ایکس باکس سری ایکس و اس و
            نینتندو سوییچ به صورت رایگان در دسترس قرار دارد.
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default GameItem2;
