import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import TextInput from './TextInput';
import MimiTranslator from './MimiTranslator';

const App = () => {
    const [text, setText] = useState('');
    
    const handleInput = (value) => {
        setText (value);
      }

    
    return (
        <>
            <Header />
            <main className='main'>
              <TextInput handleInput={handleInput}/>
              <MimiTranslator text={text}/>
            </main>
            <Footer />
        </>
    );
}

export default App;