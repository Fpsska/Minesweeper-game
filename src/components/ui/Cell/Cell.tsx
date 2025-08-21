import React from 'react'; // useEffect

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

const Cell: React.FC<ITCellProps> = (cell) => {
    const { id, color, x, y, isFlipped, isFlagged, isWarned, isBomb } = cell;

    const { boardData, gameStatus, isFirstMove } = useAppSelector(
        (state) => state.boardSlice
    );
    const dispatch = useAppDispatch();

    // /. hooks

    const isGameFinished = ['win', 'lose'].includes(gameStatus);
    const isCellDisabled = isGameFinished || isFlipped;

    const computeCellsBody = (): void => {
        const neighboredCells = findNeighboringCells(boardData, x, y);
        const neighboredBombs = neighboredCells.filter((cell) => cell.isBomb);

        if (neighboredBombs.length === 0) {
            // update all neighbored empty, safe fields (not flagged)
            neighboredCells.forEach((cell) => {
                if (!cell.isFlagged) {
                    dispatch(
                        updateCell({
                            id: cell.id,
                            changes: { isFlipped: true }
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
                    value: neighboredBombs.length,
                    color: determineColorByNumber(neighboredBombs.length)
                }
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

            computeCellsBody();
            dispatch(switchFirstMoveStatus({ status: false }));
        } else {
            if (isFlagged || isWarned) return;

            if (isBomb) {
                // console.log('SECOND + BOMB');
                dispatch(updateCell({ id, changes: { isFlipped: true } }));
                dispatch(openBombsMap({ id }));
                dispatch(switchGameStatus({ status: 'lose' }));
                dispatch(switchEmojiStatus({ emoji: 'sad' }));
                return;
            }

            computeCellsBody();
        }
    };

    const onCellRightClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        if (isFlipped || isGameFinished) return;

        dispatch(
            updateCell({ id, changes: { isFlagged: true, isDefused: isBomb } })
        );

        if (isFlagged) {
            dispatch(
                updateCell({
                    id,
                    changes: {
                        isFlagged: false,
                        isDefused: false,
                        isWarned: true
                    }
                })
            );
        }

        if (isWarned) {
            dispatch(
                updateCell({
                    id,
                    changes: {
                        isWarned: false,
                        isFlagged: false,
                        isDefused: false
                    }
                })
            );
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

    // useEffect(() => console.log(boardData), [boardData]);

    return (
        <button
            id={id}
            className={generateClassName('cell', cell)}
            // aria-label={isNumberVisible ? '' : 'open field'} // TODO
            disabled={isCellDisabled}
            style={{ color }}
            onContextMenu={(e) => onCellRightClick(e)}
            onMouseDown={(e) => onMouseDown(e)}
            onMouseUp={onMouseUp}
            onClick={onCellLeftClick}
        >
            <Icon {...cell} />
        </button>
    );
};

export default Cell;
