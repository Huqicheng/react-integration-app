import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './HeaderStyle.css';

class Header extends React.Component {
    renderLinks() {
        if(this.props.auth) {
            return <Link to="/signout" >Signout</Link>
        } else {
            return  <div>
                        <Link to="/signin" >Signin</Link>
                        <Link to="/signup" >Signup</Link>
                        <Link to="/feature" >Feature</Link>
                    </div>
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/">Redux Auth</Link>
                
                {this.renderLinks()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth.authenticated};
}

export default  connect(mapStateToProps)(Header);
