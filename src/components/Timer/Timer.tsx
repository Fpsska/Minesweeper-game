import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

import { convertTimerValue } from '../../utils/helpers/convertTimerValue';

// /. imports

const Timer: React.FC = () => {
    const { isGameOver } = useAppSelector(state => state.boardSlice);

    const [isTimerReset, setIsTimerReset] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);

    // /. hooks

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev: any) => prev + 1);
        }, 1000);

        isGameOver && clearInterval(timer); // disabled inc time state
        isGameOver ? setIsTimerReset(true) : setIsTimerReset(false);

        return () => clearInterval(timer);
    }, [isGameOver]);

    useEffect(() => {
        // reset time state value
        if (!isGameOver && isTimerReset) {
            setTime(0);
        }
    }, [isTimerReset, isGameOver]);

    // /. effects

    return <>{convertTimerValue(time)}</>;
};

export default Timer;
