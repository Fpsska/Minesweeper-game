import React, {
    // useState,
    useRef,
    useEffect,
    useLayoutEffect
} from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import {
    setBoardData,
    switchGameStatus,
    switchEmojiStatus
} from '../../../app/slices/boardSlice';

import { generateBoard } from '../../../utils/generateBoard';

import { Irow } from '../../../types/boardTypes';

import Cell from '../../ui/Cell/Cell';

import './playground.scss';

// /. imports

const Playground: React.FC = () => {
    const { boardSize, bombsCount, boardData, gameStatus } = useAppSelector(
        state => state.boardSlice
    );

    const dispatch = useAppDispatch();

    const playgroundRef = useRef<HTMLDivElement | null>(null);
    // const isFirstClick = useRef<boolean>(true);

    // /. hooks

    useLayoutEffect(() => {
        playgroundRef.current?.style.setProperty('--size', String(boardSize));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Initialize board data
        const newBoard = generateBoard(boardSize, bombsCount);
        dispatch(setBoardData(newBoard));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Handle for game over (win)
        if (gameStatus !== 'in-game') return;

        const cellsToValidate = boardData
            .flat(1)
            .filter(cell => !cell.isFlipped && !cell.isFlagged);
        const isAllCellsFlipped = cellsToValidate.every(cell => cell.isFlipped);

        if (isAllCellsFlipped) {
            dispatch(switchGameStatus({ status: 'win' }));
            dispatch(switchEmojiStatus({ emoji: 'cool' }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boardData, gameStatus]);

    // /. effects

    return (
        <div
            className="playground-area"
            ref={playgroundRef}
        >
            {boardData.map(row => {
                return row.map((cell: Irow) => {
                    return (
                        <Cell
                            key={cell.id}
                            {...cell}
                        >
                            {cell.value}
                        </Cell>
                    );
                });
            })}
        </div>
    );
};

export default Playground;
