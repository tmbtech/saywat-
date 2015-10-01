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
        <span>
          <p>{comment.comment} - {comment.timestamp}</p>
        </span>
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
      <div>
        <div>Welcome to ShitJoonSays!</div>
        <div>
          <form>
            <h3 >What did she say today?!?!?</h3>
            <div>
              <label>Comment</label>
              <input type="text" ref="comment" />
            </div>
            <div>
              <input type="submit" value="Enter" onClick={this.onClick} />
            </div>
          </form>
        </div>
        <div>{comments.map(this.renderComments)}</div>
      </div>
    )
  }
}

React.render(<Main />, document.getElementById("app"));
