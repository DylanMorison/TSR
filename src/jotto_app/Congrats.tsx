import React from "react";

export type Iprops = {
	success: boolean;
};

const Congrats = (props: Iprops) => {
	return (
		<>
			{props.success ? (
				<div data-test="component-congrats" className="alert alert-success">
					<span data-test="congrats-message">Congratulations! You guessed the word!</span>
				</div>
			) : (
				<div data-test="component-congrats" />
			)}
		</>
	);
};

export default Congrats;
