import "./Header.scss";
import {useEffect, useState} from "react";
import films from "../data";
import SearchBar from "../components/SearchBar";
export const Header = () => {
	const [search, setSearch] = useState("");
	const [filteredFilms, setFilteredFilms] = useState([])

	const formSubmit = (event) => {
		event.preventDefault()
		console.log(event);
	}

	// useEffect( () => {
	// 	setFilteredFilms(films.filter( (film) => {
	// 		return film.title.toLowerCase().includes(search.toLowerCase())
	// 	}))
	// }, [search])

	return (
		<div id="header">
			<img src="../logo/logos-png-8.png" alt="logo"/>
			{/*<img src="https://img.csfd.cz/documents/marketing/logos/logo-white-red/logo-white-red.svg" alt=""/>*/}
			<SearchBar placeholder="Filmy" data={films}></SearchBar>
			{/*<div className="search">*/}
			{/*	<form onSubmit={formSubmit}>*/}
			{/*		<input*/}
			{/*			type="text"*/}
			{/*			placeholder="Vyhledávání"*/}
			{/*			onChange={e => setSearch(e.target.value)}/>*/}
			{/*		<button><img src="../logo/lupa.png" alt="lupa"/></button>*/}
			{/*	</form>*/}
			{/*	/!*<a href="/">Podrobné vyhledávání</a>*!/*/}
			{/*</div>*/}
			<div>Můj účet</div>
		</div>
	);
};