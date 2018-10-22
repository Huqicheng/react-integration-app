// higher order component for requiring authentication

import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        // got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            // pass props directly to the child components
            return <ChildComponent {...this.props}/>;
        }
    }

    function mapStateToProps(state) {
        return {auth: state.auth};
    }

    return connect(mapStateToProps)(ComposedComponent);

};

// usage: requireAuth(CommentBox)