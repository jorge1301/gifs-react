import React, { useState } from 'react';
import ProtoTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = evt => setInputValue(evt.target.value);
    const handleSubmit = evt => {
        evt.preventDefault();
        setCategorias(cat => [inputValue,...cat]);
        setInputValue('');
    };

    return (
        <>
            <section className='titulo'>
                <h2>Add Category</h2>
                <form onSubmit={handleSubmit} className='buscador'>
                    <input type="text" placeholder='Ingrese una nueva categoria' value={inputValue} onChange={handleInputChange} />
                </form>
            </section>
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: ProtoTypes.func.isRequired
}
