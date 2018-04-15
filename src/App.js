import React, { Component } from 'react';
import './App.css';
import main from './assets/images/main_img.jpg';
import mobile_header from './assets/images/mobile_header.png';
import logo from './assets/images/logo.png';
import logo_mobile from './assets/images/logo_mobile.png';
import abt_title from './assets/images/abt_title.jpg';
import * as ReactBootstrap from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/*<!-- logo row starts here -->*/}
          <div className="row logo_row">
            <img className="logo_desktop" src={logo} alt="Strong Human Network" />
            <img className="logo_mobile" src={logo_mobile} alt="Strong Human Network" />
          </div>
        {/*<!-- logo row ends here -->*/}
        {/*<!-- header row starts here -->*/}
          <div className="row header_row">
            <div className="col-md-6 col-sm-6 col-xs-6 col-12 hd_left">

              <h1><strong>Strong<span>Human</span>Network</strong></h1>
                <p>A StrongHuman is a confident, self-aware individual with a fair world exposure and a direction in life, who is willing to work on oneself with a set of tools to achieve one's excellence potential!</p>
                <a className="btn btn-hd" href="1990s_kids.html" target="_blank">Know More</a>
              {/*<!-- <div className="scroll_txt">
              <img src="assets/images/scroll_img.png" alt="" />
              </div> -->*/}
            </div>
    
            <div className="col-md-6 col-sm-6 col-xs-6 col-12 hd_right">
              <img className="desktop_hd" src={main} alt="Strong Human Network" />
              <img className="mobile_hd" src={mobile_header} alt="Strong Human Network" />
            </div>
          </div>
        {/*<!-- header row ends here -->*/}
        <div align="center">
          <h2><img className="title_left" src={abt_title} /> Watch Live <img className="title_left" src={abt_title} /></h2>
          <iframe width="660" height="415" src="https://www.youtube.com/embed/ojvYcumBWzw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}

export default App;
