import { useState, useEffect } from "react";
import obtenerGifs from "../helpers/getGif";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        obtenerGifs(category).then(gifs => setstate({
            data: gifs,
            loading: false
        }));
    }, [category]);


    return state;
}
