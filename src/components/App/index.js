import React from 'react';
import { StateProvider } from '../../context/MemeContext';
import AppWrapper from '../layout/AppWrapper';
import Container from '../layout/Container';
import MainContent from '../layout/MainContent';
import Title from '../global/Title';
import UploadImage from './UploadImage';
import TextImage from './TextImage';
import GenerateImage from './GenerateImage';

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
                        <UploadImage />

                        <TextImage />
                    </MainContent>

                    <GenerateImage />
                </StateProvider>
            </Container>
        </AppWrapper>
    );
};

export default App;
