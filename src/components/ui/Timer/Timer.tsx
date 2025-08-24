import { type FC, useState, useEffect } from 'react';

import { useAppSelector } from '../../../app/hooks';

import { convertTimerValue } from '../../../utils/helpers/convertTimerValue';

// /. imports

const Timer: FC = () => {
    const [time, setTime] = useState<number>(0);

    const gameStatus = useAppSelector((state) => state.boardSlice.gameStatus);

    // /. hooks

    useEffect(() => {
        if (gameStatus === 'initial') return setTime(0);

        const interval = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        if (['win', 'lose'].includes(gameStatus)) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [gameStatus]);

    // /. effects

    return <>{convertTimerValue(time)}</>;
};

export default Timer;
