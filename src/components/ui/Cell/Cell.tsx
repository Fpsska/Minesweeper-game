import { type FC, type MouseEvent, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    updateCell,
    switchEmojiStatus,
    openBombsMap,
    shuffleBoardData,
    switchGameStatus,
    switchFirstMoveStatus
} from '../../../app/slices/boardSlice';

import { findNeighboringCells } from '../../../utils/findNeighboringCells';
import { generateClassName } from '../../../utils/helpers/generateClassName';

import './cell.scss';
import { determineColorByNumber } from '../../../utils/helpers/determineNumberColor';

import Icon from './components/Icon/Icon';

import type { TCell } from '../../../types/boardTypes';

// /. imports

interface ITCellProps extends TCell {}

// /. interfaces

const Cell: FC<ITCellProps> = (cell) => {
    const { id, color, x, y, isFlipped, isBomb, status } = cell;

    const boardData = useAppSelector((state) => state.boardSlice.boardData);
    const gameStatus = useAppSelector((state) => state.boardSlice.gameStatus);
    const isFirstMove = useAppSelector((state) => state.boardSlice.isFirstMove);

    const dispatch = useAppDispatch();

    // /. hooks

    const isGameFinished = ['win', 'lose'].includes(gameStatus);
    const isCellDisabled =
        isGameFinished || (isFlipped && status === 'IS_COMPUTED');
    const isCellMarked = ['IS_FLAGGED', 'IS_WARNED'].includes(status);

    const computeCellsBody = (): void => {
        const neighboredCells = findNeighboringCells(boardData, x, y);
        const neighboredBombs = neighboredCells.filter((cell) => cell.isBomb);

        if (neighboredBombs.length === 0) {
            // update all neighbored cells (empty/not flagged/not warned)
            neighboredCells.forEach((cell) => {
                if (!['IS_FLAGGED', 'IS_WARNED'].includes(cell.status)) {
                    dispatch(
                        updateCell({
                            id: cell.id,
                            changes: { isFlipped: true, status: 'IS_COMPUTED' }
                        })
                    );
                }
            });
            return;
        }

        // update clicked cell
        dispatch(
            updateCell({
                id,
                changes: {
                    isFlipped: true,
                    status: 'IS_COMPUTED',
                    value: neighboredBombs.length,
                    color: determineColorByNumber(neighboredBombs.length)
                }
            })
        );
    };

    const onCellLeftClick = (): void => {
        if (isCellDisabled || isCellMarked) return;

        if (isFirstMove) {
            // console.log('FIRST');
            dispatch(switchGameStatus({ status: 'in-game' }));

            if (isBomb) {
                // console.log('FIRST + BOMB');
                dispatch(shuffleBoardData({ bombID: id }));
            }

            computeCellsBody();
            dispatch(switchFirstMoveStatus({ status: false }));
        } else {
            // console.log('SECOND');
            if (isBomb) {
                dispatch(openBombsMap({ id }));
                dispatch(switchGameStatus({ status: 'lose' }));
                dispatch(switchEmojiStatus({ emoji: 'sad' }));
                return;
            }

            computeCellsBody();
        }
    };

    const onCellRightClick = (e: MouseEvent): void => {
        e.preventDefault();

        if (isFirstMove) {
            dispatch(switchGameStatus({ status: 'in-game' }));
            dispatch(switchFirstMoveStatus({ status: false }));
        }

        if ((isFlipped && status === 'IS_COMPUTED') || isGameFinished) return;

        dispatch(updateCell({ id, changes: { status: 'IS_FLAGGED' } }));

        if (status === 'IS_FLAGGED') {
            dispatch(updateCell({ id, changes: { status: 'IS_WARNED' } }));
        }

        if (status === 'IS_WARNED') {
            dispatch(updateCell({ id, changes: { status: 'IS_DEFAULT' } }));
        }
    };

    const onMouseDown = (e: MouseEvent): void => {
        if (isCellDisabled || isCellMarked || e.button === 2) return;
        dispatch(switchEmojiStatus({ emoji: 'scared' }));
    };

    const onMouseUp = (e: MouseEvent): void => {
        if (isCellDisabled || isCellMarked || e.button === 2) return;
        dispatch(switchEmojiStatus({ emoji: 'happy' }));
    };

    // /. functions

    // useEffect(() => console.log(boardData), [boardData]);

    return (
        <button
            id={id}
            className={generateClassName('cell', cell)}
            aria-label={isFlipped ? undefined : 'open cell'}
            disabled={isCellDisabled}
            style={{ color }}
            onContextMenu={onCellRightClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onCellLeftClick}
        >
            <Icon {...cell} />
        </button>
    );
};

export default Cell;
