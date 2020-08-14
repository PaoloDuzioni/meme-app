import React from 'react';
import styled from 'styled-components';
import Container from './components/Container';
import Title from './components/Title';
import UpdateImage from './components/UpdateImage/UpdateImage';
import Button from './components/Button';

const AppStyles = styled.div`
    margin: 3rem 0;
`;

const App = () => {
    return (
        <AppStyles>
            <Container>
                <Title size="2" margin="0 0 2rem">
                    MEME Generator
                </Title>

                {/* 
                    Create a form board component here
                    to organize image upload and the two
                    text fileds for the meme generation
                 */}
                <UpdateImage />

                <Button primary margin="0 1rem 1rem 0">
                    Generate a new MEME
                </Button>
            </Container>
        </AppStyles>
    );
};

export default App;
