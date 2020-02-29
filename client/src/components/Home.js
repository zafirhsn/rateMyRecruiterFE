import React, { Component } from "react";
import '../styles/Home.css'


class Home extends Component {
  state = {
    clickedSearchbyRecruiter: false,
    clickedSearchbyCompany: false,
    rateaRecruiter: false
  }
  searchByrecruiterEvent(e) {
    this.state.clickedSearchbyRecruiter = !this.state.clickedSearchbyRecruiter;
    console.log(this.state.clickedSearchbyRecruiter);
  }
  searchByCompanyEvent(e) {
    this.state.clickedSearchbyCompany = !this.state.clickedSearchbyCompany;
    console.log(this.state.clickedSearchbyCompany);
  }
  rateaRecruiterEvent(e) {
    this.state.rateaRecruiter = !this.state.rateaRecruiter;
    console.log(this.state.rateaRecruiter);
  }
  render(){
    return(
      <div className="home"> 
        <div className="container">

          {/* Search bar row */}
          <div className="row">
              <form className="col">
                <div className="row">
                  <div className="input-field col">
                    <input placeholder="Search" name="searchbar" type="text" id="search_bar"></input>
            
                  </div>
                </div>
              </form>            
          </div>

          {/* Button component row */}
          <div className="row">
            <div className="col">
            <a className="waves-effect waves-light btn-large search-button" onClick={this.searchByrecruiterEvent.bind(this)}>Search by Recruiter</a>
            </div>
            <div className="col">
            <a className="waves-effect waves-light btn-large search-button" onClick={this.searchByCompanyEvent.bind(this)}>Search by Company</a>
            </div>
            <div className="col">
            <a className="waves-effect waves-light btn-large search-button" onClick={this.rateaRecruiterEvent.bind(this)}>Rate a Recruiter</a>
            </div>
          </div>

          <div className="row">
            <div className="row">
              <div className="col">
                Joe Smith
              </div>
              <div className="col">
                recruiter
              </div>
              <div className="col">
                3/5
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default Home;