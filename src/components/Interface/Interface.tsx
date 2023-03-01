import React from 'react';

import { useAppSelector } from '../../app/hooks';

import Timer from '../Timer/Timer';

import defaultIcon from '../../assets/images/default_emoji-icon.svg';
import loseIcon from '../../assets/images/lose_emoji-icon.svg';
import winIcon from '../../assets/images/win_emoji-icon.svg';

import './interface.scss';

// /. imports

const Interface: React.FC = () => {
    const { bombsCount, isGameOver } = useAppSelector(
        state => state.boardSlice
    );

    // /. hooks

    return (
        <div className="board__information information">
            <div className="information__bombs-count">
                <span>{bombsCount < 100 ? `0${bombsCount}` : bombsCount}</span>
            </div>
            <div className="information__status">
                <button
                    type="button"
                    aria-label="restart game"
                    style={{
                        backgroundImage: `url("${
                            isGameOver ? loseIcon : defaultIcon
                        }")`
                    }}
                ></button>
            </div>
            <div className="information__timer">
                <span>
                    <Timer />
                </span>
            </div>
        </div>
    );
};

export default Interface;
