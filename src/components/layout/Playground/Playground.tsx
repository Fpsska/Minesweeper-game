import { type FC, useRef, useEffect, useLayoutEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { setBoardData } from '../../../app/slices/boardSlice';

import { generateBoard } from '../../../utils/generateBoard';

import Cell from '../../ui/Cell/Cell';

import './playground.scss';

// /. imports

const Playground: FC = () => {
    const boardSize = useAppSelector((state) => state.boardSlice.boardSize);
    const bombsCount = useAppSelector((state) => state.boardSlice.bombsCount);
    const boardData = useAppSelector((state) => state.boardSlice.boardData);

    const dispatch = useAppDispatch();
    const playgroundRef = useRef<HTMLDivElement | null>(null);

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

    // /. effects

    return (
        <div
            className="playground-area"
            ref={playgroundRef}
        >
            {boardData.map((row) => {
                return row.map((cell) => {
                    return (
                        <Cell
                            key={cell.id}
                            {...cell}
                        />
                    );
                });
            })}
        </div>
    );
};

export default Playground;
