import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    switchFlippedStatus,
    switchFlaggedStatus,
    switchWarnedStatus
} from '../../app/slices/boardSlice';

import './cell.scss';

// /. imports

interface propTypes {
    children: number;
    id: string;
    isFlipped: boolean;
    isFlagged: boolean;
    isWarned: boolean;
}

// /. interfaces

const Cell: React.FC<propTypes> = ({
    children,
    id,
    isFlipped,
    isFlagged,
    isWarned
}) => {
    const { boardData } = useAppSelector(state => state.boardSlice);

    const dispatch = useAppDispatch();

    // /. hooks

    const isFlagAllowed = !isFlipped && isFlagged && !isWarned;

    const onCellLeftClick = (): void => {
        if (!isFlagged && !isWarned) {
            dispatch(switchFlippedStatus({ id }));
        }
    };

    const onCellRightClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        dispatch(switchFlaggedStatus({ id, status: true }));
        if (isFlagged) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: true }));
        } else if (!isFlagged && isWarned) {
            dispatch(switchFlaggedStatus({ id, status: false }));
            dispatch(switchWarnedStatus({ id, status: false }));
        }
    };

    const flagIcon = (
        <svg
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

    // /. functions

    return (
        <button
            className="cell"
            type="button"
            aria-label="open tile"
            onContextMenu={e => onCellRightClick(e)}
            onClick={onCellLeftClick}
            disabled={isFlipped}
        >
            {isFlipped
                ? children
                : isFlagAllowed
                ? flagIcon
                : isWarned
                ? '?'
                : ''}
        </button>
    );
};

export default Cell;
