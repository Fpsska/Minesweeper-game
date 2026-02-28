import { type FC } from 'react';

import './menu.scss';

const HIDE_FEATURES = window._APP_CONFIG_.APP_HIDE_FEATURES;

// /. imports

const Menu: FC = () => {
    return (
        <ul className="menu">
            <li className="menu__option">
                <a href="#">Game</a>
            </li>
            <li className="menu__option">
                <a href="#">Help</a>
            </li>
            {!HIDE_FEATURES && (
                <li className="menu__option">
                    <a href="#">SECRET OPTION</a>
                </li>
            )}
        </ul>
    );
};

export default Menu;
