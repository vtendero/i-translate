import '../styles/textInput.scss';

const TextInput = (props) => {
    const handleChangeInput= (ev) => {
        props.handleInput(ev.currentTarget.value);
    };

    return (
        <section className='input'>
            <p className='input__text'>A veces, no encontramos las palabras adecuadas para expresarnos y se nos malinterpreta. Pero no te preocupes, con este traductor encontramos las palabras exactas que quieres decir. </p>
            <form className='input__form'>
                <label className='input__form--label'>¿Qué quieres decir?</label>
                <textarea 
                    className='input__form--textarea'
                    placeholder= 'Escribe aquí'
                    onChange= {handleChangeInput}
                    required>
                </textarea>
            </form>
        </section>
    );   
}

export default TextInput;