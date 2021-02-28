import '../styles/mimiTranslator.scss';
import React, {useState} from 'react';

const MimiTranslator = (props) => {
  return (
        <section className='translator'>
            <div className='div'>
                <h5 className='translator__title'>Traducción:</h5>
                <p className='translator__text'>{props.text.replace(/[aeiouáéíóú]/gi, 'i')}</p>
            </div>
        </section>
  );
    
}

export default MimiTranslator;