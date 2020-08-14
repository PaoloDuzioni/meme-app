import React, { useState } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 1rem;
`;

const ImageLabel = styled.label.attrs({
    htmlFor: 'up-img',
})`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    min-height: 450px;
    margin: 0 1rem 1rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    background-size: contain;
    border-radius: 5px;
    font-weight: ${({ theme }) => theme.typography.bold};
    font-size: 2em;
    color: ${({ theme }) => theme.colors.default};
    cursor: pointer;
`;

const ImageIn = styled.input.attrs({
    id: 'up-img',
    type: 'file',
})`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    opacity: 0;
`;

const ImageCaption = styled.div`
    p {
        margin-bottom: 1rem;
    }
`;

// Main component
const ImageInput = () => {
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        console.log(e.target.files[0]);
        const img = e.target.files[0];
        const newImage = {
            name: img.name,
            size: img.size,
            path: URL.createObjectURL(img),
        };
        setImage(newImage);
    };

    return (
        <ImageWrapper>
            {/* How to upload un image from computer with react and node
            https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/ */}
            <ImageLabel>
                {image ? (
                    <img src={image.path} alt={image.name} />
                ) : (
                    'Upload an image'
                )}
            </ImageLabel>
            <ImageIn onChange={handleChange} />
            {image && (
                <ImageCaption>
                    <p>
                        <b>Image name:</b> {image.name}
                    </p>
                    <p>
                        <b>Image size:</b> {image.size}
                    </p>
                </ImageCaption>
            )}
        </ImageWrapper>
    );
};
export default ImageInput;
