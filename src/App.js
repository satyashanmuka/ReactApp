import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import main from './assets/images/main_img.jpg';

class App extends Component {
  render() {
    return (

<div className="container">


      <div className="row about_row">
        <img className="desktop_hd" src={main}></img>
        <div className="col-md-9 col-sm-9 col-xs-9 col-12 abt_right">
          <p>Sainath was born and brought up in Vanasthalipuram, Hyderabad.<br/><br/>
              He always believed that he is capable of doing things in his life which have great purpose to it. With a strong belief and conviction, he could convert every challenge into opportunities and succeeded everywhere. Very soon he realized the secret ingredient for his success was self-awareness or understanding one’s own self and loving it. One of his key forte was in management and it was also his dream to be an entrepreneur.  Rigorous hard work and pursuance earned him management degree at Indian Institute of Management Calcutta which he put into practice later by engaging with start-ups. Working with early stage start-ups helped him grow in multiple areas of business most importantly set-up and maintaining fully operational business from the scratch or almost nothing.  His true calling was in business leadership. <br/><br/>
              At Paytm he was leading Telangana and Andhra Pradesh upcountry during demonetization, also handled large decentralized teams with an ease. Later he realized that his success as a leader was mainly because he could understand people behavior and manage them well. Though the new mantra of success has its roots in the old one: understanding of self. Self-awareness has great impact on individuals, businesses, relationships and the whole ecosystem where the world operates. With Business transformation happening worldwide and India at center of driving this global change people focused companies are need of the hour. Unfortunately, most of the brands are dividing people for market growth rather than unifying people under single brand. This led to genesis of StrongHumanNetwork (SHN).<br/><br/>
              As a founder of SHN, Sainath aspires to transform the whole world by transforming one human at a time.<br/><br/>
              <b>StrongHumanNetwork</b> aspires to unite the human race.
          </p>

        </div>
 
      </div>


</div>
    );
  }
}

export default App;
