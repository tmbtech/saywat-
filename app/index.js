import Main from "./views/main.js"
import React from "react";
import ReactDOM from "react-dom";
import config from "./config";
import AppContext from "./AppContext";
import Firebase from "firebase";
import Immutable from "immutable"

class App extends React.Component {
  state = {
    comments: Immutable.Map()
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(config.firebaseUrl);
    this.firebaseRef.orderByKey().on("child_added", this.childAdded);
    this.firebaseRef.on("child_changed", this.childChanged);
  }

  childAdded = (dataSnapshot) => {
    const val = dataSnapshot.val();
    const key = dataSnapshot.key();

    this.setState((prevState) => {
      return {
        comments: prevState.comments.merge({[key]: val})
      };
    })
  }

  childChanged = child => {
    this.setState(prevState => {
      const key = child.key();
      const comments = prevState.comments
        .setIn([key, "rating"], child.val().rating);
      return {comments};
    });
  }

  handleDispatch({type, payload}) {
    const actions = {
      AddComment: () => {
        this.firebaseRef.push(payload.toJS());
      },
      CastVote: () => {
        this.firebaseRef
          .child(`${payload.get("id")}`)
          .update({
            rating: (payload.get("rating") + payload.get("value"))
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