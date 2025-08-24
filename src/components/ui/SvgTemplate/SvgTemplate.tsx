import { type FC } from 'react';

import './svg-template.scss';

// /. imports

interface ISvgTemplate {
    name:
        | 'flag'
        | 'warned'
        | 'bomb'
        | 'bomb-defused'
        | 'collapse-window'
        | 'uncollapse-window'
        | 'close-window';
}

// /. interfaces

const SvgTemplate: FC<ISvgTemplate> = ({ name }) => {
    switch (name) {
        case 'flag':
            return (
                <svg
                    className="flag-icon"
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="3.66257"
                        width="0.915642"
                        height="8.6986"
                        fill="black"
                    />
                    <rect
                        y="7.32514"
                        width="7.32514"
                        height="1.83128"
                        fill="#010000"
                    />
                    <rect
                        x="1.83129"
                        y="6.4095"
                        width="3.66257"
                        height="0.915642"
                        fill="#010000"
                    />
                    <rect
                        x="2.7469"
                        width="1.83128"
                        height="4.57821"
                        fill="#FC0D1B"
                    />
                    <rect
                        x="0.915609"
                        y="0.915642"
                        width="1.83128"
                        height="2.74693"
                        fill="#FC0D1B"
                    />
                    <rect
                        y="1.83128"
                        width="0.915642"
                        height="0.915642"
                        fill="#FC0D1B"
                    />
                </svg>
            );
        case 'warned':
            return (
                <svg
                    className="warned-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(5 5)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip1_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(6 5)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip2_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(6 4)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip3_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(6 3)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip4_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(7 3)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip5_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(8 3)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip6_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(9 3)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip7_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(9 4)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip8_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(10 4)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip9_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(10 5)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip10_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(9 5)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip11_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(9 6)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip12_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(9 7)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip13_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(8 7)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip14_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(8 8)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip15_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(7 8)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip16_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(7 9)"
                            fill="black"
                        />
                    </g>
                    <rect
                        width="1"
                        height="1"
                        transform="translate(7 11)"
                        fill="black"
                    />
                    <rect
                        width="1"
                        height="1"
                        transform="translate(8 11)"
                        fill="black"
                    />
                    <rect
                        width="1"
                        height="1"
                        transform="translate(8 12)"
                        fill="black"
                    />
                    <rect
                        width="1"
                        height="1"
                        transform="translate(7 12)"
                        fill="black"
                    />
                    <g clipPath="url(#clip17_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(8 9)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip18_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(10 6)"
                            fill="black"
                        />
                    </g>
                    <g clipPath="url(#clip19_283_6246)">
                        <rect
                            width="1"
                            height="1"
                            transform="translate(5 4)"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(5 5)"
                            />
                        </clipPath>
                        <clipPath id="clip1_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(6 5)"
                            />
                        </clipPath>
                        <clipPath id="clip2_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(6 4)"
                            />
                        </clipPath>
                        <clipPath id="clip3_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(6 3)"
                            />
                        </clipPath>
                        <clipPath id="clip4_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(7 3)"
                            />
                        </clipPath>
                        <clipPath id="clip5_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(8 3)"
                            />
                        </clipPath>
                        <clipPath id="clip6_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(9 3)"
                            />
                        </clipPath>
                        <clipPath id="clip7_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(9 4)"
                            />
                        </clipPath>
                        <clipPath id="clip8_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(10 4)"
                            />
                        </clipPath>
                        <clipPath id="clip9_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(10 5)"
                            />
                        </clipPath>
                        <clipPath id="clip10_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(9 5)"
                            />
                        </clipPath>
                        <clipPath id="clip11_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(9 6)"
                            />
                        </clipPath>
                        <clipPath id="clip12_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(9 7)"
                            />
                        </clipPath>
                        <clipPath id="clip13_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(8 7)"
                            />
                        </clipPath>
                        <clipPath id="clip14_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(8 8)"
                            />
                        </clipPath>
                        <clipPath id="clip15_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(7 8)"
                            />
                        </clipPath>
                        <clipPath id="clip16_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(7 9)"
                            />
                        </clipPath>
                        <clipPath id="clip17_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(8 9)"
                            />
                        </clipPath>
                        <clipPath id="clip18_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(10 6)"
                            />
                        </clipPath>
                        <clipPath id="clip19_283_6246">
                            <rect
                                width="1"
                                height="1"
                                fill="white"
                                transform="translate(5 4)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'bomb':
            return (
                <svg
                    className="bomb-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="7.8938"
                        y="3"
                        width="0.815642"
                        height="10.6034"
                        fill="black"
                    />
                    <rect
                        x="13.6033"
                        y="7.8938"
                        width="0.815642"
                        height="10.6034"
                        transform="rotate(90 13.6033 7.8938)"
                        fill="black"
                    />
                    <rect
                        x="6.26245"
                        y="4.63135"
                        width="4.07821"
                        height="7.34078"
                        fill="black"
                    />
                    <rect
                        x="11.9722"
                        y="6.26245"
                        width="4.07821"
                        height="7.34078"
                        transform="rotate(90 11.9722 6.26245)"
                        fill="black"
                    />
                    <rect
                        x="5.44702"
                        y="5.44702"
                        width="5.7095"
                        height="5.7095"
                        fill="black"
                    />
                    <rect
                        x="11.1565"
                        y="4.63135"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="11.1565"
                        y="11.1565"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="4.63135"
                        y="4.63135"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="4.63135"
                        y="11.1565"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="6.26245"
                        y="6.26245"
                        width="1.63128"
                        height="1.63128"
                        fill="white"
                    />
                </svg>
            );
        case 'bomb-defused':
            return (
                <svg
                    className="bomb-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="7.8938"
                        y="3"
                        width="0.815642"
                        height="10.6034"
                        fill="black"
                    />
                    <rect
                        x="13.6033"
                        y="7.8938"
                        width="0.815642"
                        height="10.6034"
                        transform="rotate(90 13.6033 7.8938)"
                        fill="black"
                    />
                    <rect
                        x="6.26245"
                        y="4.63135"
                        width="4.07821"
                        height="7.34078"
                        fill="black"
                    />
                    <rect
                        x="11.9722"
                        y="6.26245"
                        width="4.07821"
                        height="7.34078"
                        transform="rotate(90 11.9722 6.26245)"
                        fill="black"
                    />
                    <rect
                        x="5.44702"
                        y="5.44702"
                        width="5.7095"
                        height="5.7095"
                        fill="black"
                    />
                    <rect
                        x="11.1565"
                        y="4.63135"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="11.1565"
                        y="11.1565"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="4.63135"
                        y="4.63135"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="4.63135"
                        y="11.1565"
                        width="0.815642"
                        height="0.815642"
                        fill="black"
                    />
                    <rect
                        x="6.26245"
                        y="6.26245"
                        width="1.63128"
                        height="1.63128"
                        fill="white"
                    />
                    <g clipPath="url(#clip0_54_9086)">
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(2.25 13.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(3.1731 13.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(3.1731 12.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(4.09619 12.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(4.09619 11.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(5.01929 11.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(5.01929 10.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(5.94238 10.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(5.94238 9.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(6.86548 9.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(6.86548 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(7.78857 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(8.71143 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(8.71143 9.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(9.63452 9.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(9.63452 10.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(10.5576 10.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(10.5576 11.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(11.4807 11.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(11.4807 12.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(12.4038 12.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(12.4038 13.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="translate(13.3269 13.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 14.25 3.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 13.3269 3.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 13.3269 4.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 12.4038 4.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 12.4038 5.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 11.4807 5.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 11.4807 6.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 10.5576 6.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 10.5576 7.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 9.63452 7.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 9.63452 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 8.71143 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 7.78857 8.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 7.78857 7.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 6.86548 7.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 6.86548 6.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 5.94238 6.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 5.94238 5.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 5.01929 5.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 5.01929 4.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 4.09619 4.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 4.09619 3.6001)"
                            fill="#FC0D1B"
                        />
                        <rect
                            width="0.923077"
                            height="1"
                            transform="matrix(-1 0 0 -1 3.1731 3.6001)"
                            fill="#FC0D1B"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_54_9086">
                            <rect
                                width="12"
                                height="12"
                                fill="white"
                                transform="translate(2.25 2.6001)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            );
        case 'collapse-window':
            return (
                <svg
                    width="6"
                    height="2"
                    viewBox="0 0 6 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0H6V2H0V0Z"
                        fill=""
                    />
                </svg>
            );
        case 'uncollapse-window':
            return (
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 9 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 0H0V9H9V0ZM8 2H1V8H8V2Z"
                        fill=""
                    />
                </svg>
            );
        case 'close-window':
            return (
                <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z"
                        fill=""
                    />
                </svg>
            );
        default:
            return null;
    }
};

export default SvgTemplate;
