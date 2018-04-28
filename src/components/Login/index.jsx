import React, { Component } from 'react';
import LogoDark from 'assets/images/robust-logo-dark.png';
import 'assets/css/login-register.css';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// icon-spinner2 spinner
class Login extends Component {
  constructor() {
    super();
    this.onLogin = this.onLogin.bind(this);
  }
  onLogin(e) {
    e.preventDefault();
    this.props.dispatch(push('/'));
  }
  render() {
    return (
      <section className="flexbox-container">
        <div className="col-md-4 offset-md-4 col-xs-10 offset-xs-1  box-shadow-2 p-0">
          <div className="card border-grey border-lighten-3 m-0">
            <div className="card-header no-border">
              <div className="card-title text-xs-center">
                <div className="p-1">
                  <img src={LogoDark} alt="branding logo" />
                </div>
              </div>
              <h6 className="card-subtitle line-on-side text-muted text-xs-center font-small-3 pt-2">
                <span>Login with Robust</span>
              </h6>
            </div>
            <div className="card-body collapse in">
              <div className="card-block">
                <form className="form-horizontal form-simple" noValidate>
                  <fieldset className="form-group position-relative has-icon-left mb-0">
                    <input
                      type="text"
                      className="form-control form-control-lg input-lg"
                      id="user-name"
                      placeholder="Your Username"
                      required
                    />
                    <div className="form-control-position">
                      <i className="icon-head" />
                    </div>
                  </fieldset>
                  <fieldset className="form-group position-relative has-icon-left">
                    <input
                      type="password"
                      className="form-control form-control-lg input-lg"
                      id="user-password"
                      placeholder="Enter Password"
                      required
                    />
                    <div className="form-control-position">
                      <i className="icon-key3" />
                    </div>
                  </fieldset>
                  <fieldset className="form-group row">
                    <div className="col-md-6 col-xs-12 text-xs-center text-md-left">
                      <fieldset>
                        <input
                          type="checkbox"
                          id="remember-me"
                          className="chk-remember"
                        />
                        <label htmlFor="remember-me"> Remember Me</label>
                      </fieldset>
                    </div>
                    <div className="col-md-6 col-xs-12 text-xs-center text-md-right">
                      <a href="recover-password.html" className="card-link">
                        Forgot Password?
                      </a>
                    </div>
                  </fieldset>
                  <button
                    type="submit"
                    onClick={this.onLogin}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    <i className="icon-unlock2" /> Login
                  </button>
                </form>
              </div>
            </div>
            <div className="card-footer">
              <div className="">
                <p className="float-sm-left text-xs-center m-0">
                  <a href="recover-password.html" className="card-link">
                    Recover password
                  </a>
                </p>
                <p className="float-sm-right text-xs-center m-0">
                  New to Robust?{' '}
                  <a href="register-simple.html" className="card-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect()(Login);
