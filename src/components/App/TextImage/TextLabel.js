import styled from 'styled-components';

const TextLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.default};
`;

export default TextLabel;
