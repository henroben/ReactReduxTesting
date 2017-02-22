import React, { Component } from 'react';

export default class CommentBox extends Component {

    render() {
        return(
            <div className="comment-box">
                <textarea name="commentBox" id="commentBox" cols="30" rows="10"></textarea>
                <button>Submit Comment</button>
            </div>
        );
    }

}
