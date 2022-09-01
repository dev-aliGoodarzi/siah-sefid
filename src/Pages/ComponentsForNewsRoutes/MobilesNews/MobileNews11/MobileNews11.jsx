import React, { Component } from "react";
import { Fade } from "react-reveal";
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import {
  mobileItem11__pic1,
  mobileItem11__pic2,
  mobileItem11__pic3,
} from "../../../../Components/NewsImage/NewsImage";

//React
//React
//Images
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
//Modules

class MobileNews11 extends Component {
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
          <h2>فرق نسخه ( ورژن ) و Type در استاندارد USB</h2>

          <p>
            استاندارد USB انواع و اقسام مختلفی داره و هر از چند گاهی خودش رو
            آپدیت میکنه . صبح پا میشید می بینید که مثلا نسخه USB 5.0 یا USB 5.1
            طراحی و معرفی شده و این سوال واستون پیش بیاد که بابا اینا یعنی چی ،
            USB 3.0 با USB Type A چه فرقی میکنه .
          </p>

          <h2>تفاوت ورژن و Type در استاندارد USB</h2>
          <p>
            ببینید وقتی صحبت از استاندارد USB میشه دو تا مسئله مهمه ، یکی ورژن
            های مختلف USB و یکی هم نوع USB یا همون تایپ Type . به زبون ساده ،
            ورژن USB اینجوریه : USB 2.0 یا USB 3.0 . یعنی کلمه USB به همراه یه
            عدد که تعیین کننده همون ورژن یا نسخه هست . ورژن USB نشون دهنده
            قابلیت های سخت افزاری و هم چنین سرعت و کلا ویژگی های اون نسل از USB
            هست . مثلا میگن USB نسخه ۳ یا همون USB 3.0 می تونه تا ۵ گیگابیت در
            ثانیه اطلاعات رو جابجا کنه یا مثلا می تونه تا ۹۰۰ میلی آمپر{" "}
            <a href="http://fa.wikipedia.org/wiki/%D8%AC%D8%B1%DB%8C%D8%A7%D9%86_%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%DB%8C%DA%A9%DB%8C">
              جریان{" "}
            </a>
            در ساعت تحویل دستگاه الکترونیکی بده . این اعداد و ارقام مخصوص ورژن ۳
            استاندارد USB هست و مثلا در ورژن ۲ اینجوری نیست . در USB 2.0 حدود
            ۱۰۰ تا ۵۰۰ میلی آمپر تحویل داده میشه .
          </p>
          <p>
            مثلا در شکل زیر می بینید که یه سری قابلیت ها به نسخه USB 3 اضافه شده
            یا ارتقا داده شده .
          </p>
          <img
            src={mobileItem11__pic1}
            alt=""
            data-tip="مقایسه USB 2 و USB 3"
          />
          <p>
            پس نسخه یا ورژن یعنی یک ارتقای سخت افزاری یا اضافه شدن یه ویژگی جدید
            به نسخه قبلی .
          </p>
          <p>
            اما Type مربوط به شکل ظاهری میشه مثلا وقتی میگیم USB Type A ، داریم
            از یه پورت نر یا ماده استاندارد USB صحبت می کنیم . مثلا USB Type A
            همین پورت یا کانکتور معروف USB هست که همه جا می بینید .
          </p>
          <img
            src={mobileItem11__pic2}
            alt=""
            data-tip="شکل ظاهری USB Type A"
          />
          <p>
            یا مثلا USB Type B کانکتور یا پورتی هست که به پشت پرینتر وصل میکنید
            .
          </p>
          <img
            src={mobileItem11__pic3}
            alt=""
            data-tip="کابل پرینتر ، USB Type B"
          />
          <p>
            حالا نکته مهم اینه که یه کانکتور USB می تونه Type A باشه اما نسخه ۳
            هم باشه یعنی این ها اختلالی تو کار همدیگه ایجاد نمی کنن . ورژن مربوط
            به قابلیت های داخلی هست و Type مربوط به شکل ظاهری .
          </p>
          <p>
            اما در برخی مواقع ، ایجاد قابلیتی جدید شاید منجر به تغییر شکل ظاهری
            یا Type میشه .
          </p>
          <p>امیدوارم که مفیدبوده باشه .</p>
          <ReactTooltip />
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default MobileNews11;
