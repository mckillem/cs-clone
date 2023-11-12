import films from "../films";
import {actors} from "../actors";
import "./Main.scss"
import {ActorObject, FilmObject} from "../components/SearchBar";

export const Main = ({url}: {url: string}) => {
	const parsedURL: number = parseInt(url.slice(1));
	const actor: string[] = actors.filter((actor: ActorObject): boolean  => parsedURL === actor.id).map((actor: ActorObject) => actor.name);
	let content;

	parsedURL >= 100 ?
		content = films.filter((film: FilmObject) => {
			let actorId: number[] = actors.filter((actor: ActorObject):boolean => parsedURL === actor.id).map((actor: ActorObject) => actor.id);
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
		}).map((film: FilmObject) => {
			const {id, image, title, age, tags, description}: {id: number, image: string, title: string, age: string, tags: string, description: string} = film;

			return <div key={id}>
				<img src={image} alt="" />
				<h2>{title}</h2>
				<p>{age}</p>
				<p>{tags}</p>
				<p>{description}</p>
			</div>
		}) :
		content = films.filter((film: FilmObject): boolean => {
			return film.id === parsedURL;
		}).map((film: FilmObject) => {
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