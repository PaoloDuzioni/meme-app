import React from 'react';
import { StateProvider } from './context/MemeContext';
import AppWrapper from './components/layout/AppWrapper';
import Container from './components/layout/Container';
import MainContent from './components/layout/MainContent';
import Title from './components/global/Title';
import UpdateImage from './components/UpdateImage/UpdateImage';
import TextImage from './components/TextImage/TextImage';
import GenerateImage from './components/GenerateImage/GenerateImage';

const App = () => {
    return (
        <AppWrapper>
            <Container>
                <Title primary fsize="2" margin="0 0 2rem">
                    MEME Generator
                </Title>

                {/* Shared global state from here on */}
                <StateProvider>
                    <MainContent>
                        <UpdateImage />

                        <TextImage />
                    </MainContent>

                    <GenerateImage />
                </StateProvider>
            </Container>
        </AppWrapper>
    );
};

export default App;
