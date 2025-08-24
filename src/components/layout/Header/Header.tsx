import { type FC } from 'react';

import Bar from '../../ui/Bar/Bar';
import Menu from '../../ui/Menu/Menu';

import '../App/app.css';

// /. imports

const Header: FC = () => {
    return (
        <>
            <section className="board__header">
                <Bar />
            </section>
            <section className="board__menu">
                <Menu />
            </section>
        </>
    );
};

export default Header;
