import React from "react";
import PropTypes from "prop-types";
import { SecondsCounter } from "./SecondsCounter.js";

export const App = props => {
	return (
		<SecondsCounter
			digitOne={props.placeOne}
			digitTwo={props.placeTwo}
			digitThree={props.placeThree}
			digitFour={props.placeFour}
			digitFive={props.placeFive}
			digitSix={props.placeSix}
		/>
	);
};

App.propTypes = {
	placeOne: PropTypes.number,
	placeTwo: PropTypes.number,
	placeThree: PropTypes.number,
	placeFour: PropTypes.number,
	placeFive: PropTypes.number,
	placeSix: PropTypes.number
};
