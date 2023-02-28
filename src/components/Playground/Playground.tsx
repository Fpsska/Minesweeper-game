import React, { useState, useEffect, useRef } from 'react';

import { useAppSelector } from '../../app/hooks';

import { generateBoard } from '../../helpers/generateBoard';

import { Irow } from '../../Types/boardTypes';

import Cell from '../Cell/Cell';

import './playground.scss';

// /. imports

const Playground: React.FC = () => {
    const { colCount, rowCount, bombsCount } = useAppSelector(
        state => state.boardSlice
    );

    const [board, setBoard] = useState<Irow[][]>([]);

    const playgroundRef = useRef<HTMLDivElement>(null!);

    // /. hooks

    useEffect(() => {
        playgroundRef.current.style.setProperty('--size', String(colCount));
    }, [colCount]);

    useEffect(() => {
        const newBoard = generateBoard(colCount, rowCount, bombsCount);
        // console.log(newBoard);
        setBoard(newBoard);
    }, [colCount, rowCount, bombsCount]);

    // /. effects

    return (
        <div
            className="playground-area"
            ref={playgroundRef}
        >
            {board.map(row => {
                return row.map((field: Irow) => {
                    return <Cell key={field.id}>{field.value}</Cell>;
                });
            })}
        </div>
    );
};

export default Playground;
