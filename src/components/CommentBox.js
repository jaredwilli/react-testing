import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/comments';

class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        });
    }

    render() {
        return (
            <form className="comment-box" onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>

                <textarea
                    value={this.state.comment}
                    onChange={this.handleChange}>
                </textarea>

                <div>
                    <button type="submit" action="submit">
                        Submit Comment
                    </button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);
