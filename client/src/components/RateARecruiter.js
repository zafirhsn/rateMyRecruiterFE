import React, { Component } from "react";
import "../styles/recruiter.css";

class RateARecruiter extends Component {
  constructor() {
    super();
    this.state = {
      recruiterName: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ recruiterName: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // redirect to profile
  }

  render() {
    return (
      <div className="card-content valign center">
        <h1 className="">Rate your recruiter</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col offset-s4 s4">
              <input
                name="recruiterName"
                value={this.state.recruiterName}
                onChange={this.onChange}
                id="recruiterName"
                type="text"
              />
              <label className="active" for="recruiterName">
                Recruiter Name
              </label>
            </div>
          </div>

          <input type="submit" className="waves-effect waves-light btn"></input>
        </form>
      </div>
    );
  }
}
export default RateARecruiter;
