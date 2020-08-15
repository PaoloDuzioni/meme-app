import React from 'react';
import AppWrapper from './components/layout/AppWrapper';
import Container from './components/layout/Container';
import MainContent from './components/layout/MainContent';
import Title from './components/global/Title';
import UpdateImage from './components/UpdateImage/UpdateImage';
import Button from './components/global/Button';
import TextImage from './components/TextImage/TextImage';

const App = () => {
    return (
        <AppWrapper>
            <Container>
                <Title fsize="2" margin="0 0 2rem">
                    MEME Generator
                </Title>

                <MainContent>
                    <UpdateImage />

                    <TextImage />
                </MainContent>

                <Button primary margin="0 1rem 1rem 0">
                    Generate a new MEME
                </Button>
            </Container>
        </AppWrapper>
    );
};

export default App;
