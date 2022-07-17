//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "./Creators.module.css";
//CSS
//Modules
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";

//Modules
class Creators extends Component {
  state = {
    creators: [
      {
        id: 1,
        name: "علی",
        lName: "مرادی تبار",
        picture: "",
        post: "صاحب امتیاز",
        post2: "تدوین",
        website: "-",
        customClassName: "e",
      },
      {
        id: 2,
        name: "علی",
        lName: "گودرزی",
        picture: "",
        post: "مدیر مسئول",
        post2: "   توسعه دهنده  Front-End ",
        website: "/a-goodarzi.ir",
        customClassName: "v",
      },
      {
        id: 3,
        name: "یونس",
        lName: "عسگری",
        picture: "",
        post: "سر دبیر",
        post2: "",
        website: "-",
        customClassName: "e",
      },
      {
        id: 4,
        name: "مهدی",
        lName: "بیات",
        picture: "",
        post: "توسعه دهنده Front-End",
        post2: "",
        website: "-",
        customClassName: "v",
      },
      {
        id: 5,
        name: "علیرضا",
        lName: "حسینی",
        picture: "",
        post: "طراح گرافیک",
        post2: "تدوین",
        website: "-",
        customClassName: "e",
      },
      {
        id: 6,
        name: "امیررضا",
        lName: "خلجی",
        picture: "",
        post: "طراح گرافیک",
        post2: "",
        website: "-",
        customClassName: "v",
      },
      // {
      //   id: 7,
      //   name: "نازنین",
      //   lName: "نراقی",
      //   picture: "",
      //   post: "طراح گرافیک",
      //   post2: "",
      //   website: "-",
      //   customClassName: "e",
      // },
      {
        id: 8,
        name: "حسین",
        lName: "سیاهوشی",
        picture: "",
        post: "نویسنده",
        post2: "",
        website: "-",
        customClassName: "e",
      },
      {
        id: 9,
        name: "علی اصغر",
        lName: "صفری",
        picture: "",
        post: "نویسنده",
        post2: "",
        website: "-",
        customClassName: "v",
      },
    ],
  };
  componentDidMount() {
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 100 });
    }
  }
  render() {
    return (
      <div className={styles.creatorsContainer}>
        {this.state.creators.map((item) => {
          return (
            <Fade left key={item.id}>
              <div
                className={`${styles.creatorPearson} ${
                  item.customClassName === "e" ? styles.e : styles.v
                }`}
              >
                <img src="" alt="عکس" />
                <div className={styles.contents}>
                  <p>
                    {item.name} {item.lName}
                  </p>
                  <p>مسئولیت اول : {item.post}</p>
                  <p>مسئولیت دوم : {!!item.post2 ? item.post2 : "ندارد"}</p>

                  {item.website !== "-" ? (
                    <Link to={item.website}>
                      <span>وبسایت شخصی : </span>
                      <span>a-goodarzi.ir</span>
                    </Link>
                  ) : null}
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default Creators;
