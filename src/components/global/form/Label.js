import styled from 'styled-components';

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: ${props =>
        props.primary
            ? props.theme.colors.primary
            : props.theme.colors.default};
`;

export default Label;
