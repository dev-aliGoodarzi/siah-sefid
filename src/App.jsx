//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import styles from "./App.module.css";
//CSS
//Modules
import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";
//Modules
// Components For Routes
// *************************** MASTERS ROUTES
import Home from "./Pages/Home/Home";
import MobilePage from "./Pages/MobilePage/MobilePage";
import GamePage from "./Pages/GamePage/GamePage";
import E__404 from "./Components/Errors/404__NOT__FOUND/E__404";
import Creators from "./Pages/Creators/Creators";
import EULA from "./Pages/EULA/EULA";
import Terms from "./Pages/Terms/Terms";
import SendArticles from "./Pages/SendArticles/SendArticles";
import ContactUs from "./Pages/ContactUs/ContactUs";
import CustomRedirector from "./Components/CustomRedirector/CustomRedirector";
// *************************** MASTERS ROUTES
/* ************_ Computer Items _************ */
import ComputerPage from "./Pages/ComputerPage/ComputerPage";
/* ************_ Computer Items _************ */
import ComputerItem1Page from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem1/computerItem1";
import ComputerItem2 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem2/ComputerItem2";
import ComputerItem3 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem3/ComputerItem3";
import ComputerItem4 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem4/ComputerItem4";
import ComputerItem5 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem5/ComputerItem5";
import ComputerItem6 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem6/ComputerItem6";
import ComputerItem7 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem7/ComputerItem7";
import ComputerItem8 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem8/ComputerItem8";
import ComputerItem9 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem9/ComputerItem9";
import ComputerItem10 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem10/ComputerItem10";
import ComputerItem11 from "./Pages/ComponentsForNewsRoutes/ComputerNews/ComputerItem11/ComputerItem11";
/* ************_ Mobile Items _************ */
import MobileNews1 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews1/MobileNews1";
import MobileNews2 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews2/MobileNews2";
import MobileNews3 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews3/MobileNews3";
import MobileNews4 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews4/MobileNews4";
import MobileNews5 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews5/MobileNews5";
import MobileNews6 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews6/MobileNews6";
import MobileNews7 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews7/MobileNews7";
import MobileNews8 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews8/MobileNews8";
/* ************_ Mobile Items _************ */
/* ************_ Game Items _************ */
import GameItem1 from "./Pages/ComponentsForNewsRoutes/GameNews/GameItem1/GameItem1";
import GameItem2 from "./Pages/ComponentsForNewsRoutes/GameNews/GameItem2/GameItem2";
import GameItem3 from "./Pages/ComponentsForNewsRoutes/GameNews/GameItem3/GameItem3";
import GameItem4 from "./Pages/ComponentsForNewsRoutes/GameNews/GameItem4/GameItem4";
import GameItem5 from "./Pages/ComponentsForNewsRoutes/GameNews/GameItem5/GameItem5";
/* ************_ Game Items _************ */
/* ************_ Hardware Items _************ */

/* ************_ Hardware Items _************ */
/* ************_ Print Items _************ */
import Prints from "./Components/Prints/Prints";
import PrintOne from "./Pages/PrintOne/PrintOne";
import PrintsTwo from "./Pages/PrintsTwo/PrintsTwo";
import PrintThree from "./Pages/PrintThree/PrintThree";
import PrintFour from "./Pages/PrintFour/PrintFour";
import PrintFive from "./Pages/PrintFive/PrintFive";
import PrintSix from "./Pages/PrintSix/PrintSix";
/* ************_ Print Items _************ */

/* ************_ Components _************ */
import MainHeader from "./Components/MainHeader/MainHeader";
import TopHeader from "./Components/TopHeader/TopHeader";
import Footer from "./Components/Footer/Footer";
import MobileNews9 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews9/MobileNews9";
import MobileNews10 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews10/MobileNews10";
import MobileNews11 from "./Pages/ComponentsForNewsRoutes/MobilesNews/MobileNews11/MobileNews11";
/* ************_ Components _************ */

class App extends Component {
  state = {
    scrollYPage: 0,
    helpForRedirect: [
      {
        id: "my__Rezume",
        addres: "https://a-goodarzi.ir",
        path: "/a-goodarzi.ir",
      },
      {
        id: "whatsapp__Master",
        addres: "https://wa.me/989911663597",
        path: "/whats-app-master",
      },
      {
        id: "whatsapp__Master-2",
        addres: "https://wa.me/989228135815",
        path: "/whats-app-master-2",
      },
      {
        id: "whatsapp__Master",
        addres: "https://wa.me/989190200471",
        path: "/whats-app-master-3",
      },
    ],
    computerItemsRedirect: [
      {
        path: "/computer-item-1",
        element: <ComputerItem1Page />,
      },
      {
        path: "/computer-item-2",
        element: <ComputerItem2 />,
      },
      {
        path: "/computer-item-3",
        element: <ComputerItem3 />,
      },
      {
        path: "/computer-item-4",
        element: <ComputerItem4 />,
      },
      {
        path: "/computer-item-5",
        element: <ComputerItem5 />,
      },
      {
        path: "/computer-item-6",
        element: <ComputerItem6 />,
      },
      {
        path: "/computer-item-7",
        element: <ComputerItem7 />,
      },
      {
        path: "/computer-item-8",
        element: <ComputerItem8 />,
      },
      {
        path: "/computer-item-9",
        element: <ComputerItem9 />,
      },
      {
        path: "/computer-item-10",
        element: <ComputerItem10 />,
      },
      {
        path: "/computer-item-11",
        element: <ComputerItem11 />,
      },
    ],
    mobileItemsRedirect: [
      {
        path: "/mobile-item-1",
        element: <MobileNews1 />,
      },
      {
        path: "/mobile-item-2",
        element: <MobileNews2 />,
      },
      {
        path: "/mobile-item-3",
        element: <MobileNews3 />,
      },
      {
        path: "/mobile-item-4",
        element: <MobileNews4 />,
      },
      {
        path: "/mobile-item-5",
        element: <MobileNews5 />,
      },
      {
        path: "/mobile-item-6",
        element: <MobileNews6 />,
      },
      {
        path: "/mobile-item-7",
        element: <MobileNews7 />,
      },
      {
        path: "/mobile-item-8",
        element: <MobileNews8 />,
      },
      {
        path: "/mobile-item-9",
        element: <MobileNews9 />,
      },
      {
        path: "/mobile-item-10",
        element: <MobileNews10 />,
      },
      {
        path: "/mobile-item-11",
        element: <MobileNews11 />,
      },
    ],
    gameItemsRedirect: [
      {
        path: "/game-item-1",
        element: <GameItem1 />,
      },
      {
        path: "/game-item-2",
        element: <GameItem2 />,
      },
      {
        path: "/game-item-3",
        element: <GameItem3 />,
      },
      {
        path: "/game-item-4",
        element: <GameItem4 />,
      },
      {
        path: "/game-item-5",
        element: <GameItem5 />,
      },
    ],
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const maxHeight = window.document.body.scrollHeight - window.innerHeight;
      let percentage = (window.scrollY / maxHeight) * 100;
      this.setState({ scrollYPage: percentage });
    });
    Swal.fire({
      icon: "info",
      title: "به نشریه خبری سیاه و سفید خوش آمدید",
      text: "امیدوایم لذت ببرید",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    window.scrollTo({ top: 0 });
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <div className={styles.scrollIndicatiorContainer}>
          <div
            className={styles.inner}
            style={{ width: `${this.state.scrollYPage}%` }}
          ></div>
        </div>
        <TopHeader />
        <MainHeader />
        <Routes>
          {/* MAIN ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/eula" element={<EULA />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/send-articles" element={<SendArticles />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="prints" element={<Prints />}></Route>
          <Route path="/prints/printOne" element={<PrintOne />} />
          <Route path="/prints/printTwo" element={<PrintsTwo />} />
          <Route path="/prints/printThree" element={<PrintThree />} />
          <Route path="/prints/printFour" element={<PrintFour />} />
          <Route path="/prints/printFive" element={<PrintFive />} />
          <Route path="/prints/printSix" element={<PrintSix />} />
          {this.state.helpForRedirect.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={<CustomRedirector selecedOutsideRoute={item.addres} />}
              />
            );
          })}

          {/* ********************************************************** */}
          {/* *********PAGES AND CUSTOM ROUTES******** */}
          {/* ***************************MASTER******************  */}
          <Route path="/computer-news" element={<ComputerPage />} />
          {/* ***************************MASTER******************  */}
          {this.state.computerItemsRedirect.map((item) => {
            return (
              <Route path={item.path} key={item.path} element={item.element} />
            );
          })}
          {/* ********************************************************** */}
          {/* *********PAGES FOR CUSTOM MOBILE NEWS******** */}
          {/* ***************************MASTER******************  */}
          <Route path="/mobile-news" element={<MobilePage />} />
          {/* ***************************MASTER******************  */}
          {this.state.mobileItemsRedirect.map((item) => {
            return (
              <Route path={item.path} key={item.path} element={item.element} />
            );
          })}
          {/* ********************************************************** */}
          {/* *********PAGES FOR CUSTOM GAME NEWS******** */}
          {/* ***************************MASTER******************  */}
          <Route path="/game-news" element={<GamePage />} />
          {/* ***************************MASTER******************  */}
          {this.state.gameItemsRedirect.map((item) => {
            return (
              <Route path={item.path} key={item.path} element={item.element} />
            );
          })}
          {/* ********************************************************** */}
          {/* *********PAGES FOR ERRORS******** */}
          <Route
            path="*"
            exact
            element={
              <div style={{ overflow: "hidden" }}>
                <E__404 />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
