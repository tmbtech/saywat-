import React from "react";
import ReactDom from "react-dom";

class HelloWorld extends  React.Component {

  render(){
    return (
      <div>hello world!</div>
    )
  }
}

ReactDom.render(<HelloWorld />, document.getElementById("app"));
