import React from 'react';

import './menu.scss';

// /. imports

const Menu: React.FC = () => {
    return (
        <ul className="menu">
            <li className="menu__option">
                <a href="#">Game</a>
            </li>
            <li className="menu__option">
                <a href="#">Help</a>
            </li>
        </ul>
    );
};

export default Menu;
