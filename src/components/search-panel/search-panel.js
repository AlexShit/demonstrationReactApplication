import React, { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onUpdateState = this.onUpdateState.bind(this);
    }

    onUpdateState(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateState(term);
    }
    
    render() {
        return (
            <input 
            className="form-control search-input" 
            text="type" 
            placeholder="Serching in notes"
            onChange={this.onUpdateState}/> 
        )
    }  
};

export default SearchPanel;