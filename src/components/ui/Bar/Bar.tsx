import { type FC } from 'react';

import gameIcon from '../../../assets/icons/game-icon.svg';

import './bar.scss';
import { useAppDispatch } from '../../../app/hooks';
import { restartGame } from '../../../app/slices/boardSlice';
import SvgTemplate from '../SvgTemplate/SvgTemplate';

// /. imports

const Bar: FC = () => {
    const dispatch = useAppDispatch();

    // /. hooks

    return (
        <div className="board__bar">
            <div className="board__logo">
                <a
                    className="board__image"
                    href="#"
                >
                    <img
                        src={gameIcon}
                        alt="game-icon"
                    />
                </a>
                <h1 className="board__name">Minesweeper</h1>
            </div>
            <div className="board__controls controls">
                <button
                    className="controls__button controls__button_collapsed"
                    type="button"
                    aria-label="collapse game window"
                >
                    <span>
                        <SvgTemplate name="collapse-window" />
                    </span>
                </button>
                <button
                    className="controls__button controls__button_uncollapsed"
                    type="button"
                    aria-label="uncollapse game window"
                >
                    <span>
                        <SvgTemplate name="uncollapse-window" />
                    </span>
                </button>
                <button
                    className="controls__button controls__button_closed"
                    type="button"
                    aria-label="restart game"
                    onClick={() => dispatch(restartGame())}
                >
                    <span>
                        <SvgTemplate name="close-window" />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Bar;
