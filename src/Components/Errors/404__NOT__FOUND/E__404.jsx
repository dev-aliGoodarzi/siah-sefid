//React
import React, { Component } from "react";
import { Fade, LightSpeed } from "react-reveal";
import { Link } from "react-router-dom";
//React
//Images
import { E_404__image } from "../../NewsImage/NewsImage";
//Images
//CSS
import styles from "./E__404.module.css";
//CSS
//Modules
//Modules

class E__404 extends Component {
  state = {};
  render() {
    return (
      <Fade bottom>
        <LightSpeed>
          <div className={styles.notFound}>
            <p>صفحه ی درخواستی شما را پیدا نکردیم</p>
            <img src={E_404__image} alt="" />
            <div className={styles.itemsContainer}>
              <button onClick={() => window.history.back()}>بازگشت</button>
              <Link to="/">خانه</Link>
            </div>
          </div>
        </LightSpeed>
      </Fade>
    );
  }
}

export default E__404;
