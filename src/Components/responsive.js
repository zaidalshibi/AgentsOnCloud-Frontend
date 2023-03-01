import { css } from 'styled-components';

export const mobile = props => {
    return css`
    @media only screen and (max-width: 420px) {
        ${props}
    }
    `;
};
export const tab = props => {
    return css`
    @media only screen and (min-width: 420px) and (max-width: 768px){
        ${props}
    }
    `;
};