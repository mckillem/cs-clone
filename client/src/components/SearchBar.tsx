import {ChangeEvent, useState} from "react";
import "./SearchBar.scss";

interface FilmObject {
	id: number;
	image: string;
	title: string;
	originalTitle: string;
	age: string;
	tags: string;
	actors: number[];
	description: string;
}

interface ActorObject {
	id: number;
	name: string;
}

function SearchBar({ placeholder, films, actors }: {placeholder: string, films: FilmObject[], actors: ActorObject[]}) {
	const [filteredFilms, setFilteredFilms] = useState<FilmObject[]>([]);
	const [filteredActors, setFilteredActors] = useState<ActorObject[]>([]);
	const [wordEntered, setWordEntered] = useState<string>("");

	const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const searchWord: string = event.target.value;
		setWordEntered(searchWord);
		const filmsFilter: FilmObject[] = films.filter((value: FilmObject) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()) ? value.id : false;
		});

		const actorsFilter = actors.filter((value: ActorObject) => {
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
					{filteredFilms.slice(0, 15).map(({id, title}: FilmObject) => {
						return (
							<div key={id}>
								<a className="dataItem" href={"/" + id} target="_self">
								 	<p>{title}</p>
								</a>
							</div>
						);
					})}
				</div>
			)}

			{filteredActors.length !== 0 && (
				<div className="dataResult">
					<h3>Herci</h3>
					{filteredActors.slice(0, 15).map(({id, name}: ActorObject) => {
						return (
							<div key={id}>
								<a className="dataItem" href={"/" + id} target="_self">
									<p>{name}</p>
								</a>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}

export default SearchBar;