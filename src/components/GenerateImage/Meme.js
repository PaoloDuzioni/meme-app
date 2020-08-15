import React from 'react';
import styled from 'styled-components';
import Title from '../global/Title';

const Wrapper = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding: 2rem 1rem;
    background-color: rgba(0, 0, 0, 0.8);
`;

const MemeTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.white};
`;

const Close = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: ${({ theme }) => theme.colors.quaternary};
    cursor: pointer;
`;

export const Meme = ({ path, close }) => {
    return (
        <Wrapper>
            <MemeTitle as="h4" fsize="1.5" margin="0 0 2rem">
                Click the image to download
            </MemeTitle>
            <a href={path} download="my-awesome-meme.png">
                <img src={path} alt="Generated Meme" />
            </a>

            <Close onClick={close}>Close</Close>
        </Wrapper>
    );
};

export default Meme;
