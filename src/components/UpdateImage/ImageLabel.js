import styled from 'styled-components';

const ImageLabel = styled.label.attrs({
    htmlFor: 'up-img',
})`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    min-height: 450px;
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    background-size: contain;
    border-radius: 5px;
    font-weight: ${({ theme }) => theme.typography.bold};
    font-size: 2em;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;

export default ImageLabel;
