//React
import React, { Component } from "react";
//React
//Images
import Logo from "../../images/LOGO.png";
import AzadUni from "../../images/AzadUniLogo.png";
//Images
//CSS
import styles from "./TopHeader.module.css";
//CSS
//Modules
//Modules

class TopHeader extends Component {
  constructor() {
    super();
    this.closeRef = React.createRef();
    this.navBarRef = React.createRef();
  }
  state = {};
  render() {
    return (
      <nav className={styles.navBar} ref={this.navBarRef}>
        <div className={styles.contents}>
          <img className={styles.logoImg} src={Logo} alt="LOGO" />
          <div className={styles.magzineName}>
            نشریه&nbsp;آموزشی سیاه&nbsp;و&nbsp;سفید
          </div>
          <img className={styles.uniLogo} src={AzadUni} alt="LOGO" />
        </div>
      </nav>
    );
  }
}

export default TopHeader;
