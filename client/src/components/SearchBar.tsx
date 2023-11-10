import {ChangeEvent, useState} from "react";
import "./SearchBar.scss";

function SearchBar({ placeholder, data, actors }: {placeholder: string, data: object[], actors: object[]}) {
	const [filteredFilms, setFilteredFilms] = useState<object[]>([]);
	const [filteredActors, setFilteredActors] = useState<object[]>([]);
	const [wordEntered, setWordEntered] = useState<string>("");

	const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
		const searchWord: string = event.target.value;
		setWordEntered(searchWord);
		const filmsFilter: object[] = data.filter((value: any) => {
			console.log(typeof value)

			return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()) ? value.id : false;
		});

		const actorsFilter = actors.filter((value: any) => {
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
					{filteredFilms.slice(0, 15).map((value: any, key: number) => {
						return (
							<div key={key}>
								<a className="dataItem" href={value.id} target="_self">
								 	<p>{value.title}</p>
								</a>
							</div>
						);
					})}
				</div>
			)}

			{filteredActors.length !== 0 && (
				<div className="dataResult">
					<h3>Herci</h3>
					{filteredActors.slice(0, 15).map((value: any, key: number) => {
						return (
							<div key={key}>
								<a className="dataItem" href={value.id} target="_self">
									<p>{value.name}</p>
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