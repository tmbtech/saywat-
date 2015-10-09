import React from "react";
import Firebase from "firebase";
import config from "./config";
import CommentBox from "./commentBox";

class Main extends React.Component {
  state = {
    comments: []
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(config.firebaseUrl);
    this.firebaseRef.orderByKey().on("child_added", this.childAdded);
    this.firebaseRef.on("child_changed", this.childChanged);
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

  childChanged = child => {
    const comments = this.state.comments.map(comment => {
      if (comment.key === child.key()) {
        comment.rating = child.val().rating;
      }
      return comment;
    });

    this.setState({comments});
  }

  vote = key => (rating, voteValue) => () => {
    const ratingRef = this.firebaseRef.child(`${key}`);
    ratingRef.update({rating: (rating + voteValue)});
  }

  renderComments = (comment) => {
    if (comment) {
      const {key:id, comment:quote, rating = 0, timestamp} = comment;
      return (
        <CommentBox callback={this.vote} id={id} quote={quote} rating={rating} timestamp={timestamp} />
      );
    }

    return null;
  }

  onClick = (e) => {
    e.preventDefault();
    const comment = React.findDOMNode(this.refs.comment);

    if (comment.value.trim() === "")
      return;


    this.firebaseRef.push({
      timestamp: new Date().toLocaleString(),
      comment: comment.value.trim()
    });

    comment.value = "";
  }

  render() {
    const {comments} = this.state;
    return (
      <div>
        <div className="container">
          <form>
            <div className="input-group">
              <input className="form-control" placeholder="Say Wat..." type="text" ref="comment" />
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.onClick}>Says Joon!</button>
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

React.render(<Main />, document.getElementById("app"));
