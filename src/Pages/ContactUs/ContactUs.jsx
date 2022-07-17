//React
import React, { Component } from "react";
import { Link } from "react-router-dom";
//React
//Images
//Images
//CSS
import styles from "./ContactUs.module.css";
//CSS
//Modules
import { BsArrow90DegDown } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Fade } from "react-reveal";
//Modules

class ContactUs extends Component {
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
      <Fade left>
        <div className={styles.contactUsContainer}>
          <p>
            <BsArrow90DegDown />
            کاربران محترم ، در صورت داشتن انتقاد ، پیشنهاد از طریق راه های
            ارتباطی زیر با ما تماس حاصل فرمایید .
          </p>
          <Link to="/whats-app-master" className={styles.whatsApp}>
            <span>صاحب امتیاز : علی مرادی تبار </span>
            <span>
              <AiOutlineWhatsApp />
              +98 99 11 66 3597
            </span>
          </Link>
          <Link to="/whats-app-master-2" className={styles.whatsApp}>
            <span>مدیر مسئول : علی گودرزی</span>
            <span>
              <AiOutlineWhatsApp />
              +98 922 8135 815
            </span>
          </Link>
          <Link to="/whats-app-master-3" className={styles.whatsApp}>
            <span>سر دبیر : یونس عسگری</span>
            <span>
              <AiOutlineWhatsApp />
              +98 919 02 004 71
            </span>
          </Link>
        </div>
      </Fade>
    );
  }
}

export default ContactUs;
