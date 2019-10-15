import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { createPosts } from '../actions/postActions';

export class PostForm extends Component {
    
    state = {
        title: '',
        body: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        };

        this.props.createPosts(post)
        this.setState({
            title: '',
            body: ''
        })
    }
    
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type='text' name='title' onChange={this.onChange} value={this.state.title} />
                    </div>

                    <div>
                        <label>Body: </label><br />
                        <textarea name='body' value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPosts: propTypes.func.isRequired
}

export default connect(null, { createPosts })(PostForm);
