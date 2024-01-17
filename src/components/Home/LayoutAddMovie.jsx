import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

// Le composant `LayoutAddMovie` est responsable de l'ajout d'un nouveau film, série ou émission.

const LayoutAddMovie = ({ movies, setMovies }) => {
    // Obtient un nouvel ID pour le film en ajoutant 1 à l'ID du dernier film de la liste (s'il y en a).
    const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
    
    // Utilisation de l'état local pour gérer les valeurs du formulaire.
    const [id, setId] = useState(newId);
    const [title, setTitle] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [trailerURL, setTrailerURL] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState(0);

    // Fonction appelée lors de la soumission du formulaire.
    const handleSubmit = (e) => {
        e.preventDefault();

        // Création d'un objet contenant les données du formulaire.
        const formData = {
            id,
            title,
            posterURL,
            trailerURL,
            description,
            rating,
        };

        // Ajout du nouveau film à la liste existante en créant un nouveau tableau.
        const newListMovies = [...movies, formData];
        setMovies(newListMovies);
        console.log(movies);
        // Réinitialisation des valeurs des champs après la soumission.
        setId(id + 1); // Incrémentation de l'ID pour le prochain film.
        setTitle('');
        setPosterURL('');
        setTrailerURL('');
        setDescription('');
        setRating(0);
    };

    return (
        // Formulaire pour ajouter les informations 
        <div className='container-fluid p-4 bg-black'>
            <Container className='text-white'>
                <h1>Ajouter un Film, une série ou une émission</h1>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formGroupTitle">
                        <Form.Label>Titre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrer Le titre"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPosterUrl">
                        <Form.Label>Url Du Poster</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrer L'url"
                            value={posterURL}
                            onChange={(e) => setPosterURL(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPosterUrl">
                        <Form.Label>Url Du Trailer</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Entrer L'url"
                            value={trailerURL}
                            onChange={(e) => setTrailerURL(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="Desc.ControlTextarea">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupRating">
                        <Form.Label>Note</Form.Label>
                        <Form.Control
                            type="number"
                            max={10}
                            min={0}
                            placeholder="0"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Ajouter
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default LayoutAddMovie;
