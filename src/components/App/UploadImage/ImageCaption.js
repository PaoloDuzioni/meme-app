import React from 'react';
import styled from 'styled-components';
import { formatSizeUnits } from '../../../utils';

const Caption = styled.div`
    margin-top: 1rem;
    p {
        font-size: 0.875em;
        b {
            font-weight: ${({ theme }) => theme.typography.normal};
            color: ${({ theme }) => theme.colors.quaternary};
        }
    }
`;

const ImageCaption = ({ name, imgsize }) => {
    return (
        <Caption>
            <p>
                <b>Image name:</b> {name}
            </p>
            <p>
                <b>Image size:</b> {formatSizeUnits(imgsize)}
            </p>
        </Caption>
    );
};

export default ImageCaption;
