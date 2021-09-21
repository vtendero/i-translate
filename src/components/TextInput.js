import '../styles/textInput.scss';

const TextInput = (props) => {
    const handleChangeInput= (ev) => {
        props.handleInput(ev.currentTarget.value);
    };

    return (
        <section className='input'>
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