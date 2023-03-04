import React from 'react';

import Bar from '../Bar/Bar';
import Playground from '../Playground/Playground';
import Interface from '../Interface/Interface';

import '../../assets/styles/style.scss';
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
