import { useState } from "react";
import "./SearchBar.scss";
import {Main} from "../pages/Main";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
	const [filteredData, setFilteredData] = useState([]);
	const [wordEntered, setWordEntered] = useState("");

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		setWordEntered(searchWord);
		const newFilter = data.filter((value) => {
			return value.title.toLowerCase().includes(searchWord.toLowerCase()) || value.originalTitle.toLowerCase().includes(searchWord.toLowerCase()) ? value.id : null;
		});

		if (searchWord === "") {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setWordEntered("");
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
				{/*<div className="searchIcon">*/}
				{/*	{filteredData.length === 0 ? (*/}
				{/*		<SearchIcon />*/}
				{/*	) : (*/}
				{/*		<CloseIcon id="clearBtn" onClick={clearInput} />*/}
				{/*	)}*/}
				{/*</div>*/}
			</div>
			{filteredData.length !== 0 && (
				<div className="dataResult">
					{filteredData.slice(0, 15).map((value, key) => {
						return (
							<>
								{/*<Main data={value.title}></Main>*/}
								{/*<a className="dataItem" href={value.link} target="_blank">*/}
								<a className="dataItem" href={value.id} target="_self">
								 	<p>{value.title} </p>
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