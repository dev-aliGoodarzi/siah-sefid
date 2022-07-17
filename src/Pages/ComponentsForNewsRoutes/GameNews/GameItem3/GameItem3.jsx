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
import { gameItem3__pic1 } from "../../../../Components/NewsImage/NewsImage";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
//Modules

class GameItem3 extends Component {
  state = {};
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
          <h2>بازی The Callisto Protocol شدیداً استرس‌زا و ترسناک است</h2>
          <img src={gameItem3__pic1} alt="callistoLOGO" />
          <p>
            گلن اسکافیلد به عنوان بنیانگذار استودیوی استرایکینگ دیستنس، اخیراً
            اطلاعات جدیدی از بازی مورد انتظار The Callisto Protocol منتشر کرد.
          </p>
          <p>
            بازی ترسناک علمی-تخیلی جدید خالقان Dead Space یعنی The Callisto
            Protocol، در حال توسعه قرار دارد و به عنوان جانشین معنوی این مجموعه
            عرضه خواهد شد. همین موضوع نیز باعث شده است که این بازی از زمان معرفی
            خود در ماه دسامبر سال 2020 میلادی در کانون توجه بسیاری از گیمرها
            قرار بگیرد. البته، از آن زمان تاکنون اطلاعات چندانی از این بازی
            منتشر نشده بود، اما اخیراً بنیان‌گذار استودیوی استرایکینگ (
            <a style={{ color: "red" }} href="https://sds.com/">
              Striking Distance
            </a>
            ) یعنی گلن اسکافیلد (Glen Schofield) جزئیاتی از این بازی ارائه کرد.
          </p>
          <p>
            وی اخیراً طی توییتی از طراح نورپردازی The Callisto Protocol یعنی
            آتسوشی سئو (Atsushi Seo) و کارگردان هنری بازی یعنی دیمیتریوس لِئال
            (Demetrius Leal) ستایش کرد. وی افزود که نورپردازی بخش مهمی از هر
            بازی ترسناک است و نوپردازی در The Callisto Protocol به تبدیل آن به
            یک تجربه‌ی بسیار ترسناک، بد خُلق و استرس‌زا کمک فراوانی کرده است.
          </p>
          <p>
            علاوه بر این، اسکافیلد افزود که اطلاعات بیشتری در مورد این بازی
            به‌زودی با علاقه‌مندان آن به اشتراک گذاشته خواهد شد.
          </p>
          <p>
            بازی The Callisto Protocol در حال حاضر برای کنسول‌های پلی استیشن ۵،
            ایکس باکس سری ایکس و اس و پلتفرم رایانه‌های شخصی در حال توسعه است.
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default GameItem3;
