import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "../components/commentBox";
import Immutable from "immutable";

export default class Main extends React.Component {
  static contextTypes = {
    state: React.PropTypes.object,
    dispatch: React.PropTypes.func
  }

  onClick = (e) => {
    e.preventDefault();
    const comment = ReactDOM.findDOMNode(this.refs.comment);
    const {dispatch} = this.context;

    if (comment.value.trim() === "")
      return;

    dispatch({
      type: "AddComment",
      payload: {
        timestamp: new Date().toLocaleString(),
        comment: comment.value.trim()
      }
    });

    comment.value = "";
  }

  renderComments = (comment) => {
    if (comment) {
      const {key, comment:quote, rating = 0, timestamp} = comment;
      return (
        <CommentBox
          key={key}
          id={key}
          quote={quote}
          rating={rating}
          timestamp={timestamp}/>
      );
    }

    return null;
  }

  render() {
    const {comments} = this.context.state;
    return (
      <div>
        <div className="container">
          <form>
            <div className="input-group">
              <input className="form-control" placeholder="Say Wat..." type="text" ref="comment"/>
                <span className="input-group-btn">
                  <input className="btn btn-default" type="submit" onClick={this.onClick} value="Says Joon!"></input>
                </span>
            </div>
          </form>
        </div>
        <div className="container" style={style.container}>
          {comments.map(this.renderComments)}
        </div>
      </div>
    )
  }
}
const style = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "100vh"
  }
};


