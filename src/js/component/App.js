import React, { useState, useEffect } from "react";
import { SecondsCounter } from "./SecondsCounter.js";

export const App = () => {
	// Using setState for counter variable
	const [count, setCount] = useState(0);

	// Using useEffect to increase value after each time it is loaded
	useEffect(() => {
		const interval = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [count]);

	// Setting variables for each position on the timer
	let one = Math.floor(count / 1);
	let two = Math.floor(count / 10);
	let three = Math.floor(count / 100);
	let four = Math.floor(count / 1000);
	let five = Math.floor(count / 10000);
	let six = Math.floor(count / 100000);

	return (
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>
	);
};
