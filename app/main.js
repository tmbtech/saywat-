import React from "react";
import Firebase from "firebase";
import Rate from "./rate";
import config from "./config";

class Main extends React.Component {
  state = {
    comments: []
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(config.firebaseUrl);
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
        <div style={style.quote} key={comment.key}>
          <img src={`https://unsplash.it/300/125/?random&_${comment.key}`} />
          <Rate id={comment.key} />
          <div style={{padding:"20px 40px 40px"}}>
            <p>"{comment.comment}"</p>
            <div style={{color:"rgb(54, 214, 120)"}}>{comment.timestamp}</div>
          </div>
        </div>
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
  },
  quote: {
    minHeight: 300,
    background: "white",
    flexBasis: 300,
    margin:"15px auto"
  }
}
React.render(<Main />, document.getElementById("app"));
