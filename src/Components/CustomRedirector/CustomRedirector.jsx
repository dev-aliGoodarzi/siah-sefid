//React
import React, { Component } from "react";
//React
//Images
//Images
//CSS
import "./CustomRedirector.css";
//CSS
//Modules
//Modules
class CustomRedirector extends Component {
  componentDidMount() {
    setTimeout(() => {
      window.location.href = this.props.selecedOutsideRoute;
    }, 1000);
    if (window.innerWidth < 500) {
      window.scrollTo({ top: 127 });
    } else {
      window.scrollTo({ top: 50 });
    }
  }
  render() {
    return (
      <div className="custom-redirector">
        <h1>در حال انتقال به صفحه ی مورد نظر</h1>
        <div class="sea">
          <div class="circle-wrapper">
            <div class="bubble"></div>
            <div class="submarine-wrapper">
              <div class="submarine-body">
                <div class="window"></div>
                <div class="engine"></div>
                <div class="light"></div>
              </div>
              <div class="helix"></div>
              <div class="hat">
                <div class="leds-wrapper">
                  <div class="periscope"></div>
                  <div class="leds"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2>لطفا صبور باشید</h2>
      </div>
    );
  }
}

export default CustomRedirector;
