import React, { useState, useEffect } from "react";
import { SecondsCounter } from "./SecondsCounter.js";

export const App = () => {
	// Using setState for counter variable
	const [count, setCount] = useState(0);
	const [pause, setPause] = useState(false);
	const [countdown, setCountdown] = useState("");
	const [startCountdown, setStartCountdown] = useState(false);
	const [alert, setAlert] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	// Using useEffect to increase value after each time it is loaded
	useEffect(() => {
		if (!pause) {
			if (startCountdown) {
				if (count > 0) {
					let interval = setInterval(() => {
						setCount(prevCount => prevCount - 1);
					}, 1000);

					if (count == parseInt(alert)) {
						setShowAlert(true);
						setPause(true);
					}

					return () => clearInterval(interval);
				} else {
					setStartCountdown(false);
					setPause(true);
				}
			} else {
				let interval = setInterval(() => {
					setCount(prevCount => prevCount + 1);
				}, 1000);

				if (count == parseInt(alert)) {
					setShowAlert(true);
					setPause(true);
				}

				return () => clearInterval(interval);
			}
		}
	}, [count, pause]);

	// Setting variables for each position on the timer
	let one = Math.floor(count / 1);
	let two = Math.floor(count / 10);
	let three = Math.floor(count / 100);
	let four = Math.floor(count / 1000);
	let five = Math.floor(count / 10000);
	let six = Math.floor(count / 100000);

	// Reset timer function
	let reset = () => {
		setCount(0);
	};

	return (
		<div className="text-center mt-2">
			<SecondsCounter
				digitOne={one}
				digitTwo={two}
				digitThree={three}
				digitFour={four}
				digitFive={five}
				digitSix={six}
			/>
			<div>
				<button
					onClick={() => setPause(!pause)}
					className="btn btn-warning rounded m-2">
					{pause ? "Start" : "Stop"}
				</button>
				<button onClick={reset} className="btn btn-warning rounded m-2">
					Reset
				</button>
			</div>
			<div>
				<input
					type="text"
					placeholder="Pick a number for the countdown"
					className="w-25"
					onChange={event => setCountdown(event.target.value)}
				/>{" "}
				&nbsp;
				<button
					className="btn btn-warning rounded m-2"
					onClick={() => {
						setStartCountdown(true);
						setCount(parseInt(countdown));
						setPause(false);
					}}>
					Start Countdown
				</button>
			</div>
			<div>
				<input
					type="text"
					onChange={event => setAlert(event.target.value)}
					value={alert}
					placeholder="Pick a number to show an alert"
					className="w-25"
				/>{" "}
				&nbsp;
			</div>
			{showAlert ? (
				<div className="card mx-auto mt-2" style={{ width: "18rem" }}>
					<div className="card-body">
						<h5 className="card-title">Alert</h5>
						<p className="card-text">
							You have reached your target number of: {alert}
						</p>
						<a
							href="#"
							className="btn btn-warning"
							onClick={() => {
								setShowAlert(false);
								setAlert("");
								setPause(false);
							}}>
							Close
						</a>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};
