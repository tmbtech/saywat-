import React from "react";

export default class AppContext extends React.Component {
    static propTypes = {
        state: React.PropTypes.object,
        onDispatch: React.PropTypes.func
    }

    static childContextTypes = {
        state: React.PropTypes.object,
        dispatch: React.PropTypes.func
    }

    getChildContext() {
        const {state, onDispatch} = this.props;
        return {
            state,
            dispatch: action => onDispatch(action)
        }
    }

    render() {
        return this.props.children;
    }
}