import "./Header.scss";
import films from "../films";
import {actors} from "../actors";
import SearchBar from "../components/SearchBar";

export const Header = () => {

	return (
		<div id="header">
			<img src={require("../logo/logos-png-8.png")} alt="logo"/>
			<div id="searchBar">
				<SearchBar placeholder="Filmy" films={films} actors={actors}></SearchBar>
			</div>
			<div id="account">Můj účet</div>
		</div>
	);
};