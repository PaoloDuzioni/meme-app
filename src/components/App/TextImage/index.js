import React, { useContext } from 'react';
import { MemeContext } from '../../../context/MemeContext';
import Title from '../../global/Title';
import TextWrapper from './TextWrapper';
import TextWrapInput from './TextWrapInput';
import TextLabel from './TextLabel';
import TextInput from './TextInput';
import TextLegenda from './TextLegenda';
import TextRange from './TextRange';

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

    const handleTextPos = (e, pos) => {
        if (pos === 'top') {
            meme.dispatch({ type: 'UPDATE_TOP_POS', payload: e.target.value });
        } else {
            meme.dispatch({
                type: 'UPDATE_BOTTOM_POS',
                payload: e.target.value,
            });
        }
    };

    const handleTextSize = (e, pos) => {
        if (pos === 'top') {
            meme.dispatch({ type: 'UPDATE_TOP_SIZE', payload: e.target.value });
        } else {
            meme.dispatch({
                type: 'UPDATE_BOTTOM_SIZE',
                payload: e.target.value,
            });
        }
    };

    // Render
    return (
        <TextWrapper className={meme.state.imageSelected ? 'active' : ''}>
            <Title as="h3" fsize="1.5" margin="0 0 1rem">
                Set here the text
            </Title>

            <TextWrapInput>
                <TextLabel htmlFor="text-top">Top text</TextLabel>
                <TextInput
                    intype="text"
                    id="text-top"
                    onChange={handleTopText}
                    value={meme.state.topText}
                    disabled={!meme.state.imageSelected}
                />
            </TextWrapInput>

            <TextWrapInput flex>
                <div>
                    <TextLabel htmlFor="pos-top">Top text position</TextLabel>
                    <TextRange
                        id="pos-top"
                        min="0"
                        max="50"
                        value={meme.state.topTextPos}
                        disabled={!meme.state.imageSelected}
                        onChange={e => handleTextPos(e, 'top')}
                    />
                </div>
                <div>
                    <TextLabel htmlFor="size-top">Top text size</TextLabel>
                    <TextRange
                        id="size-top"
                        min="1"
                        max="4"
                        step="0.1"
                        value={meme.state.topTextSize}
                        disabled={!meme.state.imageSelected}
                        onChange={e => handleTextSize(e, 'top')}
                    />
                </div>
            </TextWrapInput>

            <TextWrapInput>
                <TextLabel htmlFor="text-bottom">Bottom text</TextLabel>
                <TextInput
                    intype="text"
                    id="text-bottom"
                    onChange={handleBottomText}
                    value={meme.state.bottomText}
                    disabled={!meme.state.imageSelected}
                />
            </TextWrapInput>

            <TextWrapInput flex>
                <div>
                    <TextLabel htmlFor="pos-bottom">
                        Top text position
                    </TextLabel>
                    <TextRange
                        id="pos-bottom"
                        min="0"
                        max="50"
                        value={meme.state.bottomTextPos}
                        disabled={!meme.state.imageSelected}
                        onChange={e => handleTextPos(e, 'bottom')}
                    />
                </div>
                <div>
                    <TextLabel htmlFor="size-bottom">Top text size</TextLabel>
                    <TextRange
                        id="size-bottom"
                        min="1"
                        max="4"
                        step="0.1"
                        value={meme.state.bottomTextSize}
                        disabled={!meme.state.imageSelected}
                        onChange={e => handleTextSize(e, 'bottom')}
                    />
                </div>
            </TextWrapInput>

            <TextLegenda>Both of the above text are optional.</TextLegenda>
        </TextWrapper>
    );
};

export default TextImage;
