import React from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {

    const list = props.comments.map(comment => <li key={comment} className="list-group-item">{comment}</li>);

    return(
        <div className="row comment-list">
            <div className="col-md-12">
                <ul className="list-group">
                    {list}
                </ul>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);