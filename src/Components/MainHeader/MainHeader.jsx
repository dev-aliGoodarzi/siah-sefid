//React
import React, { Component } from "react";
import { Link } from "react-router-dom";
//React
//Images
import { FiMoon } from "react-icons/fi";
//Images
//CSS
import styles from "./MainHeader.module.css";
//CSS
//Modules
import { GiHamburgerMenu } from "react-icons/gi";
//Modules
class MainHeader extends Component {
  constructor() {
    super();
    this.nightModeRef = React.createRef();
    this.hamburgerMenuContentsRef = React.createRef();
  }
  state = {
    night: false,
    currLocation: "/",
    colorForHeaderText: "#000",
    selectedColorForTop:
      "linear-gradient(333deg, rgba(43,1,121,1) 0% 0%, rgba(121,56,242,1) 100% 100%)",
  };
  makeHeaderHidden = () => {
    this.hamburgerMenuContentsRef.current.style.visibility = "hidden";
    this.hamburgerMenuContentsRef.current.style.display = "none";
    this.hamburgerMenuContentsRef.current.style.opacity = "0";
  };

  render() {
    return (
      <div
        className={`${styles.MainHeader} ${
          (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? styles.fixx
            : null
        }`}
        style={{
          position: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "fixed"
            : "relative",

          top: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "0"
            : "0",

          zIndex: 19,
          backgroundColor: (
            (window.scrollY /
              (window.document.body.scrollHeight - window.innerHeight)) *
              100 >
            3
              ? true
              : false
          )
            ? "#757575d8"
            : "transparent",
        }}
      >
        <div className={styles.left}>
          <div className={styles.linksContainer}>
            <Link
              to="/"
              style={{
                background:
                  this.state.currLocation === "/"
                    ? this.state.selectedColorForTop
                    : "#fff",
                color:
                  this.state.currLocation === "/"
                    ? "#fff"
                    : this.state.colorForHeaderText,
              }}
              onClick={() => {
                this.setState({
                  ...this.state,
                  currLocation: "/",
                });
              }}
            >
              خانه
            </Link>
            <Link
              to="/computer-news"
              style={{
                background:
                  this.state.currLocation === "computer-news"
                    ? this.state.selectedColorForTop
                    : "#fff",
                color:
                  this.state.currLocation === "computer-news"
                    ? "#fff"
                    : this.state.colorForHeaderText,
              }}
              onClick={() => {
                this.setState({
                  ...this.state,
                  currLocation: "computer-news",
                });
              }}
            >
              کامپیوتر
            </Link>
            {/* <Link to="/newest-content">سخت افزار </Link> */}
            <Link
              to="/mobile-news"
              style={{
                background:
                  this.state.currLocation === "mobile-news"
                    ? this.state.selectedColorForTop
                    : "#fff",
                color:
                  this.state.currLocation === "mobile-news"
                    ? "#fff"
                    : this.state.colorForHeaderText,
              }}
              onClick={() => {
                this.setState({
                  ...this.state,
                  currLocation: "mobile-news",
                });
              }}
            >
              موبایل
            </Link>
            <Link
              to="/game-news"
              style={{
                background:
                  this.state.currLocation === "game-news"
                    ? this.state.selectedColorForTop
                    : "#fff",
                color:
                  this.state.currLocation === "game-news"
                    ? "#fff"
                    : this.state.colorForHeaderText,
              }}
              onClick={() => {
                this.setState({
                  ...this.state,
                  currLocation: "game-news",
                });
              }}
            >
              بازی
            </Link>
            <Link
              to="/prints"
              style={{
                background:
                  this.state.currLocation === "prints"
                    ? this.state.selectedColorForTop
                    : "#fff",
                color:
                  this.state.currLocation === "prints"
                    ? "#fff"
                    : this.state.colorForHeaderText,
              }}
              onClick={() => {
                this.setState({
                  ...this.state,
                  currLocation: "prints",
                });
              }}
            >
              چاپ ها{" "}
            </Link>
          </div>
          <div
            className={styles.hamburgerContainer}
            style={{ display: window.innerWidth > 800 ? "none" : "block" }}
            onClick={() => {
              this.hamburgerMenuContentsRef.current.style.visibility =
                "visible";
              this.hamburgerMenuContentsRef.current.style.display = "flex";
              this.hamburgerMenuContentsRef.current.style.opacity = "1";
            }}
          >
            <GiHamburgerMenu />
          </div>
          <div
            className={styles.hamburgerMenuContents}
            ref={this.hamburgerMenuContentsRef}
          >
            <div className={styles.close}></div>
            <div
              className={styles.absoluteOpacity}
              onClick={this.makeHeaderHidden}
            >
              {" "}
            </div>
            <Link onClick={this.makeHeaderHidden} to="/">
              خانه
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/computer-news">
              کامپیوتر
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/newest-content">
              سخت افزار{" "}
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/mobile-news">
              موبایل
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/game-news">
              بازی
            </Link>
            <Link onClick={this.makeHeaderHidden} to="/prints">
              چاپ ها{" "}
            </Link>
          </div>
        </div>
        <div
          className={styles.right}
          ref={this.nightModeRef}
          onClick={() => {
            this.nightModeRef.current.style.color = "#fff";
            document.body.classList.toggle("night");
            this.setState({
              night: !this.state.night,
            });
          }}
        >
          <FiMoon />
        </div>
      </div>
    );
  }
}

export default MainHeader;
