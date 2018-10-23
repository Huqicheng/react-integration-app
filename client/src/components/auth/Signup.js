import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {compose} from'redux';

class Signup extends Component {


    onSubmit = (formProps) => {
        // this callback will be invoked only when signup is successful
        this.props.signup(formProps, () => {
            this.props.history.push('/');
        });
    };

    render() {

        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label> Email </label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>

                <fieldset>
                    <label> Password </label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                        autoComplete="none"
                    />
                </fieldset>

                <div>{this.props.errorMessage} </div>

                <button>Sign up! </button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.errorMessage
    };
}

// compose all higher order components together
export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signup'})
)(Signup);

