import React, {Component} from 'react';

import './post-list-item.css';

class PostListItem extends Component {

    render() {
        const {post,onDelete, onToggleImportant, onToggleLiked} = this.props;
        const {label, important, like, id} = post;

        let classNames = "app-list-item d-flex justify-content-between list-group-item";

        if(important) {
            classNames += ' important';
        }

        if(like) {
            classNames += ' like';
        }

        return (
        
            <li className={classNames}>
                <span className="app-list-item-label" onClick={() => onToggleLiked(id)}>{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm"
                     onClick={() => onToggleImportant(id)}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                    className="btn-trash btn-sm" 
                    onClick={() => onDelete(id)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
                <i className="fa fa-heart"></i>
            </li>
        )
    }


};  

export default PostListItem;