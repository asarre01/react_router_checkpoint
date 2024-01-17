import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCardTrailer from './MovieCardTrailer';
import { useParams } from 'react-router-dom';

// Composant représentant la vue détaillée d'une bande-annonce
export default function TrailerView({ movies }) {
    // Utilisation de useParams pour obtenir le paramètre d'URL
    const params = useParams();
    const key = params.id;
    const movie = movies[key];

    // Affichage des informations de la bande-annonce et de la carte du film
    return (
        <div className='container mvh-75 position-absolute top-50 start-50 translate-middle d-flex flex-column align-i bg-black rounded'>
        {/* Conteneur avec une ratio pour l'iframe de la bande-annonce */}
        <div class="ratio ratio-21x9">
            {/* Iframe pour la bande-annonce */}
            <iframe src={movie.trailerURL} title={movie.title} allowFullScreen ></iframe>
        </div>
        
        {/* Composant MovieCardTrailer pour afficher les détails du film */}
        <div>
            <MovieCardTrailer {...movie} />
        </div>
        </div>
    );
}
