import React from 'react';

import Playground from '../Playground/Playground';
import Interface from '../Interface/Interface';

import gameIcon from '../../assets/images/game-icon.svg';

import '../../assets/styles/style.scss';
import './app.css';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="board">
                <div className="board__wrapper">
                    <section className="board__header">
                        <a
                            className="board__image"
                            href="#"
                        >
                            <img
                                src={gameIcon}
                                alt="game-icon"
                            />
                        </a>
                        <h1 className="board__name">Minesweeper</h1>
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
