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
        isFirstClick,
        setIsFirstClick
    } = props;

    const { boardData, isGameOver, isGameWon } = useAppSelector(
        state => state.boardSlice
    );
    const [color, setColor] = useState<string>('#878787');

    const isFlagVisible = !isFlipped && isFlagged && !isWarned;
    const isBombVisible = isFlipped && isBomb && value === 'B';
    const isNumberVisible =
        isFlipped && !isFlagged && !isWarned && value !== 'B';
    const isCellDisabled = isFlipped || isGameOver || isGameWon;

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
            // reveal all neighbored empty, safe fields
            neighboredFields.forEach(({ id }) => {
                dispatch(switchFlippedStatus({ id }));
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

    const flagIcon = (
        <svg
            className="flag-icon"
            width="8"
            height="10"
            viewBox="0 0 8 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="3.66257"
                width="0.915642"
                height="8.6986"
                fill="black"
            />
            <rect
                y="7.32514"
                width="7.32514"
                height="1.83128"
                fill="#010000"
            />
            <rect
                x="1.83129"
                y="6.4095"
                width="3.66257"
                height="0.915642"
                fill="#010000"
            />
            <rect
                x="2.7469"
                width="1.83128"
                height="4.57821"
                fill="#FC0D1B"
            />
            <rect
                x="0.915609"
                y="0.915642"
                width="1.83128"
                height="2.74693"
                fill="#FC0D1B"
            />
            <rect
                y="1.83128"
                width="0.915642"
                height="0.915642"
                fill="#FC0D1B"
            />
        </svg>
    );

    const bombIcon = (
        <svg
            className="bomb-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="7.8938"
                y="3"
                width="0.815642"
                height="10.6034"
                fill="black"
            />
            <rect
                x="13.6033"
                y="7.8938"
                width="0.815642"
                height="10.6034"
                transform="rotate(90 13.6033 7.8938)"
                fill="black"
            />
            <rect
                x="6.26245"
                y="4.63135"
                width="4.07821"
                height="7.34078"
                fill="black"
            />
            <rect
                x="11.9722"
                y="6.26245"
                width="4.07821"
                height="7.34078"
                transform="rotate(90 11.9722 6.26245)"
                fill="black"
            />
            <rect
                x="5.44702"
                y="5.44702"
                width="5.7095"
                height="5.7095"
                fill="black"
            />
            <rect
                x="11.1565"
                y="4.63135"
                width="0.815642"
                height="0.815642"
                fill="black"
            />
            <rect
                x="11.1565"
                y="11.1565"
                width="0.815642"
                height="0.815642"
                fill="black"
            />
            <rect
                x="4.63135"
                y="4.63135"
                width="0.815642"
                height="0.815642"
                fill="black"
            />
            <rect
                x="4.63135"
                y="11.1565"
                width="0.815642"
                height="0.815642"
                fill="black"
            />
            <rect
                x="6.26245"
                y="6.26245"
                width="1.63128"
                height="1.63128"
                fill="white"
            />
        </svg>
    );

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
            className={`cell ${
                isNumberVisible || isBombVisible ? 'flipped' : ''
            } ${isBombVisible ? 'bomb' : ''} ${isExploded ? 'exploded' : ''} ${
                isFlagged ? 'marked' : ''
            }`}
            type="button"
            aria-label={isNumberVisible ? '' : 'open field'}
            disabled={isCellDisabled}
            style={{ color }}
            onContextMenu={e => onCellRightClick(e)}
            onMouseDown={e => onMouseDown(e)}
            onMouseUp={onMouseUp}
            onClick={isFirstClick ? onCellFirstClick : onCellLeftClick}
        >
            {isNumberVisible
                ? children
                : isFlagVisible
                ? flagIcon
                : isWarned
                ? '?'
                : isBombVisible
                ? bombIcon
                : ''}
        </button>
    );
};

export default Cell;
