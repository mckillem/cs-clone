import data from "../data";
import {actors} from "../actors";
import "./Main.scss"

export const Main = ({url}) => {
	const parsedURL  = parseInt(url.slice(1));
	let content;
	const actor = actors.map(actor => parsedURL === actor.id ? actor.name : null);

	parsedURL >= 100 ?
		content = data.filter(film => {
			// todo: vypíše seznam filmů jen u prvního herce
			return film.actors === actors.map(actor => parsedURL === actor.id ? actor.id : null)[0];
		}).map(film => {
			const {id, image, title, age, tags, description} = film;

			return <div key={id}>
				<img src={image} alt="" />
				<h2>{title}</h2>
				<p>{age}</p>
				<p>{tags}</p>
				<p>{description}</p>
			</div>
		}) :
		content = data.filter(film => {
			return film.id === parsedURL;
		}).map(film => {
			const {id, image, title, age, tags, description} = film;

			return <div key={id}>
				<img src={image} alt="" />
				<h2>{title}</h2>
				<p>{age}</p>
				<p>{tags}</p>
				<p>{description}</p>
			</div>
		})

	return (
		<>
			<h1>{actor}</h1>
			<div>{content}</div>
		</>
	);
};