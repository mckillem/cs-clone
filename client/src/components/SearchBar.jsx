import { useState } from "react";
import "./SearchBar.scss";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
	const [filteredFilms, setFilteredFilms] = useState([]);
	const [filteredActors, setFilteredActors] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const filmsFilter = data.filter((value) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()) ? value.id : null;
		});

		// todo: pokud najdeš herce, tak vrať seznam filmů, ve kterých hraje
		const actorsFilter = data.filter((value) => {
			// pokud najdeš herce
			const actors = value.actors.toLowerCase().includes(searchWord.toLowerCase());
			// tak vrať seznam filmů, ve kterých hraje
			return actors;
		});

		if (searchWord === "") {
			setFilteredFilms([]);
			setFilteredActors([]);
		} else {
			setFilteredFilms(filmsFilter);
			setFilteredActors(actorsFilter);
		}
	};

	// const clearInput = () => {
	// 	setFilteredData([]);
	// 	setWordEntered("");
	// };

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
				{/*<div className="searchIcon">*/}
				{/*	{filteredData.length === 0 ? (*/}
				{/*		<SearchIcon />*/}
				{/*	) : (*/}
				{/*		<CloseIcon id="clearBtn" onClick={clearInput} />*/}
				{/*	)}*/}
				{/*</div>*/}
			</div>
			{filteredFilms.length !== 0 && (
				<div className="dataResult">
					<h3>Filmy</h3>
					{filteredFilms.slice(0, 15).map((value, key) => {
						return (
							<>
								{/*<Main data={value.title}></Main>*/}
								{/*<a className="dataItem" href={value.link} target="_blank">*/}
								<a className="dataItem" href={value.id} target="_self">
								 	<p>{value.title}</p>
								</a>
							</>
						);
					})}
				</div>
			)}

			{filteredActors.length !== 0 && (
				<div className="dataResult">
					<h3>Herci</h3>
					{filteredActors.slice(0, 15).map((value, key) => {
						return (
							<>
								{/*todo: odkaz je na id filmu ne na seznam herců*/}
								<a className="dataItem" href={value.id} target="_self">
									<p>{value.actors}</p>
								</a>
							</>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;