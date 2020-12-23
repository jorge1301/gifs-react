const url = 'http://api.giphy.com/v1/gifs/search?q=';
const apiKey = 'aP9KC4N0FZ1oFQC7fdzm6IX5nIrBA7XN';

const obtenerGifs = async (busqueda) => {
    const urlImagen = `${url}${busqueda}&api_key=${apiKey}&limit=10`;
    const response = await fetch(urlImagen);
    const { data } = await response.json();
    const imagenes = data.map(({ images, title, id }) => {
        const { url } = images.downsized_medium;
        return { title, id, url }
    });

    return imagenes;
}


export default obtenerGifs