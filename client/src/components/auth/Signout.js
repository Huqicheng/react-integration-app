import React from 'react';
import  * as actions from '../../actions';
import {connect} from 'react-redux';

class Signout extends React.Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return <div>Sorry to see you go</div>;
    }
}

export default connect(null, actions)(Signout);