//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { App } from "./component/App.js";

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
		<>
			<App
				placeOne={one}
				placeTwo={two}
				placeThree={three}
				placeFour={four}
				placeFive={five}
				placeSix={six}
			/>
			<div className="container">
				<form>
					<div className="input-group mb-3">
						<input
							type="text"
							className="form-control"
							placeholder="Enter a number"
							aria-label="Input Number"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button
								className="btn btn-success"
								type="submit"
								id="button-addon2">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</>,
		document.querySelector("#app")
	);
}, 1000);
