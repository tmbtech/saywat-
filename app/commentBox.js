import React from "react";
import Rate from "./rate";

export default class CommentBox extends React.Component {
  static propTypes = {
    rating: React.PropTypes.number,
    id: React.PropTypes.string,
    callback: React.PropTypes.func,
    quote: React.PropTypes.string,
    timestamp: React.PropTypes.string
  }

  render() {
    const {id, rating, callback, quote, timestamp} = this.props;
    return (
      <div style={style.quote} key={id}>
        <img src={`https://unsplash.it/300/125/?random&_${id}`} />
        <Rate callback={callback(id)} rating={rating} />

        <div style={{padding:"20px 40px 40px"}}>
          <p>"{quote}"</p>

          <div style={{color:"rgb(54, 214, 120)"}}>{timestamp}</div>
        </div>
      </div>
    );
  }
}

const style = {
  quote: {
    minHeight: 300,
    background: "white",
    flexBasis: 300,
    margin: "15px auto"
  }
};
