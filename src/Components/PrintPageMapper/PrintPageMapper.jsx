//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "./PrintPageMapper.module.css";
//CSS
//Modules
import { Link } from "react-router-dom";
//Modules
class PrintPageMapper extends Component {
  state = {};
  render() {
    return (
      <div className={styles.printPageMapper}>
        {this.props.printItems.length === 0 ? (
          <p>
            در این چاپ این مورد افزوده نشده ، در چاپ های بعدی در خدمت شما هستیم
          </p>
        ) : (
          this.props.printItems.map((item) => {
            return (
              <Link key={item.routeToNavigate} to={"/" + item.routeToNavigate}>
                <div className={styles.left}>{item.newsTextContent}</div>
                <div className={styles.right}>
                  <img src={item.newsImage} alt={item.newsTextContent} />
                </div>
              </Link>
            );
          })
        )}
      </div>
    );
  }
}

export default PrintPageMapper;
