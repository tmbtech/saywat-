import React from "react";
import config from "./config";
import Firebase from "firebase";

export default class Rate extends React.Component {
  static propTypes = {
    callback: React.PropTypes.func.isRequired,
    rating: React.PropTypes.number.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return this.props.rating !== nextProps.rating
  }

  render() {
    const {callback, rating} = this.props;
    return (
      <div style={style.rate}>
        <a onClick={callback(rating, +1)} style={style.votes}>
          <img src="../images/upvote.png" width="20" />
        </a>
        <a onClick={callback(rating, -1)} style={style.votes}>
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