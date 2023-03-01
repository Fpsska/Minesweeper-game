import React, { useState, useEffect } from 'react';

import { useAppSelector } from '../../app/hooks';

// /. imports

const Timer: React.FC = () => {
    const { isGameOver } = useAppSelector(state => state.boardSlice);

    const [time, setTime] = useState<number>(0);

    // /. hooks

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev: any) => prev + 1);
        }, 1000);

        isGameOver && clearInterval(timer);

        return () => clearInterval(timer);
    }, [isGameOver]);

    // /. effects

    return <>{time < 10 ? `00${time}` : time > 10 ? `0${time}` : time}</>;
};

export default Timer;
