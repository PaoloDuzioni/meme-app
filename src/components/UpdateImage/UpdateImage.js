import React, { useState } from 'react';

import ImageWrapper from './ImageWrapper';
import ImageLabel from './ImageLabel';
import ImageInput from './ImageInput';
import ImageCaption from './ImageCaption';

// Main component
const UpdateImage = () => {
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
        label = <img src={image.path} alt={image.name} />;
        caption = (
            <ImageCaption>
                <p>
                    <b>Image name:</b> {image.name}
                </p>
                <p>
                    <b>Image size:</b> {image.size} bytes
                </p>
            </ImageCaption>
        );
    } else {
        label = 'Upload an image';
    }

    return (
        <ImageWrapper>
            <ImageLabel>{label}</ImageLabel>
            <ImageInput onChange={handleChange} />
            {caption}
        </ImageWrapper>
    );
};
export default UpdateImage;
