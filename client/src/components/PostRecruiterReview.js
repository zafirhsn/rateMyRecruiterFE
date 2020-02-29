import React, { Component } from "react";

// make your own css on Styles Folder file and import here. Remove the this comment
// import './App.css';

class PostRecruiterReview extends Component {
  constructor() {
    super();
    this.state = {
      author: "",
      decription_review: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    console.log("click", this.state);
    this.setState({ decription_review: e.target.value });
  }

  onSubmit(e) {
    console.log("click", this.state);
    // this.props.postReview(reviewData, this.props.match.params.id, this.props.history);
  }
  render() {
    return (
      <div className="card-content valign center">
        <h1>Add a Review</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="text">Your review</label>
              <textarea
                type="text"
                id="decription_review"
                min="5"
                className="form-control form-control-lg"
                name="decription_review"
                value={this.state.decription_review}
                onChange={this.onChange}
                rows="3"
              ></textarea>
            </div>
          </div>
          <input type="submit" className="waves-effect waves-light btn"></input>
        </form>
      </div>
    );
  }
}
export default PostRecruiterReview;
