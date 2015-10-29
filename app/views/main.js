import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "../components/commentBox";
import Immutable from "immutable";
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class Main extends React.Component {
  static contextTypes = {
    dispatch: React.PropTypes.func
  }

  shouldComponentUpdate = shouldPureComponentUpdate

  onClick = (e) => {
    e.preventDefault();
    const comment = ReactDOM.findDOMNode(this.refs.comment);
    const {dispatch} = this.context;

    if (comment.value.trim() === "")
      return;

    dispatch({
      type: "AddComment",
      payload: Immutable.Map({
        timestamp: new Date().toLocaleString(),
        comment: comment.value.trim()
      })
    });

    comment.value = "";
  }

  render() {
    const {comments} = this.props;
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
          {comments.map((comment, key) => (
            <CommentBox comment={comment} id={key} key={key}/>
          )).toArray()}
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


