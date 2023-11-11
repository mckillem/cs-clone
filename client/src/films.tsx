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

const films: FilmObject[] = [ {
		id: 1,
		image: require("./images/image1.jpg"),
		title: "Avatar",
		originalTitle: "Avatar",
		age: "+13",
		tags: "Vtipný * Napínavý * Rodina",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 2,
		image: require("./images/image1.jpg"),
		title: "Avatar 2",
		originalTitle: "Avatar 2",
		age: "+13",
		tags: "Vtipný * Napínavý * Rodina",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 3,
		image: require("./images/image1.jpg"),
		title: "Rocknrolla",
		originalTitle: "Rocknrolla",
		age: "+16",
		tags: "Gangster * Napínavý * Násilí",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 4,
		image: require("./images/image1.jpg"),
		title: "Patriot",
		originalTitle: "The Patriot",
		age: "+16",
		tags: "Gangster * Napínavý * Násilí",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 5,
		image: require("./images/image1.jpg"),
		title: "Telefon pana Harrigana",
		originalTitle: "Mr. Harrigan's Phone ",
		age: "+16",
		tags: "Gangster * Napínavý * Násilí",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 6,
		image: require("./images/image1.jpg"),
		title: "Stážista",
		originalTitle: "The Intern",
		age: "+16",
		tags: "Rodinný * Napínavý * Romantický",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 7,
		image: require("./images/image1.jpg"),
		title: "Oslava Sylvestru",
		originalTitle: "Life",
		age: "+13",
		tags: "Vesmír * Napínavý * Nebezpečí",
		actors: [],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 8,
		image: require("./images/image1.jpg"),
		title: "Mozek za miliardu dolarů",
		originalTitle: "Billion Dollar Brain",
		age: "+13",
		tags: "IT * Napínavý",
		actors: [101],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 9,
		image: require("./images/image1.jpg"),
		title: "Rocky",
		originalTitle: "Rocky",
		age: "+16",
		tags: "Dokument * Napínavý",
		actors: [100],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	}, {
		id: 10,
		image: require("./images/image1.jpg"),
		title: "Postradatelní 2: Zpět do války",
		originalTitle: "The Expendables 2",
		age: "+13",
		tags: "Gangster * Napínavý * Násilí",
		actors: [100, 102, 103],
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium amet nemo minus quo architecto quas",
	},
]
export default films