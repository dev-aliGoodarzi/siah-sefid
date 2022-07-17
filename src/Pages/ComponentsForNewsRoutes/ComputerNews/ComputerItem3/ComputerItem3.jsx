import React, { Component } from "react";
//React
//React
//Images
import {
  computerItem3__pic1,
  computerItem3__pic2,
} from "../../../../Components/NewsImage/NewsImage";
//Images
//CSS
import styles from "../../MASTER__STYLE.module.css";
//CSS
//Modules
import ReactTooltip from "react-tooltip";
import Comments from "../../../../Components/Comments/Comments";
import { Fade } from "react-reveal";
//Modules

class ComputerItem3 extends Component {
  state = {
    commentsArray: [
      {
        id: "c3-1",
        name: "فرزانه",
        comment: "  ممنون از اطلاعات مفیدتون ",
      },
      {
        id: "c3-2",
        name: "فریده",
        comment: "خیلی خوب و روان توضیح دادین ",
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
      <Fade bottom>
        <div className={styles.newsContent}>
          <ReactTooltip />
          <h2>قفل کنسینگتون چیست ؟ قفل Kensington در لپ تاپ</h2>
          <p>
            قفل کنسینگتون رو بیشتر در مشخصات فنی لپ تاپ ها می تونید ببینید . اما
            این قفل چیه و چقدر می تونه امنیت لپ تاپ رو تامین کنه .
          </p>
          <h2>قفل کنسینگتون چیه ؟</h2>
          <p>
            قفل کنسینگتون یا به انگلیسی Kensington Lock یه قفل رمز دار هست که
            برای جلوگیری از سرقت لوازم الکترونیکی استفاده میشه . حتما کیف های
            رمز دار رو دیدین ، یه رمز 3 رقمی دارن که اگر اون ارقام رو درست کنار
            هم بچینیم ، کیف باز میشه .&nbsp;قفل کنسینگتون هم یه چیز تو همین مایه
            هاس .
          </p>
          <img
            src={computerItem3__pic1}
            data-tip="قفل کنسینگتون"
            alt="kensington Lock Img"
          />
          <p>
            یه اسلات روی لپ تاپ ، تبلت ، هارد اکسترنال ، کنسول های بازی ،
            مانیتور کامپیوتر و … داره و یه کلید رمزدار هم بهش وصل میشه
            .&nbsp;قفل کنسینگتون یه جورایی شبیه به قفل دوچرخه اس . یه کابل محکم
            داره که به پایه میز یا یه چیز محکم وصل میشه .
          </p>
          <p>
            کنار پورت&nbsp;قفل کنسینگتون یه علامت از قفل کشیده شده و حرف K بزرگ
            نوشته شده . خیلیا به اشتباه میگن قفل کینگ استون اما کینگ استون اسم
            یه برنده که حافظه RAM کامپیوتر تولید می کنه . املاشون هم با هم فرق
            داره . Kensington و Kingston .
          </p>
          <img
            src={computerItem3__pic2}
            data-tip="پورت کنسینگتون در لپ تاپ"
            alt=""
          />
          <p>
            به قفل کنسینگتون ، K-Slot هم میگن . ضمنا اونجور که من شنیدم ، تلفظ
            صحیح Kensington به صورت کنزینگتون هست .
          </p>
          <h2>امنیت&nbsp;قفل کنسینگتون</h2>
          <p>
            قفل Kensington یه کابل فلزی داره که خیلی راحت با سیم چین بریده میشه
            البته نه این سیم چین درپیتا ، سیم چین قوی می خواد اما منظورم اینه که
            اینجوری نیست که&nbsp;قفل کنسینگتون &nbsp;رو بزنید و دیگه خیال تون
            راحت باشه . از قفل&nbsp;Kensington برای جلوگیری از سرقت لحظه ای
            استفاده میشه . یعنی دزده نتونه لپ تاپ رو تو یه لحظه از روی میز
            برداره و در بره . معمولا توی کتابخونه ها ، کافی شاپ ها ، مراکز
            تفریحی از قفل Kensington استفاده میشه .
          </p>
          <h2>قیمت قفل کنسینگتون</h2>
          <p>
            قیمت&nbsp;قفل Kensington اریجینال حدود 35 دلاره که اگه ضرب در دلار
            25000 تومنی بکنیم چیزی حدود 900 هزار تومن قیمت خامش میشه . حالا باید
            سود وارد کننده ، دلال و فروشنده رو هم بکشید روش . الان دلار انقدر
            گرون شده ، لپ تاپ رو ازمون بدزدن به صرفه تر در میاد تا بریم
            یه&nbsp;قفل کنسینگتون بخریم .&nbsp;البته بعضی مغازه ها یا سایت ها
            هستن که قفل&nbsp;Kensington رو با قیمت حتی 400,000 تومن می فروشن .
            البته قطعا اصل نیستن .
          </p>
          <Comments commentsArray={this.state.commentsArray} />
        </div>
      </Fade>
    );
  }
}

export default ComputerItem3;
