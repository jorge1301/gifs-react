import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ul>
                {
                    categorias.map((category) =>
                        <GifGrid key={category} category={category} />
                    )
                }
            </ul>
        </>
    )
}

export default GifExpertApp
