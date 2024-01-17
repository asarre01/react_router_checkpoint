import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

// Composant représentant la carte d'un film avec détails et bouton de retour à l'accueil
function MovieCardTrailer({ id, title, description, posterURL, rating }) {
    // URL de l'image par défaut en cas d'absence de l'URL du poster
    const defaultPosterURL = "NoPoster.jpg";

    return (
        <div key={id} className="card bg-black text-white" style={{ width: '100%' }}>
        <div className="row min-h-100 p-4 no-gutters">
            {/* Colonne pour l'affichage du poster du film */}
            <div className="col-md-2">
            {/* Image du poster du film */}
            <Image width={'200px'} height={'100%'} rounded src={posterURL && posterURL.trim() !== '' ? posterURL : defaultPosterURL} className="" />
            </div>

            {/* Colonne pour les détails du film et le bouton de retour à l'accueil */}
            <div className="col-md-10 d-flex align-items-center ">
            <div className="card-body h-100 d-flex flex-column align-items-stretch">
                <div className="flex-fill">
                {/* Titre du film */}
                <h2 className="card-title">{title ?? "Titre"}</h2>
                </div>
                <div className="flex-fill">
                {/* Description du film */}
                <p className="card-text">
                    {description ?? "imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing"}
                </p>
                </div>
                <div className="d-flex flex-fill justify-content-between align-items-end min-w-100">
                {/* Note du film */}
                <div>
                    <h3 className="card-title">{rating ?? "0"}/10</h3>
                </div>

                {/* Bouton de retour à l'accueil avec un lien */}
                <div>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button variant="outline-light" className="min-w-25">Accueil</Button>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default MovieCardTrailer;
