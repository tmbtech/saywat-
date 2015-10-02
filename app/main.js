import React from "react";
import Firebase from "firebase";

class Main extends React.Component {
  state = {
    comments: []
  }

  componentWillMount() {
    this.firebaseRef = new Firebase('https://popping-fire-6215.firebaseio.com/shitjoonsays/');
    this.firebaseRef.on("child_added", this.childAdded);
  }

  childAdded = (dataSnapshot) => {
    const val = dataSnapshot.val();
    const key = dataSnapshot.key();
    const comments = [
      {
        ...val,
        key: key
      },
      ...this.state.comments
    ];

    this.setState({comments});
  }

  renderComments = (comment) => {
    if (comment)
      return (
        <li className="list-group-item">{comment.comment} - {comment.timestamp}</li>
      );

    return null;
  }

  onClick = (e) => {
    e.preventDefault();
    const comment = React.findDOMNode(this.refs.comment).value;

    if (comment === "")
      return;

    this.firebaseRef.push({
      timestamp: new Date().toLocaleString(),
      comment
    })
  }

  render() {
    const {comments} = this.state;
    return (
      <div className="container">
        <h1>Welcome to ShitJoonSays!</h1>
        <h3>What did he say?</h3>
        <form>
          <div className="input-group">
            <input className="form-control" placeholder="Comment..." type="text" ref="comment" />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.onClick}>Enter</button>
            </span>
          </div>
        </form>
        <ul className="list-group">
          <li className="list-group-item list-group-item-danger">Say what?!</li>
          {comments.map(this.renderComments)}
        </ul>
      </div>
    )
  }
}

React.render(<Main />, document.getElementById("app"));
