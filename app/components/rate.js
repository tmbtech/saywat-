import React from "react";
import config from "../config";
import Firebase from "firebase";
import Immutable from "immutable";
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Rate extends React.Component {
  static propTypes = {
    rating: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired
  }

  static contextTypes = {
    dispatch: React.PropTypes.func
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  onClick = (rating, value) => () => {
    const {dispatch} = this.context;
    const {id} = this.props;
    dispatch({
      type: "CastVote",
      payload: Immutable.Map({
        id,
        rating,
        value
      })
    });
  }

  render() {
    const {rating} = this.props;
    return (
      <div style={style.rate}>
        <a onClick={this.onClick(rating, +1)} style={style.votes}>
          <img src="../images/upvote.png" width="20"/>
        </a>
        <span style={style.rating}>{rating}</span>
        <a onClick={this.onClick(rating, -1)} style={style.votes}>
          <img src="../images/downvote.jpg" width="20"/>
        </a>
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
    paddingRight: 5,
    paddingLeft: 5
  },
  style: {}
};