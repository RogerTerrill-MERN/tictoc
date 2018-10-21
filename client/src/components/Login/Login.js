import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom'

class Login extends Component {


    render() {
        return (
          <div className="sign-in-container">
            <div className="text-center">
                <form className="form-signin">
                    <img
                        className="mb-4"
                        src="../../assets/brand/bootstrap-solid.svg"
                        alt=""
                        width="72"
                        height="72"
                    />
                    <h1 className="h3 mb-3 font-weight-bold">
                        TIC
                    </h1>
                    <label for="badgeNumber" className="sr-only">
                        Badge Number
                    </label>
                    <input
                        type="number"
                        id="badgeNumber"
                        className="form-control"
                        placeholder="Badge Number"
                        required
                        autofocus
                    />
                    <button
                        className="btn btn-lg btn-primary btn-block"
                        type="submit"
                    >
                        Sign in
                    </button>
                    <p className="mt-5 mb-3 text-muted">Version 1.0 2018</p>
                </form>
            </div>
          </div>
        );
    }
}

export default Login;
