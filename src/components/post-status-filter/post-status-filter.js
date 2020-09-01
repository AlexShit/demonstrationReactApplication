import React, { Component } from 'react';

import './post-status-filter.css';

class PostStatusFilter extends Component {

    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'all'},
            {name: 'like', label: 'liked'}
        ]
    }
    render() {
        const buttonsRender = this.buttons.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn btn-info' : 'btn btn-ouline-secondary';
            return (
                <button 
                key={name} 
                type='button' 
                className={clazz}
                onClick={() => this.props.onStatusFilter(name)}>{label}</button>   
            )
            
        });
        return (
            
            <div className="btn-group">
                {buttonsRender}
            </div>
        )
    } 
};

export default PostStatusFilter;