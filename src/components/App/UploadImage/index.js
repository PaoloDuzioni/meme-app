import React, { useState, useContext } from 'react';
import { MemeContext } from '../../../context/MemeContext';
import ImageWrapper from './ImageWrapper';
import ImageLabel from './ImageLabel';
import ImageInput from './ImageInput';
import ImageCaption from './ImageCaption';
import ActiveImage from './ActiveImage';
import NoImage from './NoImage';
import WrapInput from '../../global/WrapInput';
import Label from '../../global/Label';
import Input from '../../global/Input';
import ErrorText from './Errortext';

const UpdateImage = () => {
    // Global state
    // state to read and dispatch to modify
    const meme = useContext(MemeContext);

    // Local State
    const [image, setImage] = useState(null);
    const [urlExternal, setUrlExternal] = useState('');
    const [urlError, setUrlError] = useState(false);

    // Methods
    const handleLocalImage = e => {
        const img = e.target.files[0];
        const newImage = {
            name: img.name,
            size: img.size,
            path: URL.createObjectURL(img),
        };
        setImage(newImage);
        // clean eventaul external image url
        setUrlExternal('');
        setUrlError(false);

        if (!meme.state.imageSelected) {
            meme.dispatch({ type: 'IMAGE_SELECTED', payload: true });
        }
    };

    const handleExternalImage = e => {
        const url = e.target.value;
        setUrlExternal(url);

        // Check url
        if (
            url.match('^(http|https)://') &&
            url.match('(gif|jpg|jpeg|tiff|png)$')
        ) {
            setUrlError(false);

            const newImage = {
                name: 'External image',
                size: 'n.d.',
                path: url,
            };
            setImage(newImage);

            if (!meme.state.imageSelected) {
                meme.dispatch({ type: 'IMAGE_SELECTED', payload: true });
            }
        } else {
            setUrlError(true);
        }
    };

    // Render
    let label, caption, error;
    if (image) {
        label = (
            <ActiveImage
                top={meme.state.topText}
                topPos={meme.state.topTextPos}
                topSize={meme.state.topTextSize}
                bottom={meme.state.bottomText}
                bottomPos={meme.state.bottomTextPos}
                bottomSize={meme.state.bottomTextSize}
                path={image.path}
                altimg={image.name}
            />
        );
        caption = (
            <ImageCaption name={image.name} imgsize={image.size}></ImageCaption>
        );
    } else {
        label = <NoImage>Upload an image from your computer</NoImage>;
    }

    if (urlError) {
        error = <ErrorText>Url format invalid.</ErrorText>;
    }

    return (
        <ImageWrapper>
            <ImageLabel active={image}>{label}</ImageLabel>
            <ImageInput onChange={handleLocalImage} />
            {caption}

            {/* <WrapInput>
                <Label htmlFor="image-url">Upload an image from URL</Label>
                <Input
                    type="url"
                    value={urlExternal}
                    placeholder="https://..."
                    onChange={handleExternalImage}
                />
                {error}
            </WrapInput> */}
        </ImageWrapper>
    );
};
export default UpdateImage;
