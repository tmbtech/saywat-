import React from "react";
import config from "./config";
import Firebase from "firebase";

export default class Rate extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  }

  componentWillMount() {
    const firebaseRef = new Firebase(config.firebaseUrl);
    const {id} = this.props;
    this.ratingRef = firebaseRef.child(`${id}`);

    this.ratingRef.once("value", snapshot => {
      const {rating = 0} = snapshot.val();
      this.setState({rating});
    });
  }

  vote = number => () => {
    let {rating} = this.state;
    rating = rating + number;

    this.ratingRef.update({rating});
    this.setState({rating})
  }

  render() {
    const {rating} = this.state;
    return (
      <div style={style.rate}>
        <a onClick={this.vote(+1)} style={style.votes}>
          <img src="../images/upvote.png" width="20" />
        </a>
        <a onClick={this.vote(-1)} style={style.votes}>
          <img src="../images/downvote.jpg" width="20" />
        </a>
        <span style={style.rating}>{rating}</span>
      </div>
    )
  }
}

const style = {
  rate: {
    textAlign: "center",
    paddingTop: 20
  },
  votes: {
    paddingRight: 5
  },
  style: {}
};