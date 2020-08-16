import styled from 'styled-components';

const ImageLabel = styled.label.attrs({
    htmlFor: 'up-img',
})`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 450px;
    min-height: ${({ active }) => (active ? '0px' : '450px')};
    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    font-weight: ${({ theme }) => theme.typography.bold};
    font-size: 2em;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    @media all and (max-width: ${({ theme }) => theme.layout.smWidth}) {
        max-width: 100%;
        margin-right: 0;
    }

    @media all and (max-width: ${({ theme }) => theme.layout.xsWidth}) {
        margin-right: 0;
        min-height: ${({ active }) => (active ? '0px' : '300px')};
        font-size: 1.5em;
    }
`;

export default ImageLabel;
