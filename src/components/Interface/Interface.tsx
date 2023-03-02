import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    setBoardData,
    switchGameOverStatus,
    switchEmojiStatuses
} from '../../app/slices/boardSlice';

import { generateBoard } from '../../helpers/generateBoard';
import { convertTimerValue } from '../../helpers/convertTimerValue';

import Timer from '../Timer/Timer';

import defaultIcon from '../../assets/images/default_emoji-icon.svg';
import scaredIcon from '../../assets/images/scared_emoji-icon.svg';
import loseIcon from '../../assets/images/lose_emoji-icon.svg';
import winIcon from '../../assets/images/win_emoji-icon.svg';

import './interface.scss';

// /. imports

const Interface: React.FC = () => {
    const { bombsCount, colCount, rowCount, isGameOver, currentEmoji } =
        useAppSelector(state => state.boardSlice);

    const [emojiStatuses] = useState<{ [key: string]: string }>({
        happy: defaultIcon,
        cool: winIcon,
        sad: loseIcon,
        scared: scaredIcon
    });

    const isButtonAvailable = isGameOver && currentEmoji === 'sad';

    const dispatch = useAppDispatch();

    // /. hooks

    const onButtonStatusClick = (): void => {
        dispatch(switchGameOverStatus({ status: false }));
        dispatch(switchEmojiStatuses('happy'));

        const newBoard = generateBoard(colCount, rowCount, bombsCount);
        dispatch(setBoardData(newBoard));
    };

    // /. functions

    return (
        <div className="board__information information">
            <div className="information__bombs-count">
                <span>{convertTimerValue(bombsCount)}</span>
            </div>
            <div className="information__status">
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
