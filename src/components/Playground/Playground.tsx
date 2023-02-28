import React, { useEffect, useRef } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import { setBoardData } from '../../app/slices/boardSlice';

import { generateBoard } from '../../helpers/generateBoard';

import { Irow } from '../../Types/boardTypes';

import Cell from '../Cell/Cell';

import './playground.scss';

// /. imports

const Playground: React.FC = () => {
    const { colCount, rowCount, bombsCount, boardData } = useAppSelector(
        state => state.boardSlice
    );

    const dispatch = useAppDispatch();

    const playgroundRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    useEffect(() => {
        playgroundRef.current.style.setProperty('--size', String(colCount));
    }, [colCount]);

    useEffect(() => {
        const newBoard = generateBoard(colCount, rowCount, bombsCount);
        dispatch(setBoardData(newBoard));
    }, [colCount, rowCount, bombsCount]);

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
                            id={field.id}
                            isFlipped={field.IsFlipped}
                            isFlagged={field.isFlagged}
                            isWarned={field.isWarned}
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
