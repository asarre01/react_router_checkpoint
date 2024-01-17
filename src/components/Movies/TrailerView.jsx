import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCardTrailer from './MovieCardTrailer'
import { useParams } from 'react-router-dom';

export default function TrailerView({movies}) {
    const params = useParams();
    const key = params.id;
    const movie = movies[key]
    console.log(movie);
    return (
        <div className='container mvh-75 position-absolute top-50 start-50 translate-middle d-flex flex-column align-i bg-black rounded'>
            <div class="ratio ratio-21x9">
                <iframe src={movie.trailerURL} title={movie.title} allowfullscreen ></iframe>
            </div>
            <div >
                <MovieCardTrailer {...movie}/>
            </div>
    </div>
);

}