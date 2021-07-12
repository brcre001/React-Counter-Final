import React from "react";
import PropTypes from "prop-types";

export const SecondsCounter = props => {
	return (
		<div className="container rounded">
			<div className="box">
				<i className="far fa-clock"></i>
			</div>
			<div className="box">{props.digitSix % 10}</div>
			<div className="box">{props.digitFive % 10}</div>
			<div className="box">{props.digitFour % 10}</div>
			<div className="box">{props.digitThree % 10}</div>
			<div className="box">{props.digitTwo % 10}</div>
			<div className="box">{props.digitOne % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};
