import {useState} from "react";
import "./SearchBar.scss";

function SearchBar({ placeholder, data, actors }) {
	const [filteredFilms, setFilteredFilms] = useState([]);
	const [filteredActors, setFilteredActors] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const filmsFilter = data.filter((value) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()) ? value.id : null;
		});

		const actorsFilter = actors.filter((value) => {
			return value.name.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === "") {
			setFilteredFilms([]);
			setFilteredActors([]);
		} else {
			setFilteredFilms(filmsFilter);
			setFilteredActors(actorsFilter);
		}
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					type="text"
					placeholder={placeholder}
					value={wordEntered}
					onChange={handleFilter}
				/>
			</div>
			{filteredFilms.length !== 0 && (
				<div className="dataResult">
					<h3>Filmy</h3>
					{filteredFilms.slice(0, 15).map((value, key) => {
						return (
							<>
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
								<a className="dataItem" href={value.id} target="_self">
									<p>{value.name}</p>
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