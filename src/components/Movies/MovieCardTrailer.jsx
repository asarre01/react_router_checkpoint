import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function MovieCardTrailer({ id, title, description, posterURL, rating }) {
    const defaultPosterURL = "NoPoster.jpg";
    return (
        <div key={id} className="card bg-black text-white" style={{width: '100%'}}>
            <div className="row min-h-100 p-4 no-gutters">
                <div className="col-md-2">
                    <Image width={'200px'} height={'100%'} rounded  src={posterURL && posterURL.trim() !== '' ? posterURL : defaultPosterURL} className=""/>
                </div>
                <div className="col-md-10 d-flex align-items-center ">
                    <div className="card-body h-100 d-flex flex-column align-items-stretch">
                        <div className="flex-fill">
                            <h2 className="card-title">{title ?? "Titre"}</h2>
                        </div>
                        <div className="flex-fill">
                            <p className="card-text">
                                {description ?? "imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing"}
                            </p>
                        </div>
                        <div className="d-flex flex-fill justify-content-between align-items-end min-w-100">
                            <div>
                                <h3 className="card-title">{rating ?? "0"}/10</h3>
                            </div>
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
