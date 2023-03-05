import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    setBoardData,
    switchGameOverStatus,
    switchGameWonStatus,
    switchEmojiStatuses
} from '../../app/slices/boardSlice';

import { generateBoard } from '../../utils/generateBoard';
import { convertTimerValue } from '../../utils/helpers/convertTimerValue';

import Timer from '../Timer/Timer';

import defaultIcon from '../../assets/images/default_emoji-icon.svg';
import scaredIcon from '../../assets/images/scared_emoji-icon.svg';
import loseIcon from '../../assets/images/lose_emoji-icon.svg';
import winIcon from '../../assets/images/win_emoji-icon.svg';

import './interface.scss';

// /. imports

const Interface: React.FC = () => {
    const { bombsCount, boardSize, isGameOver, isGameWon, currentEmoji } =
        useAppSelector(state => state.boardSlice);

    const [localBombsCount] = useState<number>(bombsCount);

    const [emojiStatuses] = useState<{ [key: string]: string }>({
        happy: defaultIcon,
        cool: winIcon,
        sad: loseIcon,
        scared: scaredIcon
    });

    const [textMessages] = useState<{ [key: string]: string }>({
        happy: 'Good luck!',
        cool: 'You won!',
        sad: 'You lose :('
    });

    const isButtonAvailable =
        (isGameOver && currentEmoji === 'sad') ||
        (isGameWon && currentEmoji === 'cool');

    const isGameFinished = isGameOver || isGameWon;

    const dispatch = useAppDispatch();

    // /. hooks

    const onButtonStatusClick = (): void => {
        dispatch(switchGameOverStatus({ status: false }));
        dispatch(switchGameWonStatus({ status: false }));
        dispatch(switchEmojiStatuses('happy'));

        const newBoard = generateBoard(boardSize, localBombsCount);
        dispatch(setBoardData(newBoard));
    };

    // /. functions

    return (
        <div className="board__information information">
            <div className="information__bombs-count">
                <span>{convertTimerValue(bombsCount)}</span>
            </div>
            <div
                className={
                    isGameFinished
                        ? 'information__status finished'
                        : 'information__status'
                }
                title={textMessages[currentEmoji]}
            >
                <button
                    type="button"
                    aria-label="restart game"
                    style={{
                        backgroundImage: `url("${
                            emojiStatuses[currentEmoji] || defaultIcon
                        }")`
                    }}
                    onClick={() => isButtonAvailable && onButtonStatusClick()}
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
