import React, { useContext } from 'react';
import { MemeContext } from '../../../context/MemeContext';
import ImageWrapper from './ImageWrapper';
import ImageLabel from './ImageLabel';
import ImageInput from './ImageInput';
import ImageCaption from './ImageCaption';
import ActiveImage from './ActiveImage';
import NoImage from './NoImage';

const UpdateImage = () => {
    // Global state
    // state to read and dispatch to modify
    const meme = useContext(MemeContext);

    // Methods
    const handleLocalImage = e => {
        const img = e.target.files[0];
        const newImage = {
            name: img.name,
            size: img.size,
            path: URL.createObjectURL(img),
        };

        if (!meme.state.imageSelected) {
            meme.dispatch({ type: 'IMAGE_SELECTED', payload: newImage });
        }
    };

    // Render
    let label, caption;
    if (meme.state.imageSelected) {
        label = (
            <ActiveImage
                top={meme.state.topText}
                topPos={meme.state.topTextPos}
                topSize={meme.state.topTextSize}
                bottom={meme.state.bottomText}
                bottomPos={meme.state.bottomTextPos}
                bottomSize={meme.state.bottomTextSize}
                path={meme.state.imageSelected.path}
                altimg={meme.state.imageSelected.name}
            />
        );
        caption = (
            <ImageCaption
                name={meme.state.imageSelected.name}
                imgsize={meme.state.imageSelected.size}
            ></ImageCaption>
        );
    } else {
        label = <NoImage>Upload an image from your computer</NoImage>;
    }

    return (
        <ImageWrapper>
            <ImageLabel active={meme.state.imageSelected !== null}>
                {label}
            </ImageLabel>
            <ImageInput onChange={handleLocalImage} />
            {caption}
        </ImageWrapper>
    );
};
export default UpdateImage;
