import React from 'react'

export const GifGridItems = ({ title, url }) => {
    return (
        <div className='card'>
            <img className='imagen-gif' loading='lazy' src={url} alt={title} />
            <h4>{title}</h4>
        </div>
    )
}
