import styled, { css } from 'styled-components';

const WrapInput = styled.div`
    margin-bottom: 1rem;
    ${props =>
        props.flex &&
        css`
            display: flex;
            & > div {
                margin-right: 1rem;
                &:last-child {
                    margin-right: 0;
                }
            }
        `}
`;

export default WrapInput;
