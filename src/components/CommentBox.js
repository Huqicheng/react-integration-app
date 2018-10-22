import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';
class CommentBox extends React.Component {

    state = {
        comment: ''
    };

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    }

    handleSubmit = (event) => {
        // stop the submission and do it by the handler function
        event.preventDefault(); 
    
        // Call an action creator 
        // and save the comment
        this.props.saveComment(this.state.comment);

        // set it as default
        this.setState({comment: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <h4>Add a Comment </h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div> 
                        <button> Submit Comment </button>
                    </div>

                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}> fetch </button>
            </div>
        );
    }
}



export default connect(null,actions)(requireAuth(CommentBox));