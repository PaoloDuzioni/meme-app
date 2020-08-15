import styled from 'styled-components';

const Title = styled.h1`
    margin: ${({ margin }) => margin};
    font-size: ${({ size }) => size}em;
`;

export default Title;
