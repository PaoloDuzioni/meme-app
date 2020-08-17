import styled from 'styled-components';

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.default};
`;

export default Label;
