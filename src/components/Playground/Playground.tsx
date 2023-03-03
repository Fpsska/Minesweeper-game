import React, { useEffect, useRef, useMemo } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
    setBoardData,
    switchGameWonStatus,
    switchEmojiStatuses
} from '../../app/slices/boardSlice';

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

    useEffect(() => {
        const explodedBombs = boardData
            .flat(1)
            .filter(field => field.isBomb && field.isExploded);

        const noBombsFields = boardData.flat(1).filter(field => !field.isBomb);
        const isAllFieldsFlipped = noBombsFields.every(
            field => field.isFlipped
        );

        if (
            isAllFieldsFlipped &&
            explodedBombs.length === 0 &&
            bombsCount === 0
        ) {
            dispatch(switchGameWonStatus({ status: true }));
            dispatch(switchEmojiStatuses('cool'));
        }
    }, [boardData, bombsCount]);

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
