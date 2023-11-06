import "./Header.scss";
export const Header = () => {
	return (
		<div id="header">
			<img src="../logo/logos-png-8.png" alt="logo"/>
			{/*<img src="https://img.csfd.cz/documents/marketing/logos/logo-white-red/logo-white-red.svg" alt=""/>*/}
			<div className="search">
				<form>
					<input type="text" placeholder="Vyhledávání"/>
					<button><img src="../logo/lupa.png" alt="lupa"/></button>
				</form>
				{/*<a href="/">Podrobné vyhledávání</a>*/}
			</div>
			<div>Můj účet</div>
		</div>
	);
};