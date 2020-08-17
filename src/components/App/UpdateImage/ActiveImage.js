import React from 'react';
import styled from 'styled-components';

// Sub components
const Wrapper = styled.div.attrs({
    id: 'active-image',
})`
    position: relative;
    width: 100%;
`;

const Text = styled.div`
    position: absolute;
    ${[props => props.pos]}: 1rem;
    left: 0;
    width: 100%;
    padding: 0 1rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    font-size: 2em;
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.black};
`;

const Image = styled.img.attrs(({ path, altimg }) => ({
    src: path,
    alt: altimg,
}))`
    display: block;
    width: 100%;
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
