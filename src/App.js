import React, { Component } from 'react';
import './App.css';
import main from './assets/images/main_img.jpg';
import mobile_header from './assets/images/mobile_header.png';
import logo from './assets/images/logo.png';
import logo_mobile from './assets/images/logo_mobile.png';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/*<!-- logo row starts here -->*/}
          <div class="row logo_row">
            <img class="logo_desktop" src={logo} alt="Strong Human Network" />
            <img class="logo_mobile" src={logo_mobile} alt="Strong Human Network" />
          </div>
        {/*<!-- logo row ends here -->*/}
        {/*<!-- header row starts here -->*/}
          <div class="row header_row">
            <div class="col-md-6 col-sm-6 col-xs-6 col-12 hd_left"> 
              <h1><strong>Strong<span>Human</span>Network</strong></h1>
                <p>A StrongHuman is a confident, self-aware individual with a fair world exposure and a direction in life, who is willing to work on oneself with a set of tools to achieve one's excellence potential!</p>
                <a class="btn btn-hd" href="1990s_kids.html" target="_blank">Know More</a>
              {/*<!-- <div class="scroll_txt">
              <img src="assets/images/scroll_img.png" alt="" />
              </div> -->*/}
            </div>
    
            <div class="col-md-6 col-sm-6 col-xs-6 col-12 hd_right">
              <img class="desktop_hd" src={main} alt="Strong Human Network" />
              <img class="mobile_hd" src={mobile_header} alt="Strong Human Network" />
            </div>
          </div>
        {/*<!-- header row ends here -->*/} 
      </div>
    );
  }
}

export default App;
