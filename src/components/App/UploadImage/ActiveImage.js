import React from 'react';
import styled, { css } from 'styled-components';

// Sub components
const Wrapper = styled.div.attrs({
    id: 'active-image',
})`
    position: relative;
    width: 100%;
`;

const Text = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    padding: 0 1rem;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;
    font-size: ${props => props.fsize}em;
    text-shadow: 0px 0px 5px ${({ theme }) => theme.colors.black};
    ${props =>
        props.pos === 'top' &&
        css`
            top: ${props => props.posPlace}%;
        `}
    ${props =>
        props.pos === 'bottom' &&
        css`
            bottom: ${props => props.posPlace}%;
        `}
`;

const Image = styled.img.attrs(({ path, altimg }) => ({
    src: path,
    alt: altimg,
}))`
    display: block;
    width: 100%;
`;

// Main Components
const ActiveImage = ({
    top,
    topPos,
    topSize,
    bottom,
    bottomPos,
    bottomSize,
    path,
    altimg,
}) => {
    return (
        <Wrapper>
            <Text pos="top" posPlace={topPos} fsize={topSize}>
                {top}
            </Text>
            <Image path={path} altimg={altimg} />
            <Text pos="bottom" posPlace={bottomPos} fsize={bottomSize}>
                {bottom}
            </Text>
        </Wrapper>
    );
};

export default ActiveImage;
