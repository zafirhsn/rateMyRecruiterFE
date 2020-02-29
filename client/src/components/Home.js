import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css'
// import 

class Home extends Component {
  state = {
    clickedSearchbyRecruiter: false,
    clickedSearchbyCompany: false,
    rateaRecruiter: false
  }
  searchByrecruiterEvent(e) {
    this.setState({clickedSearchbyRecruiter: !this.state.clickedSearchbyRecruiter})
    console.log(this.state.clickedSearchbyRecruiter);
  }
  searchByCompanyEvent(e) {
    this.setState({clickedSearchbyCompany: !this.state.clickedSearchbyCompany});
    console.log(this.state.clickedSearchbyCompany);
  }
  rateaRecruiterEvent(e) {
    this.setState({ rateaRecruiter: !this.state.rateaRecruiter })
    console.log(this.state.rateaRecruiter);
  }
  render(){



    return(
      <div className="home"> 
        <div className="container-fluid">

          {/* Search bar row */}
          <div className="row search-row">
              <form className="col offset-s4">
                <div className="row">
                  <div className="input-field col">
                    <input placeholder="Find a Recruiter" name="searchbar" type="text" id="search_bar"></input>
            
                  </div>
                </div>
              </form>            
          </div>

          {/* Button component row */}
          <div className="row button-row">

            <div className="col offset-l3">
              <Link
                className="waves-effect waves-light btn-large search-button"
                onClick={this.searchByrecruiterEvent.bind(this)}
                to="/searchByRecruiter">
                  Search by Recruiter</Link>
            </div>
            <div className="col ">
              <Link
                className="waves-effect waves-light btn-large search-button"
                onClick={this.searchByCompanyEvent.bind(this)}
                to="/searchByCompany">
                  Search by Company</Link>
            </div>
            <div className="col ">
              <Link
                className="waves-effect waves-light btn-large search-button"
                onClick={this.rateaRecruiterEvent.bind(this)}
                to="/rateARecruiter">
                  Rate a Recruiter</Link>
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