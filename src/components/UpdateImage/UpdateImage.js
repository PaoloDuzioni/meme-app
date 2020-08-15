import React, { useState, useContext } from 'react';
import MemeContext from '../../context/MemeContext';
import ImageWrapper from './ImageWrapper';
import ImageLabel from './ImageLabel';
import ImageInput from './ImageInput';
import ImageCaption from './ImageCaption';
import ActiveImage from './ActiveImage';

const UpdateImage = () => {
    // Global state
    const meme = useContext(MemeContext);
    console.log('Context:', meme);

    // State
    const [image, setImage] = useState(null);

    // Methods
    const handleChange = e => {
        const img = e.target.files[0];
        const newImage = {
            name: img.name,
            size: img.size,
            path: URL.createObjectURL(img),
        };
        setImage(newImage);
    };

    // Render
    let label, caption;
    if (image) {
        label = (
            <ActiveImage
                top={meme.topText}
                bottom={meme.bottomText}
                path={image.path}
                altimg={image.name}
            />
        );
        caption = (
            <ImageCaption name={image.name} imgsize={image.size}></ImageCaption>
        );
    } else {
        label = 'Upload an image';
    }

    return (
        <ImageWrapper>
            <ImageLabel active={image}>{label}</ImageLabel>
            <ImageInput onChange={handleChange} />
            {caption}
        </ImageWrapper>
    );
};
export default UpdateImage;
