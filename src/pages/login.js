import { connect } from 'react-redux';
import React from 'react';
import { Redirect } from 'react-router';
import { logIn } from '../actions/actions';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        redirectToPreviousRoute: false
    };

    handleChange = e => {
        const value = e.currentTarget.value;
        const fieldName = e.currentTarget.dataset.fieldName;

        this.setState(prev => ({
            ...prev,
            [fieldName]: value
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;

        this.props.logIn(
            {
                username,
                password
            },
            () => {
                this.setState({ redirectToPreviousRoute: true });
            }
        );
    };

    render() {
        const { username, password, redirectToPreviousRoute } = this.state;
        const { errorMsg } = this.props;

        if (redirectToPreviousRoute) {
            return (
                <Redirect
                    to={{
                        pathname: '/Profile',
                        state: { username }
                    }}
                />
            );
        }

        return (
            <div id="login">
                <form id="login-form" onSubmit={this.handleSubmit}>
                    <label>Login</label>
                    <input
                        data-field-name={'username'}
                        required
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                    <label>Password</label>
                    <input
                        data-field-name={'password'}
                        required
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Sign In</button>
                    <div className="error-message" hidden={!errorMsg}>
                        {errorMsg}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errorMsg: state.auth.errorMsg,
    isAuth: state.auth.user
});

const mapDispatchToProps = dispatch => ({
    logIn: (params, cb) => dispatch(logIn(params, cb))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
