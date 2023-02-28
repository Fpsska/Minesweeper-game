import React from 'react';

import './cell.scss';

// /. imports

interface propTypes {
    children: number;
}

// /. interfaces

const Cell: React.FC<propTypes> = ({ children }) => {
    return (
        <button
            className="cell"
            type="button"
            aria-label="open tile"
        >
            {children}
        </button>
    );
};

export default Cell;
