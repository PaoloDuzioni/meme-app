import styled from 'styled-components';

const Title = styled.h1`
    margin: ${({ margin }) => margin};
    font-size: ${({ fsize }) => fsize}em;
    color: ${({ theme }) => theme.colors.tertiary};
`;

export default Title;
