import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus,
    switchDefusedStatus,
    setCurrentCellValue,
    switchGameOverStatus,
    switchEmojiStatuses,
    calcBombsCount,
    decrementBombsCount,
    openBombsMap,
    shuffleBoardData
} from '../../app/slices/boardSlice';

import { findAdjacentFileds } from '../../utils/findAdjacentFileds';
import { determineColorByNumber } from '../../utils/helpers/determineNumberColor';
import { generateClassNames } from '../../utils/helpers/generateClassNames';

import SvgTemplate from '../SvgTemplate/SvgTemplate';

import './cell.scss';

// /. imports

interface propTypes {
    children: JSX.Element;
    id: string;
    value: string | number;
    x: number;
    y: number;
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
    isBomb?: boolean;
    isExploded?: boolean;
    isDefused?: boolean;
    isFirstClick: boolean;
    setIsFirstClick: (arg: boolean) => void;
}

// /. interfaces

const Cell: React.FC<propTypes> = props => {
    const {
        children,
        id,
        value,
        x,
        y,
        isFlipped,
        isFlagged,
        isWarned,
        isBomb,
        isExploded,
        isDefused,
        isFirstClick,
        setIsFirstClick
    } = props;

    const { boardData, isGameOver, isGameWon } = useAppSelector(
        state => state.boardSlice
    );
    const [color, setColor] = useState<string>('#878787');

    const isFlagVisible = !isFlipped && isFlagged && !isWarned;
    const isBombVisible = isFlipped && isBomb && value === 'B';
    const isDefusebBombVisible =
        isFlipped && isBomb && value === 'B' && isDefused && isFlagged;
    const isNumberVisible =
        isFlipped && !isFlagged && !isWarned && value !== 'B';
    const isCellDisabled = isFlipped || isGameOver || isGameWon;

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

    const onCellFirstClick = (): void => {
        if (!isFirstClick) return;
        if (!isBomb) {
            onCellLeftClick();

            setIsFirstClick(false);
        }
        if (isBomb) {
            dispatch(shuffleBoardData({ bombID: id }));
            calcCellValue();
            dispatch(switchFlippedStatus({ id }));

            setIsFirstClick(false);
        }
    };

    const calcCellValue = (): void => {
        const neighboredFields = findAdjacentFileds(boardData, x, y);
        const neighboredBombs = neighboredFields.filter(field => field.isBomb);
        if (neighboredBombs.length === 0) {
            // reveal all neighbored empty, safe fields (not flagged)
            neighboredFields.forEach(field => {
                !field.isFlagged &&
                    dispatch(switchFlippedStatus({ id: field.id }));
            });
        } else {
            // reveal current (one) field if bombs are nearby
            dispatch(
                setCurrentCellValue({
                    id,
                    value: neighboredBombs.length
                })
            );
        }
    };

    const onCellLeftClick = (): void => {
        if (isFlagged || isWarned) return;

        if (!isFlagged && !isWarned && !isBomb) {
            calcCellValue();
            dispatch(switchFlippedStatus({ id }));
        }
        if (isBomb) {
            dispatch(switchGameOverStatus({ status: true }));
            dispatch(openBombsMap({ id }));
            dispatch(switchEmojiStatuses('sad'));
            dispatch(decrementBombsCount());
        }
    };

    const onCellRightClick = (e: React.MouseEvent): void => {
        e.preventDefault();

        if (isFlipped || isGameOver || isGameWon) return;

        dispatch(switchFlaggedStatus({ id, status: true }));
        if (isFlagged) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: true }));
        }
        if (!isFlagged && isWarned) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: false }));
        }
    };

    const onMouseDown = (e: React.MouseEvent): void => {
        if (e.button === 2 || isFlagged || isWarned) return;
        dispatch(switchEmojiStatuses('scared'));
    };

    const onMouseUp = (e: React.MouseEvent): void => {
        if (e.button === 2 || isFlagged || isWarned) return;
        dispatch(switchEmojiStatuses('happy'));
    };

    // /. functions

    useEffect(() => {
        // set color for current cell element
        const isColorAllowed = typeof value === 'number' && isNumberVisible;

        if (isColorAllowed) {
            setColor(determineColorByNumber(value));
        }
    }, [value, isNumberVisible]);

    useEffect(() => {
        // recalc bombCounter when user is flagging/unflagging a bomb
        if (isFlagged && isBomb) {
            dispatch(switchDefusedStatus({ id, status: true }));
            dispatch(calcBombsCount());
        }
        if (!isFlagged && isBomb) {
            dispatch(switchDefusedStatus({ id, status: false }));
            dispatch(calcBombsCount());
        }
    }, [isBomb, isFlagged, id]);

    return (
        <button
            id={String(id)}
            className={`cell ${generateClassNames(...cellClassNames)}`}
            aria-label={isNumberVisible ? '' : 'open field'}
            disabled={isCellDisabled}
            style={{ color }}
            onContextMenu={e => onCellRightClick(e)}
            onMouseDown={e => onMouseDown(e)}
            onMouseUp={onMouseUp}
            onClick={isFirstClick ? onCellFirstClick : onCellLeftClick}
        >
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
