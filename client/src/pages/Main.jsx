import data from "../data";
import {Header} from "./Header";

export const Main = ({url}) => {

	return (
		<>
			<h1>{url}</h1>

			{

				data.filter(film => {
					return film.id === parseInt(url.slice(1));
				}).map(film => {
					const {id, title, age, tags, description} = film;

					return <div key={id}>
						{/*<img src={image} alt="" />*/}
						<h2>{title}</h2>
						<p>{age}</p>
						<p>{tags}</p>
						<p>{description}</p>
					</div>
				})
			}
		</>
	);
};