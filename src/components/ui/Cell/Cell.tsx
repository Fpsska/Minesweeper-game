import React, { type ReactNode } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus,
    setCurrentCellValue,
    switchEmojiStatus,
    openBombsMap,
    shuffleBoardData,
    switchGameStatus,
    switchFirstMoveStatus
} from '../../../app/slices/boardSlice';

import { findAdjacentFileds } from '../../../utils/findAdjacentFileds';
import { generateClassNames } from '../../../utils/helpers/generateClassNames';

import SvgTemplate from '../SvgTemplate/SvgTemplate';

import './cell.scss';

// /. imports

interface propTypes {
    children: ReactNode;
    id: string;
    value: string | number;
    color?: string;
    x: number;
    y: number;
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
    isBomb?: boolean;
    isExploded?: boolean;
    isDefused?: boolean;
}

// /. interfaces

const Cell: React.FC<propTypes> = props => {
    const {
        children,
        id,
        value,
        color,
        x,
        y,
        isFlipped,
        isFlagged,
        isWarned,
        isBomb,
        isExploded,
        isDefused
    } = props;

    const { boardData, gameStatus, isFirstMove } = useAppSelector(
        state => state.boardSlice
    );

    const isGameFinished = ['win', 'lose'].includes(gameStatus);

    const isFlagVisible = !isFlipped && isFlagged && !isWarned;
    const isBombVisible = isFlipped && isBomb && value === 'B';
    const isDefusebBombVisible =
        isFlipped && isBomb && value === 'B' && isDefused && isFlagged;
    const isNumberVisible =
        isFlipped && !isFlagged && !isWarned && value !== 'B';
    const isCellDisabled = isGameFinished || isFlipped;

    const cellClassNames = [
        isNumberVisible || isBombVisible ? 'flipped' : '',
        isBombVisible ? 'bomb' : '',
        isExploded ? 'exploded' : '',
        isDefused ? 'defused' : '',
        isFlagged ? 'marked' : '',
        isWarned ? 'warned' : ''
    ];

    const dispatch = useAppDispatch();

    // /. hooks

    const calcCellValue = (): void => {
        const neighboredFields = findAdjacentFileds(boardData, x, y);
        const neighboredBombs = neighboredFields.filter(field => field.isBomb);

        if (neighboredBombs.length === 0) {
            // reveal all neighbored empty, safe fields (not flagged)
            return neighboredFields.forEach(field => {
                if (!field.isFlagged) {
                    dispatch(switchFlippedStatus({ id: field.id }));
                }
            });
        }

        // reveal current (one) field if bombs are nearby
        dispatch(
            setCurrentCellValue({
                id,
                value: neighboredBombs.length
            })
        );
    };

    const onCellLeftClick = (): void => {
        if (isFirstMove) {
            if (isFlagged || isWarned) return;
            dispatch(switchGameStatus({ status: 'in-game' }));

            if (isBomb) {
                // console.log('FIRST + BOMB');
                dispatch(shuffleBoardData({ bombID: id }));
            }

            calcCellValue();
            dispatch(switchFlippedStatus({ id }));
            dispatch(switchFirstMoveStatus({ status: false }));
        } else {
            if (isFlagged || isWarned) return;

            if (isBomb) {
                // console.log('SECOND + BOMB');
                dispatch(switchFlippedStatus({ id }));
                dispatch(openBombsMap({ id }));
                dispatch(switchGameStatus({ status: 'lose' }));
                dispatch(switchEmojiStatus({ emoji: 'sad' }));
                return;
            }

            calcCellValue();
            dispatch(switchFlippedStatus({ id }));
        }
    };

    const onCellRightClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        if (isFlipped || isGameFinished) return;

        dispatch(switchFlaggedStatus({ id, status: true }));

        if (isFlagged) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: true }));
        }

        if (isWarned) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: false }));
        }
    };

    const onMouseDown = (e: React.MouseEvent): void => {
        if (e.button === 2 || isFlagged || isWarned) return;
        dispatch(switchEmojiStatus({ emoji: 'scared' }));
    };

    const onMouseUp = (e: React.MouseEvent): void => {
        if (e.button === 2 || isFlagged || isWarned) return;
        dispatch(switchEmojiStatus({ emoji: 'happy' }));
    };

    // /. functions

    return (
        <button
            id={id}
            className={`cell ${generateClassNames(...cellClassNames)}`}
            aria-label={isNumberVisible ? '' : 'open field'}
            disabled={isCellDisabled}
            style={{ color }}
            onContextMenu={e => onCellRightClick(e)}
            onMouseDown={e => onMouseDown(e)}
            onMouseUp={onMouseUp}
            onClick={onCellLeftClick}
        >
            {/* // TODO */}
            {isNumberVisible ? (
                children
            ) : isFlagVisible ? (
                <SvgTemplate name="flag" />
            ) : isWarned ? (
                <SvgTemplate name="warned" />
            ) : isDefusebBombVisible ? (
                <SvgTemplate name="bomb-defused" />
            ) : isBombVisible ? (
                <SvgTemplate name="bomb" />
            ) : (
                ''
            )}
        </button>
    );
};

export default Cell;
