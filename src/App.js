import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import MovieTrailerView from './components/Movies/TrailerView';
import { useState } from 'react';
import PageNotFound from './components/PageNotFound';
export default function App() {
	// Utilisation du hook d'état pour gérer la liste de films
	const [movies, setMovies] = useState(Movies);
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home movies={movies} setMovies={setMovies}/>}></Route>
				<Route path='/Détails/:id' element={<MovieTrailerView movies={movies}/>}></Route>
				<Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
			</Routes>
		</div>
	)
}
