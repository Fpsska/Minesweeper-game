import React from 'react';

import gameIcon from '../../../assets/icons/game-icon.svg';

import './bar.scss';

// /. imports

const Bar: React.FC = () => {
    return (
        <div className="board__bar">
            <div className="board__logo">
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
            </div>
            <div className="board__controls controls">
                <button
                    className="controls__button controls__button_collapsed"
                    type="button"
                    aria-label="collapse game window"
                >
                    <span>
                        <svg
                            width="6"
                            height="2"
                            viewBox="0 0 6 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 0H6V2H0V0Z"
                                fill=""
                            />
                        </svg>
                    </span>
                </button>
                <button
                    className="controls__button controls__button_uncollapsed"
                    type="button"
                    aria-label="uncollapse game window"
                >
                    <span>
                        <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9 0H0V9H9V0ZM8 2H1V8H8V2Z"
                                fill=""
                            />
                        </svg>
                    </span>
                </button>
                <button
                    className="controls__button controls__button_closed"
                    type="button"
                    aria-label="close game"
                >
                    <span>
                        <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z"
                                fill=""
                            />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Bar;
