import type { TCell } from '../../types/boardTypes';

export function generateClassName(
    rootClass: string,
    { status, isFlipped, isBomb }: TCell
): string {
    if (isFlipped) {
        if (isBomb) {
            if (status === 'IS_EXPLODED') {
                return `${rootClass} flipped bomb exploded`;
            }
            if (status === 'IS_FLAGGED') {
                return `${rootClass} flipped bomb defused`;
            }

            return `${rootClass} flipped bomb`;
        }
        return `${rootClass} flipped`;
    }
    if (status === 'IS_FLAGGED') return `${rootClass} marked`;
    if (status === 'IS_WARNED') return `${rootClass} warned`;
    return rootClass;
}
