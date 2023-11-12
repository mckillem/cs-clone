import films from "../films";
import {actors} from "../actors";
import "./Main.scss"
import {ActorObject, FilmObject} from "../components/SearchBar";

export const Main = ({url}: {url: string}) => {
	const parsedURL: number = parseInt(url.slice(1));
	const actor: string = actors.filter((actor: ActorObject): boolean => parsedURL === actor.id).map((actor: ActorObject) => actor.name)[0];
	let content;

	parsedURL >= 100 ?
		content = films.filter((film: FilmObject): boolean => {
			let actorId: number = actors.filter((actor: ActorObject): boolean => parsedURL === actor.id).map((actor: ActorObject) => actor.id)[0];
			let match: number[] = [];

			if (!actorId) {
				return false;
			}

			film.actors.forEach((value: number) => {
				if (value === actorId) {
					match.push(value);
				}
			})

			return match.length > 0;
		}).map((film: FilmObject) => {
			const {id, image, title, age, tags, description}: FilmObject = film;

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
			const {id, image, title, age, tags, description}: FilmObject = film;

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