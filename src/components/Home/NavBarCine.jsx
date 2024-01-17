import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect, useRef } from 'react';

// Composant de la barre de navigation avec des filtres de recherche
function NavBarCine({ onFilterChange }) {
    // Utilisation des hooks d'état pour gérer les filtres de titre et de notation
	const [titleFilter, setTitleFilter] = useState('');
	const [ratingFilter, setRatingFilter] = useState(0);

    // Utilisation des refs pour stocker les valeurs précédentes des filtres
	const prevTitleFilter = useRef(titleFilter);
	const prevRatingFilter = useRef(ratingFilter);

    // Effet secondaire pour détecter les changements dans les filtres et déclencher la fonction de filtrage
	useEffect(() => {
		if (
			prevTitleFilter.current !== titleFilter ||
			prevRatingFilter.current !== ratingFilter
		) {
			onFilterChange({
				title: titleFilter,
				rating: ratingFilter !== '' ? parseInt(ratingFilter) : 0,
			});
			prevTitleFilter.current = titleFilter;
			prevRatingFilter.current = ratingFilter;
		}
	}, [titleFilter, ratingFilter, onFilterChange]);

	return (
		// Formulaire de recherche et de filtre
		<Navbar expand="lg" className="bg-black">
			<Container fluid>
				<Navbar.Brand href="#">
					<h2 className='text-white'>Cinéma</h2>
				</Navbar.Brand>
				<div className="float-end">
					<Navbar.Collapse id="navbarScroll">
						<Form className="d-flex">
							<Form.Group className="me-2 flex">
								<Form.Control
									type="search"
									id="searchInput"
									placeholder="Rechercher par Titre"
									value={titleFilter}
									onChange={(e) => setTitleFilter(e.target.value)}
								/>
							</Form.Group>
							<Form.Group className="me-2">
								<Form.Control
									type="number"
									id="ratingInput"
									max={10}
									min={0}
									placeholder="0"
									value={ratingFilter}
									onChange={(e) => setRatingFilter(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</Navbar.Collapse>
				</div>
			</Container>
		</Navbar>
	);
}

export default NavBarCine;
