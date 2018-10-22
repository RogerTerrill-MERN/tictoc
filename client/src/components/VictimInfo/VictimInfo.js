import React, { Component } from 'react';
import './VictimInfo.css';

class VictimInfo extends Component {
    render() {
        return (
            <div className="sign-in-container">
                <div className="text-center">
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-bold title">
                            magneTIC
                            <br />
                            Victim Information
                        </h1>
                        <div className="form-group">
                            <select
                                name="age"
                                id="age"
                                className="form-control"
                            >
                                <option value="">
                                    Please Select Age Group
                                </option>
                                <option value="1">
                                    Infant: 6 Weeks - 18 Months
                                </option>
                                <option value="2">
                                    Toddler: 18 Months - 3 years
                                </option>
                                <option value="3">
                                    Preschool and Pre K: 3 - 5 years
                                </option>
                                <option value="4">
                                    School Age: 5 years - 12 years
                                </option>
                                <option value="5">
                                    Teenage: 13 years - 17 years
                                </option>
                                <option value="6">Adult: 18+</option>
                                <option value="7">Older Adult: 65+ </option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                name="trauma"
                                id="trauma"
                                className="form-control"
                            >
                                <option value="">
                                    Please Select Trauma Type
                                </option>
                                <option value="1">Domestic Abuse</option>
                                <option value="2">Elderly Abuse</option>
                                <option value="3">Child Abuse</option>
                                <option value="4">Car Accident</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                name="disability"
                                id="disability"
                                className="form-control"
                            >
                                <option value="">
                                    Please Select Disability
                                </option>
                                <option value="1">Vision Impared</option>
                                <option value="2">Mobility Impared</option>
                                <option value="3">Deaf</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <select
                                name="Language"
                                id="Language"
                                className="form-control"
                            >
                                <option value="">Please Select Language</option>
                                <option value="1">English</option>
                                <option value="2">Spanish</option>
                            </select>
                        </div>
                        <div className="col-md-12 submit-button">
                            <input
                                onClick={() => this.props.history.push("/welcome")}
                                type="submit"
                                class="btn btn-primary btn-block"
                                value="Submit"
                            />
                        </div>
                        <div className="col-md-12 skip-button">
                            <input
                                onClick={() => this.props.history.push("/report")}
                                type="url"
                                class="btn btn-secondary btn-block"
                                value="Skip"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default VictimInfo;
