import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputClean = inputValue.trim();
        if (inputClean <= 1) return;
        onNewCategory(inputClean);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs..."
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
