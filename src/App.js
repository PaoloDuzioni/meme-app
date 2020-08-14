import React from 'react';
import Container from './components/Container';
import Button from './components/Button';

const App = () => {
    return (
        <>
            <Container>
                <h1>MEME Generator</h1>
                <Button primary>Ciao Mondo</Button>
                <Button>Ciao World</Button>
            </Container>
        </>
    );
};

export default App;
