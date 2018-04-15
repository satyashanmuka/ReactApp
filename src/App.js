import React, { Component } from 'react';
import './App.css';
import main from './assets/images/main_img.jpg';
import mobile_header from './assets/images/mobile_header.png';
import logo from './assets/images/logo.png';
import logo_mobile from './assets/images/logo_mobile.png';
import abt_title from './assets/images/abt_title.jpg';
import footer_logo from './assets/images/footer_logo.png';
import footer_fb from './assets/images/footer_fb.png';
import footer_linkedin from './assets/images/footer_linkedin.png';
import about_img from './assets/images/about_img.jpg';
import abt_fb from './assets/images/abt_fb.jpg';
import abt_twitter from './assets/images/abt_twitter.jpg';
import abt_linkedin from './assets/images/abt_linkedin.jpg';
import name_icon from './assets/images/name_icon.png';
import email_icon from './assets/images/email_icon.png';
import phone_icon from './assets/images/phone_icon.png';
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
        <section id="more" className="row">
          {/*<!-- about row starts here -->*/}
            <div className="row about_row">
 
              <h2><img className="title_left" src={abt_title} />About the founder<img className="title_right" src={abt_title} /></h2>
 
              <div className="col-md-3 col-sm-3 col-xs-3 col-12 abt_left">
                <img className="profile_img" src={about_img} alt="Strong Human Network" />
                <div className="abt_social_media">
                  <a href="https://www.facebook.com/sainathmaratha" target="_blank"><img src={abt_fb} alt="Facebook" /></a>
                  <a href="https://twitter.com/itsimplyme" target="_blank"><img src={abt_twitter} alt="Twitter" /></a>
                  <a href="https://www.linkedin.com/in/sainathm/" target="_blank"><img src={abt_linkedin} alt="Linkedin" /></a>
                </div>
              </div>
 
              <div className="col-md-9 col-sm-9 col-xs-9 col-12 abt_right">
                <p>Sainath was born and brought up in Vanasthalipuram, Hyderabad.<br/><br/>
                  He always believed that he is capable of doing things in his life which have great purpose to it. With a strong belief and conviction, he could convert every challenge into opportunities and succeeded everywhere. Very soon he realized the secret ingredient for his success was self-awareness or understanding one’s own self and loving it. One of his key forte was in management and it was also his dream to be an entrepreneur.  Rigorous hard work and pursuance earned him management degree at Indian Institute of Management Calcutta which he put into practice later by engaging with start-ups. Working with early stage start-ups helped him grow in multiple areas of business most importantly set-up and maintaining fully operational business from the scratch or almost nothing.  His true calling was in business leadership. <br/><br/>
                  At Paytm he was leading Telangana and Andhra Pradesh upcountry during demonetization, also handled large decentralized teams with an ease. Later he realized that his success as a leader was mainly because he could understand people behavior and manage them well. Though the new mantra of success has its roots in the old one: understanding of self. Self-awareness has great impact on individuals, businesses, relationships and the whole ecosystem where the world operates. With Business transformation happening worldwide and India at center of driving this global change people focused companies are need of the hour. Unfortunately, most of the brands are dividing people for market growth rather than unifying people under single brand. This led to genesis of StrongHumanNetwork (SHN).<br/><br/>
                  As a founder of SHN, Sainath aspires to transform the whole world by transforming one human at a time.<br/><br/>
                  <b>StrongHumanNetwork</b> aspires to unite the human race.
                </p>
              </div>
              </div>
          {/*<!-- about row ends here -->*/}
        </section>
        {/*<!-- form row starts here -->*/}
          <div class="row form_row">
            <div class="form_block">
              <h2>Join the revolution today</h2>
              <form name="rform" id="shn_form_register" method="post" role="form" class="dsk_form">
                <p>Your Name <span>*</span></p>
                <div class="row form_row1">
                  <div class="input-group">
                    <span class="form_icon name_icon"><img src={name_icon} alt="" /></span>
                    <span class="fn_blk"><input id="firstname" type="text" class="form-control firstname_input" name="firstname" placeholder="First Name"/></span>
                    <span class="ln_blk"><input id="lastname" type="text" class="form-control lastname_input" name="lastname" placeholder="Last Name"/></span>
                  </div>   
                </div>
                <div class="row form_row2">
                  <div class="col-md-6 form_left">
                    <p>Your Email <span>*</span></p>
                    <div class="input-group">
                      <span class="form_icon name_icon"><img src={email_icon} alt="" /></span>
                      <span class="email_blk"><input id="email" type="text" class="form-control email_input" name="email" placeholder="Email"/></span>
                    </div>
                  </div>
                  <div class="col-md-6 form_right">
                    <p>Your Phone <span>*</span></p>
                    <div class="input-group">
                      <span class="form_icon name_icon"><img src={phone_icon} alt="" /></span>
                      <span class="phone_blk"><input id="phone" type="text" class="form-control phone_input" name="phone"  placeholder="Phone"/></span>
                    </div>
                  </div>
                </div>
                <button type="submit" name="submit" class="btn btn-success" value="" >Keep me updated !</button>
              </form>

              <form name="rform" id="shn_form_register_mobile" method="post" role="form" class="mbl_form">
                <p>Your Name <span>*</span></p>
                <div class="row form_row1">
                  <div class="input-group">
                    <span class="form_icon name_icon"><img src={name_icon} alt="" /></span>
                    <span class="fulln_blk"><input id="firstname" type="text" class="form-control fullname_input" name="firstname" placeholder="Full Name"/></span>
                  </div>   
                </div>
                <div class="row form_row2">
                  <div class="col-md-6 form_left">
                    <p>Your Email <span>*</span></p>
                    <div class="input-group">
                      <span class="form_icon name_icon"><img src={email_icon} alt="" /></span>
                      <span class="email_blk"><input id="email" type="text" class="form-control email_input" name="email" placeholder="Email"/></span>
                    </div>
                  </div>
                
                  <div class="col-md-6 form_right">
                    <p>Your Phone <span>*</span></p>
                    <div class="input-group">
                      <span class="form_icon name_icon"><img src={phone_icon} alt="" /></span>
                      <span class="phone_blk"><input id="phone" type="text" class="form-control phone_input" name="phone"  placeholder="Phone"/></span>
                    </div>
                  </div>
                </div>
                <button type="submit" name="submit" class="btn btn-success" value="" >Keep me updated !</button>
              </form>
            </div>
          </div>
        {/*<!-- footer row starts here -->*/}
        <div className="row footer_row">
          <div className="row footer_top">
            <div className="col-md-6 col-sm-6 col-xs-6 col-6 ft_left"><img src={footer_logo} alt="Strong Human Network" /></div>
              <div className="col-md-6 col-sm-6 col-xs-6 col-6 ft_right"><span className="connect_text">Connect with us: </span><a className="footer_fb_icon" href="https://www.facebook.com/Stronghumannetwork/" target="_blank"><img src={footer_fb} alt="Facebook" /></a><a href="https://www.linkedin.com/company/13662438/" target="_blank"><img src={footer_linkedin} alt="Linkedin" /></a></div>
            </div>
            <div className="row copyrights">
            <div className="col-md-12">&copy; 2018. Shn.world</div>
          </div>
        </div>
      {/*<!-- footer row ends here -->*/}
      </div>
    );
  }
}

export default App;
