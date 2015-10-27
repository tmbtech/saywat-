import Main from "./views/main.js"
import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import AppContext from "./AppContext";
import Firebase from "firebase";

class App extends React.Component {
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

  handleDispatch({type, payload}) {
    const actions = {
      AddComment: () => {
        this.firebaseRef.push(payload);
      },
      CastVote: () => {
        const {id, rating, value} = payload;
        this.firebaseRef
          .child(`${id}`)
          .update({
            rating: (rating + value)
          });
      }
    }

    if (actions[type]) {
      actions[type]();
    }
  }

  render() {
    return (
      <AppContext state={this.state} onDispatch={action => this.handleDispatch(action)}>
        <Main />
      </AppContext>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("app")
);