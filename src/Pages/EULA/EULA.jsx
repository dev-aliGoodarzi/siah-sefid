//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "./EULA.module.css";
//CSS
//Modules
//Modules

class EULA extends Component {
  state = {};
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 50 });
    }
  }
  render() {
    return (
      <div className={styles.eulaContainer}>
        <h1>با استفاده از این وبسایت ، موارد زیر را قبول می کنید</h1>
        <p>
          مطالب منتشر شده در این وبسایت جنبه ی آموزشی دارد ،{" "}
          <mark>
            لذا عواقب استفاده ی نادرست از مطالب بر عهده ی خودشخص استفاده کننده
            است .
          </mark>
        </p>
        <p>
          خواننده حق انتشار پست های این سایت را بدون مجوز از مدیران وبسایت ندارد
          ، در صورت مشاهده پیگرد قانونی دارد .
        </p>
      </div>
    );
  }
}

export default EULA;
