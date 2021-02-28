import '../styles/mimiTranslator.scss';
import React, {useState} from 'react';

const MimiTranslator = (props) => {
    const [gif, setGif] = useState('');

    const change

    const hiddenClassName = 'hidden' ? 'hidden' : '';

  return (
        <section className='translator'>
            <div className='div'>
                <h5 className='translator__title'>Traducción:</h5>
                <p className='translator__text'>{props.text.replace(/[aeiouáéíóú]/gi, 'i')}</p>
            </div>
            <img className={`translator__gif ${hiddenClassName}`} src='https://media.tenor.com/images/8810efc9d438ccc5c3c44bbf7c6455c9/tenor.gif' alt="Gif mimimi"></img>
        </section>
  );
    
}

export default MimiTranslator;