import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const GlobalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap');

    ${emotionReset}
    *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    html{
        font-size: 12px;
    }

    body {
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        min-height: calc(100vh - 56px);
        width: 100%;
        background-color: white;
    }

    #root {
        font-family: 'Noto Sans KR', sans-serif;
        height: calc(100vh - 56px);
    }

    ul, ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        outline: none;
        color: black;
        &:hover,
        &:active,
        &:visited,
        &:focus {
            text-decoration: none;
            color: inherit;
            font-weight: 600;
        }
    }

    input {
        font-family: inherit;
    }

    button {
        padding: 0;
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
        font-family: inherit;
        &[disabled] {
            cursor: not-allowed;
        }
    }
`;

export default GlobalStyles;