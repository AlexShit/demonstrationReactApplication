import React from 'react';

import './app-header.css';

const AppHeader = ({liked, length}) => {
    return (
        <div className="app-header d-flex">
            <h1>Lex</h1>
            <h2>Из {length} записей понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;