import React from 'react';

import { useAppSelector } from '../../app/hooks';

import Timer from '../Timer/Timer';

import './interface.scss';

// /. imports

const Interface: React.FC = () => {
    const { bombsCount } = useAppSelector(state => state.boardSlice);

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
