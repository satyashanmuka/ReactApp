import React, { Component } from 'react';
import TextView from './Util/TextView.js';
import update from 'immutability-helper';
import { run, ruleRunner } from './Validation/ruleRunner.js'
import { required, emailFormat, phoneFormat, minLength } from './Validation/rules.js';
import $ from 'jquery';
import './App.css';
import name_icon from './assets/images/name_icon.png';
import email_icon from './assets/images/email_icon.png';
import phone_icon from './assets/images/phone_icon.png';
import * as ReactBootstrap from 'react-bootstrap';

const fieldValidations = [
  ruleRunner("firstName", "Name", required),
  ruleRunner("emailAddress", "Email Address", required, emailFormat),
  ruleRunner("phoneNumber", "Ph.No", required, phoneFormat, minLength(10)),

/*   ruleRunner("password1", "Password", required, minLength(10)),
   ruleRunner("password2", "Password Confirmation", mustMatch("password1", "Password"))*/
];

class App extends Component {

  constructor(props) {
    super(props);
    this.handleFieldChanged = this.handleFieldChanged.bind(this);
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
    this.errorFor = this.errorFor.bind(this);
    this.state = {
      showErrors: false,
      validationErrors: { },
    }
  }

  componentWillMount() {
    // Run validations on initial state
    this.setState({validationErrors: run(this.state, fieldValidations)});
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  handleFieldChanged(field) {
    return (e) => {
      // update() is provided by React Immutability Helpers
      // https://facebook.github.io/react/docs/update.html
      let newState = update(this.state, {
        [field]: {$set: e.target.value}
      });
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  handleSubmitClicked() {
    this.setState({showErrors: true});
    if($.isEmptyObject(this.state.validationErrors) === false) return null;
    return this.props.onCreateAccount(this.state);
  }
    handleSubmit(evt) {
            evt.preventDefault();
            return;

    }

  render() {
    return (
      <div className="CreateAccount" >
{/*
        <h2>Create a New Account</h2>
*/}
          <form name="rform" id="shn_form_register" method="post" role="form" className="dsk_form" onSubmit={this.handleSubmit}>
          <p>Your Name <span>*</span></p>
          <div className="row form_row1">

              <div className="input-group">
                  <span className="form_icon name_icon"><img src={name_icon} alt=""/></span>
                  <span className="fn_blk"><TextView placeholder="Full Name" showError={this.state.showErrors}
                                                     text={this.props.firstName} onFieldChanged={this.handleFieldChanged("firstName")}
                                                     errorText={this.errorFor("firstName")} class="form-control firstname_input" /> </span>
              </div>
          </div>

          <div className="row form_row2">
              <div className="col-md-6 form_left">
                  <p>Your Email <span>*</span></p>
                  <div className="input-group">
                      <span className="form_icon name_icon"><img src={email_icon} alt=""/></span>
                      <span className="email_blk"><TextView placeholder="Email Address" showError={this.state.showErrors}
                                                            text={this.props.emailAddress} onFieldChanged={this.handleFieldChanged("emailAddress")}
                                                            errorText={this.errorFor("emailAddress")}  /> </span>
                  </div>
              </div>

              <div className="col-md-6 form_right">
                  <p>Your Phone <span>*</span></p>
                  <div className="input-group">
                      <span className="form_icon name_icon"><img src={phone_icon} alt=""/></span>
                      <span className="phone_blk"><TextView placeholder="Phone Number" showError={this.state.showErrors}
                                                            text={this.props.phoneNumber} onFieldChanged={this.handleFieldChanged("phoneNumber")}
                                                            errorText={this.errorFor("phoneNumber")} /> </span>
                  </div>
              </div>

          </div>


                  <button type="submit" name="submit" className="btn btn-success" value="" onClick={this.handleSubmitClicked}>Keep me updated !</button>

          </form>
      </div>
    );
  }
}

export default App;
