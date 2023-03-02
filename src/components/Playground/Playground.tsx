import React, { useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { setBoardData } from '../../app/slices/boardSlice';

import { generateBoard } from '../../utils/generateBoard';

import { Irow } from '../../types/boardTypes';

import Cell from '../Cell/Cell';

import './playground.scss';

// /. imports

const Playground: React.FC = () => {
    const { boardSize, bombsCount, boardData } = useAppSelector(
        state => state.boardSlice
    );

    const dispatch = useAppDispatch();

    const playgroundRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    useEffect(() => {
        playgroundRef.current.style.setProperty('--size', String(boardSize));
    }, [boardSize]);

    useEffect(() => {
        const newBoard = generateBoard(boardSize, bombsCount);
        dispatch(setBoardData(newBoard));
    }, [boardSize]);

    // /. effects

    return (
        <div
            className="playground-area"
            ref={playgroundRef}
        >
            {boardData.map(row => {
                return row.map((field: Irow) => {
                    return (
                        <Cell
                            key={field.id}
                            {...field}
                        >
                            {field.value}
                        </Cell>
                    );
                });
            })}
        </div>
    );
};

export default Playground;
