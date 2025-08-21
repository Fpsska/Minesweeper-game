import React, { type FC } from 'react';

import SvgTemplate from '../../../SvgTemplate/SvgTemplate';

import type { TCell } from '../../../../../types/boardTypes';

// /. imports

interface IIcon extends TCell {}

// /. interfaces

function getRenderValue(
    cell: TCell
): string | number | React.JSX.Element | null {
    const { value, isFlipped, isFlagged, isWarned, isBomb, isDefused } = cell;

    if (isFlagged) {
        return <SvgTemplate name="flag" />;
    }
    if (isWarned) {
        return <SvgTemplate name="warned" />;
    }
    if (isBomb) {
        if (isFlipped) return <SvgTemplate name="bomb" />;
        if (isFlipped && isDefused) return <SvgTemplate name="bomb-defused" />;
        return null;
    }

    return value;
}

const Icon: FC<IIcon> = (props: IIcon) => {
    return getRenderValue(props);
};

export default Icon;
