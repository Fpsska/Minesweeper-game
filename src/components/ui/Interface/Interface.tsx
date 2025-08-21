import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    setBoardData,
    switchGameStatus,
    switchEmojiStatus,
    switchFirstMoveStatus
} from '../../../app/slices/boardSlice';

import { generateBoard } from '../../../utils/generateBoard';
import { convertTimerValue } from '../../../utils/helpers/convertTimerValue';

import happyIcon from '../../../assets/icons/default_emoji-icon.svg';
import scaredIcon from '../../../assets/icons/scared_emoji-icon.svg';
import loseIcon from '../../../assets/icons/lose_emoji-icon.svg';
import winIcon from '../../../assets/icons/win_emoji-icon.svg';

import Timer from '../Timer/Timer';

import './interface.scss';
import type { Emoji } from '../../../types/boardTypes';

// /. imports

const statusesToMessage: Partial<Record<Emoji, string>> = {
    happy: 'Good luck!',
    cool: 'You won!',
    sad: 'You lose :('
};

const emojiToIcon: Partial<Record<Emoji, string>> = {
    happy: happyIcon,
    cool: winIcon,
    sad: loseIcon,
    scared: scaredIcon
};

const Interface: React.FC = () => {
    const { bombsCount, boardSize, gameStatus, currentEmoji } = useAppSelector(
        (state) => state.boardSlice
    );

    const isGameFinished = ['win', 'lose'].includes(gameStatus);

    const dispatch = useAppDispatch();

    // /. hooks

    const onButtonStatusClick = (): void => {
        dispatch(switchGameStatus({ status: 'initial' }));
        dispatch(switchEmojiStatus({ emoji: 'happy' }));
        dispatch(switchFirstMoveStatus({ status: true }));

        const newBoard = generateBoard(boardSize, bombsCount);
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
                title={statusesToMessage[currentEmoji]}
            >
                <button
                    type="button"
                    aria-label="restart game"
                    style={{
                        backgroundImage: `url("${emojiToIcon[currentEmoji]}")`
                    }}
                    onClick={() => isGameFinished && onButtonStatusClick()}
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
