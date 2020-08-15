import React from 'react';
import styled from 'styled-components';

// Sub components
const Wrapper = styled.div`
    position: relative;
`;

const Text = styled.div`
    position: absolute;
    ${[props => props.pos]}: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2em;
    text-transform: uppercase;
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.black};
`;

const Image = styled.img.attrs(({ path, altimg }) => ({
    src: path,
    alt: altimg,
}))`
    display: block;
`;

// Main Components
const ActiveImage = ({ top, bottom, path, altimg }) => {
    return (
        <Wrapper>
            <Text pos="top">{top}</Text>
            <Image path={path} altimg={altimg} />
            <Text pos="bottom">{bottom}</Text>
        </Wrapper>
    );
};

export default ActiveImage;
