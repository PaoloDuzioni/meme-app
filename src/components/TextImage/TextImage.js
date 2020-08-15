import React from 'react';
import styled from 'styled-components';
import Title from '../global/Title';

// const newContext = React.createContext({ color: 'black' });

// SUB COMPONENTS
const TextWrapper = styled.section`
    width: 50%;
`;

const TextWrapInput = styled.div`
    margin-bottom: 1rem;
`;

const TextLabel = styled.label.attrs(props => ({
    htmlFor: props.point,
}))`
    display: block;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.default};
`;

const TextInput = styled.input.attrs(props => ({
    type: props.intype,
    id: props.point,
}))`
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding: 0 1rem;
    border: none;
    border-radius: 5px;
`;

// MAIN COMPONENTS
const TextImage = () => {
    return (
        <TextWrapper>
            <Title as="h3" fsize="1.5" margin="0 0 1rem">
                Add custom text
            </Title>

            <TextWrapInput>
                <TextLabel point="text-top">Top text</TextLabel>
                <TextInput intype="text" point="text-top" />
            </TextWrapInput>

            <TextWrapInput>
                <TextLabel point="text-bottom">Bottom text</TextLabel>
                <TextInput intype="text" point="text-bottom" />
            </TextWrapInput>
        </TextWrapper>
    );
};

export default TextImage;
