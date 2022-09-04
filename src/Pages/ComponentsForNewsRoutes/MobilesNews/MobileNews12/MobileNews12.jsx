import React, { Component } from "react";
import { Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import { mobileItem12__pic1 } from "../../../../Components/NewsImage/NewsImage";

//React
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules

class MobileNews12 extends Component {
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
          <h2>USB چیست ؟ USB 2.0 و USB 3.0 چه فرقی با هم دارند ؟</h2>
          <h2> USB چیست ؟</h2>
          <p>
            <a href="http://fa.wikipedia.org/wiki/%DB%8C%D9%88%D8%A7%D8%B3%E2%80%8C%D8%A8%DB%8C">
              USB{" "}
            </a>
            برگرفته از حروف ابتدایی ۳ کلمه{" "}
            <span style={{ textDecoration: "underline" }}>U</span>niversal{" "}
            <span style={{ textDecoration: "underline" }}>S</span>erial{" "}
            <span style={{ textDecoration: "underline" }}>B</span>us می باشد که
            به معنی گذرگاه عمومی سریال است . از این استاندارد برای رد و بدل
            اطلاعات بین دستگاه های جانبی و کامپوتر استفاده می شود . یو اس بی تا
            به امروز در ۳ ورژن مختلف ارائه شده که USB 1.0 ، USB 2.0 و USB 3.0
            نام گذاری شده اند . یو اس بی ۲ برای ارتقای ۱ و یو اس بی ۳ برای
            ارتقای ۲ ارائه شده اند . به دلیل ماهیت یو اس بی که تبادل اطلاعات می
            باشد ، در ورژن آخر روی سرعت انتقال داده ها تمرکز شده و مهمترین تفاوت
            بین یو اس بی ۳ و ۲ همین مسئله می باشد .
          </p>
          <h2>سرعت انتقال داده USB 2.0</h2>
          <img src={mobileItem12__pic1} alt="" data-tip="لوگو USB 2.0" />
          <p>
            سرعت انتقال داده در USB 2.0 حدود ۴۸۰ مگا بیت بر ثانیه یا ۶۰ مگا بایت
            بر ثانیه است که با این ویژگی ، برچسب ” High Speed ” را از آن خود
            کرده ( در حالی که usb 1.0 این برچسب را ندارد ) . اما در مقابل یو اس
            بی ۲ ، یو اس بی ۳ با سرعت انتقال اطلاعات معادل با ۴۰۰ مگا بایت یا
            ۳.۲ گیگا بیت بر ثانیه می تواند حداکثر عملیات را انجام دهد .
          </p>
          <h2>سرعت انتقال داده USB 3.0</h2>
          <p>لوگو usb 3.0</p>
          <p>
            جدای از مبحث سرعت ، USB 3.0 حداکثر توان انتقالی به دستگاه های متصل
            به پورت را افزایش می دهد . یو اس بی ۲ به ازای هر واحد بار متصل ، ۱۰۰
            میلی آمپر را عبور می دهد . این در حالیست که یو اس بی ۳ می تواند با
            حداکثر ۶ واحد توان ، ۱۵۰ میلی آمپر را ارائه دهد که جمعا ۸۰۰ میلی
            آمپر را ساپورت می کند . این قضیه برای دستگاه هایی که با پورت یو اس
            بی شارژ می شوند بسیار مناسب خواهد بود . اما برای لپ تاپ ها خبر خوبی
            نیست چون باید توان بیشتری را تحویل دستگاه مورد نظر دهند .
          </p>
          <p>
            تفاوت دیگر بین این دو این است که یو اس بی ۲ چهار سیمه می باشد در
            حالیکه یو اس بی ۳ هشت سیمه است . جدای از ۴ سیم موجود در usb 2 ، چهار
            سیم دیگر برای ویژگی&nbsp;SuperSpeed تعبیه شده که از همین ۴ تا سیم
            نیز ۲ تا برای دریافت فوق سریع اطلاعات و ۲ تا برای ارسال فوق سریع
            اطلاعات استفاده می شود .
          </p>

          <ReactTooltip />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews12;
