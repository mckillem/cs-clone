import films from "../films";
import {actors} from "../actors";
import "./Main.scss"

export const Main = ({url}: {url: string}) => {
	const parsedURL: number = parseInt(url.slice(1));
	const actor: (string | false)[] = actors.map(actor => parsedURL === actor.id ? actor.name : false);
	let content;

	parsedURL >= 100 ?
		content = films.filter(film => {
			let actorId: (number | false)[] = actors.map(actor => parsedURL === actor.id ? actor.id : false);
			let filmActors: number[] = film.actors;
			let match: number[] = [];
			for (let i: number = 0; i < filmActors.length; i++) {
				for (let j: number = 0; j < actorId.length; j++) {
					if (filmActors[i] === actorId[j]) {
						match.push(filmActors[i]);
					}
				}
			}
			return match[0];
		}).map(film => {
			const {id, image, title, age, tags, description}: {id: number, image: string, title: string, age: string, tags: string, description: string} = film;

			return <div key={id}>
				<img src={image} alt="" />
				<h2>{title}</h2>
				<p>{age}</p>
				<p>{tags}</p>
				<p>{description}</p>
			</div>
		}) :
		content = films.filter(film => {
			return film.id === parsedURL;
		}).map(film => {
			const {id, image, title, age, tags, description}: {id: number, image: string, title: string, age: string, tags: string, description: string} = film;

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