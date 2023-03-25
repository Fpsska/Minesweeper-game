import React from 'react';

import Bar from 'components/ui/Bar/Bar';
import Menu from 'components/ui/Menu/Menu';
import Playground from 'components/layout/Playground/Playground';
import Interface from 'components/ui/Interface/Interface';

import 'assets/styles/style.scss';
import './app.css';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="board">
                <div className="board__wrapper">
                    <section className="board__header">
                        <Bar />
                    </section>
                    <section className="board__menu">
                        <Menu />
                    </section>
                    <section className="board__body">
                        <Interface />
                        <Playground />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default App;
