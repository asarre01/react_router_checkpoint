import { useState } from "react";
import MovieList from "./MovieList";
import NavBarCine from "./NavBarCine";
import LayoutAddMovie from "./LayoutAddMovie";

// Le composant `App` est le composant principal qui rend les composants `NavBarCine`, `MovieList`, et `LayoutAddMovie`.
function Home({movies, setMovies}) {
    

    // Utilisation du hook d'état pour gérer les filtres de recherche
	const [filter, setFilter] = useState({
		title: '',
		rating: null,
	});

    // Fonction de gestion du changement de filtre
	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	};

	return (
		<div className="">
            {/* Composant de la barre de navigation avec la possibilité de filtrer les films */}
			<NavBarCine onFilterChange={handleFilterChange} movies={movies} />

            {/* Composant pour afficher la liste de films en fonction des filtres appliqués */}
			<MovieList movies={movies} filter={filter} />

            {/* Composant pour ajouter un nouveau film à la liste */}
			<LayoutAddMovie movies={movies} setMovies={setMovies}/>
		</div>
	);
}

export default Home;
