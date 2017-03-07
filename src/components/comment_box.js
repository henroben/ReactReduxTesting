import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

    constructor(props) {
        super(props);

        this.state = { comment: '' };
    }

    onChangeHandler(event) {
        this.setState({
            comment: event.target.value
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({
            comment: ''
        });
    }

    render() {
        return(
            <div className="row comment-box">
                <div className="col-md-12">
                    <form onSubmit={this.onSubmitHandler.bind(this)} className="comment-form">
                        <h4>Add A Comment</h4>
                        <textarea className="form-control" name="commentBox" id="commentBox" cols="30" rows="10"
                          onChange={this.onChangeHandler.bind(this)}
                          value={this.state.comment} />
                        <button action="submit" className="btn btn-primary btn-block">Submit Comment</button>
                    </form>
                </div>

            </div>

        );
    }

}

export default connect(null, actions)(CommentBox);