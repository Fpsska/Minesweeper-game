import type { ICell } from '../../types/boardTypes';

export function generateClassName(rootClass: string, cell: ICell): string {
    if (cell.isFlipped) {
        if (cell.isBomb) {
            if (cell.isExploded) return `${rootClass} flipped bomb exploded`;
            if (cell.isFlagged) return `${rootClass} flipped bomb defused`;
            return `${rootClass} flipped bomb`;
        }
        return `${rootClass} flipped`;
    }
    if (cell.isFlagged) return `${rootClass} marked`;
    if (cell.isWarned) return `${rootClass} warned`;
    return rootClass;
}
