import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

// Le composant `MovieCard` représente une carte pour afficher les détails d'un film, série ou émission.
export default function MovieCard({ id, title, description, posterURL, rating }) {
    // URL de l'image par défaut en cas d'absence de l'URL du poster
    const defaultPosterURL = "NoPoster.jpg";

    return (
        <div className='col-lg-3 col-md-6'>
        {/* Utilisation de Link pour créer un lien vers la vue détaillée du film */}
        <Link to={`/Détails/${id}`} style={{ textDecoration: 'none' }}>
            {/* Card de Bootstrap avec les détails du film */}
            <Card key={id} style={{ width: '20rem' }} className=' m-4 shadow '>
            {/* En-tête de la carte avec l'image du poster */}
            <Card.Header className='p-0'>
                {/* Utilisation de l'image du poster ou d'une image par défaut si l'URL est vide. */}
                <Card.Img
                variant="top"
                src={posterURL && posterURL.trim() !== '' ? posterURL : defaultPosterURL}
                alt={`Poster for ${title}`} 
                style={{ maxHeight: '431px' }}
                />
            </Card.Header>

            {/* Corps de la carte avec les détails textuels du film */}
            <Card.Body className='bg-black rounded-bottom text-white'>
                {/* Texte de la carte avec le titre et la note du film */}
                <Card.Text className='d-flex justify-content-between align-items-center'>
                {/* Titre du film */}
                <span className='fw-bold'>
                    {title}
                </span>

                {/* Note du film */}
                <span className='fw-bold'>
                    {rating}/10
                </span>
                </Card.Text>
            </Card.Body>
            </Card>
        </Link>
        </div>
    );
}
