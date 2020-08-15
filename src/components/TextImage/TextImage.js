import React, { useContext } from 'react';
import { MemeContext } from '../../context/MemeContext';
import Title from '../global/Title';
import TextWrapper from './TextWrapper';
import TextWrapInput from './TextWrapInput';
import TextLabel from './TextLabel';
import TextInput from './TextInput';
import TextLegenda from './TextLegenda';

const TextImage = () => {
    // Global state
    // state to read and dispatch to modify
    const meme = useContext(MemeContext);

    const handleTopText = e => {
        meme.dispatch({ type: 'UPDATE_TOP', payload: e.target.value });
    };

    const handleBottomText = e => {
        meme.dispatch({ type: 'UPDATE_BOTTOM', payload: e.target.value });
    };

    // Render
    return (
        <TextWrapper className={meme.state.imageSelected ? 'active' : ''}>
            <Title as="h3" fsize="1.5" margin="0 0 1rem">
                Set here the text
            </Title>

            <TextWrapInput>
                <TextLabel point="text-top">Top text</TextLabel>
                <TextInput
                    intype="text"
                    point="text-top"
                    onChange={handleTopText}
                    value={meme.state.topText}
                    disabled={!meme.state.imageSelected}
                />
            </TextWrapInput>

            <TextWrapInput>
                <TextLabel point="text-bottom">Bottom text</TextLabel>
                <TextInput
                    intype="text"
                    point="text-bottom"
                    onChange={handleBottomText}
                    value={meme.state.bottomText}
                    disabled={!meme.state.imageSelected}
                />
            </TextWrapInput>

            <TextLegenda>Both of the above text are optional.</TextLegenda>
        </TextWrapper>
    );
};

export default TextImage;
