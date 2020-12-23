import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ({ category }) => {
    const { data: gifs, loading } = useFetchGifs(category);
    return (
        <>
            <h4 className='animate__animated animate__flash'>{loading && <p className='titulo'>Cargando</p>}</h4>
            <h3 className='titulo'>{category}</h3>
            <div className='containerFlex animate__animated animate__fadeIn'>
                {
                    gifs.map((image) =>
                        <GifGridItems key={image.id} {...image} />
                    )
                }
            </div>
        </>
    )
}
