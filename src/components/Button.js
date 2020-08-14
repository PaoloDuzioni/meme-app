import React from 'react';
import styled, { css } from 'styled-components';

// Styled components
const Btn = styled.button`
    display: inline-block;
    margin: 0.5rem;
    padding: 1rem;
    font-size: 16px;
    color: #fff;
    border: 0;
    outline: none;
    cursor: pointer;
    // Modifica singola proprietà
    background: ${(props) => (props.primary ? 'aqua' : '#333')};
    // Modifica molteplici proprietà
    ${({ primary }) =>
        primary &&
        css`
            border-radius: 4px;
            color: rgba(0, 0, 0, 0.5);
        `}
`;

// Override a component (your own or 3rd party like materia-ui)
const ShadowButton = styled(Btn)`
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

// Main Component
const Button = ({ primary, children }) => {
    // Methods
    const handleClick = () => {
        alert('Click!!');
    };

    // Render
    return (
        <ShadowButton primary={primary} onClick={handleClick}>
            {children}
        </ShadowButton>
    );
};

export default Button;
