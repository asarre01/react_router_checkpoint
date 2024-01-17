import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageNotFound() {
    return (
        <div className=' d-flex flex-column vw-100 vh-100 justify-content-center align-items-center'>
            <div>
                {/* Image indiquant l'absence de données */}
                <img src="Nodata-bro.png" alt="No Data" style={{ width: '35rem', minHeight: '35rem' }}/>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button variant="dark" size="lg">Accueil</Button>
            </Link>
        </div>
    )
}
