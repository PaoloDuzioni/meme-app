import styled from 'styled-components';

const ImageWrapper = styled.div`
    position: relative;
    width: 50%;

    @media all and (max-width: ${({ theme }) => theme.layout.smWidth}) {
        width: 100%;
        margin-bottom: 2rem;
    }
`;
export default ImageWrapper;
