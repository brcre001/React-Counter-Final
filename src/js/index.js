//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/SecondsCounter.js";

//render your react application

let counter = 0;

setInterval(() => {
	counter++;
	let one = Math.floor(counter / 1);
	let two = Math.floor(counter / 10);
	let three = Math.floor(counter / 100);
	let four = Math.floor(counter / 1000);
	let five = Math.floor(counter / 10000);
	let six = Math.floor(counter / 100000);
	//render your react application inside the set interval

	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
