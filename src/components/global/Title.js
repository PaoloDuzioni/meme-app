import styled from 'styled-components';

const Title = styled.h1`
    margin: ${({ margin }) => margin};
    font-size: ${({ fsize }) => fsize}em;
    color: ${props =>
        props.primary
            ? props.theme.colors.primary
            : props.theme.colors.tertiary};
`;

export default Title;
