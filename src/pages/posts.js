import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/actions';
import { connect } from 'react-redux';

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <div>
                <h1>Posts:</h1>
                <ul className="title">
                    {this.props.posts.map(({ id, title }) =>
                        <li key={id}>
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        posts: state.posts.postsList
    }),
    dispatch => ({
        getPosts: () => {
            dispatch(getPosts());
        }
    })
)(Posts);
