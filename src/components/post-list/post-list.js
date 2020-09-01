import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

        const elements = posts.map(item => {
            const {id} = item;
            return(
                <PostListItem key={id} post={item} onDelete={onDelete} onToggleImportant={onToggleImportant} onToggleLiked={onToggleLiked}/>
            )
        });
    
        return (
            <ul className="app-list list-group">
                {elements}
            </ul>
        )
        
};

export default PostList;