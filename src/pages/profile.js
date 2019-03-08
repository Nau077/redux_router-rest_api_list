import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { LOG_OUT } from '../actions/action_constants';

class Profile extends React.Component {
    state = {
        redirectToPreviousRoute: false
    };

    goAway() {
        this.props.logOut();
        this.setState(() => ({ redirectToPreviousRoute: true }));
    }

    render() { 
        const { redirectToPreviousRoute } = this.state;

        if (redirectToPreviousRoute) {
            return (
                <Redirect
                    to={{
                        pathname: '/Login'
                    }}
                />
            );
        }

        return (
            <div>
                <div className="header profile">
                    <h2>Profile</h2>
                </div>
                <div className="profile-info">
                    <div className="group">
                        <label>Username:</label>
                        <span>Admin</span>
                    </div>
                    <button onClick={ this.goAway.bind(this) }>Go out</button>
                </div>
            </div>
        );
    } d
    static propTypes = {
        
        logOut: PropTypes.func.isRequired
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch({ type: LOG_OUT })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
