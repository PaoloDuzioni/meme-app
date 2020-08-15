import { createContext } from 'react';

const MemeContext = createContext({
    topText: 'Top',
    bottomText: 'Bottom',
});

export default MemeContext;
