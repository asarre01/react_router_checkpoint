import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import MovieTrailerView from './components/Movies/TrailerView';
import { useState } from 'react';
import PageNotFound from './components/PageNotFound';

// Composant principal de l'application
export default function App() {
	// Utilisation du hook d'état pour gérer la liste de films
	const [movies, setMovies] = useState(Movies);

	return (
		<div className='App'>
		{/* Configuration des routes avec le composant Routes */}
		<Routes>
			{/* Route pour la page d'accueil avec le composant Home */}
			<Route path='/' element={<Home movies={movies} setMovies={setMovies} />} />

			{/* Route pour la vue détaillée d'un film avec le composant MovieTrailerView */}
			<Route path='/Détails/:id' element={<MovieTrailerView movies={movies} />} />

			{/* Route pour la gestion des pages non trouvées avec le composant PageNotFound */}
			<Route path='/*' element={<PageNotFound />} />
		</Routes>
		</div>
	);
}
