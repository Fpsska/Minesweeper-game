import React, { type FC } from 'react';

import SvgTemplate from '../../../SvgTemplate/SvgTemplate';

import type { TCell } from '../../../../../types/boardTypes';

// /. imports

interface IIcon extends TCell {}

// /. interfaces

function getRenderValue(
    cell: TCell
): string | number | React.JSX.Element | null {
    const { value, isFlipped, isBomb, status } = cell;

    if (!isFlipped) {
        if (status === 'IS_FLAGGED') return <SvgTemplate name="flag" />;
        if (status === 'IS_WARNED') return <SvgTemplate name="warned" />;
    }

    if (isBomb) {
        if (isFlipped) {
            if (status === 'IS_DEFUSED') {
                return <SvgTemplate name="bomb-defused" />;
            }
            if (['IS_EXPLODED', 'IS_COMPUTED'].includes(status)) {
                return <SvgTemplate name="bomb" />;
            }
        }
        return null;
    }

    return value;
}

const Icon: FC<IIcon> = (props: IIcon) => {
    return getRenderValue(props);
};

export default Icon;
