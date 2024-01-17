import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
// Le composant `MovieCard` représente une carte pour afficher les détails d'un film, série ou émission.

export default function MovieCard({ id, title, description, posterURL, rating }) {
    const defaultPosterURL = "NoPoster.jpg";
    return (
        <div className='col-lg-3 col-md-6'>
            <Link to={`/Détails/${id}`} style={{ textDecoration: 'none' }}>
                <Card key={id} style={{ width: '20rem' }} className=' m-4 shadow '>
                    <Card.Header className='p-0'>
                        {/* Utilisation de l'image du poster ou d'une image par défaut si l'URL est vide. */}
                        <Card.Img
                            variant="top"
                            src={posterURL && posterURL.trim() !== '' ? posterURL : defaultPosterURL}
                            alt={`Poster for ${title}`} 
                            style={{maxHeight:'431px'}}
                        />
                    </Card.Header>
                    <Card.Body className='bg-black rounded-bottom text-white'>
                        <Card.Text className='d-flex justify-content-between align-items-center'>
                            <div>
                                {title}
                            </div>
                            <div className=''>
                                {rating}/10
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}
