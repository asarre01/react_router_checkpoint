import React, { useState, useEffect } from 'react';
import MovieCard from '../Movies/MovieCard';
import Nodata from './Nodata';


// Le composant `MovieList` affiche une liste de films filtrée en fonction des critères de recherche.

const MovieList = ({ movies, filter }) => {
    // State pour stocker les films filtrés
    const [filteredMovies, setFilteredMovies] = useState(movies);

    // Effet de mise à jour des films filtrés en fonction des changements de filtres
    useEffect(() => {
        const filtered = movies.filter(
            (movie) =>
                movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
                (!filter.rating || movie.rating >= filter.rating)
        );
        setFilteredMovies(filtered);
    }, [movies, filter]);

    // Variable pour vérifier si la liste de films filtrée est vide
    let isEmpty = false;

    // Vérifier si la liste de films filtrée est vide
    if (filteredMovies.length !== 0) {
        isEmpty = true;
    }

    // Rendu du composant
    return (
        <div style={{ minHeight: '47rem' }} className=" container ">
                <div className='row'>
                    {/* Afficher soit les cartes de films, soit le composant Nodata si la liste des films est vide ou pas. */}
                    { isEmpty ? filteredMovies.map((movie) => (<MovieCard key={movie.id} {...movie} />)) : <Nodata/>}
                </div>
        </div>
    );
};

export default MovieList;
