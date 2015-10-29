import React from "react";
import Rate from "./rate";
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class CommentBox extends React.Component {
  static propTypes = {
    comment: React.PropTypes.object,
    id: React.PropTypes.string
  }

  static contextTypes = {
    dispatch: React.PropTypes.func
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  render() {
    const {comment, id} = this.props;
    return (
      <div style={style.quote}>
        <img src={`https://unsplash.it/300/125/?random&_${id}`}/>
        <Rate id={id} rating={comment.get("rating", 0)}/>
        <div style={{padding:"20px 40px 40px"}}>
          <p>"{comment.get("comment")}"</p>

          <div style={{color:"rgb(54, 214, 120)"}}>
            {comment.get("timestamp")}
          </div>
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
