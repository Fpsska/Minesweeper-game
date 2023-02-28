import React, { useState, useEffect } from 'react';

// /. imports

const Timer: React.FC = () => {
    const [time, setTime] = useState<number>(99);

    // /. hooks

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev: any) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // /. effects

    return <>{time < 10 ? `00${time}` : time > 10 ? `0${time}` : time}</>;
};

export default Timer;
