import React from "react";

export type inputProps = {
	secretWord: string;
};

const Input = ({ secretWord }: inputProps) => {
	const [currentGuess, setCurrentGuess] = React.useState("");

	return (
		<div data-test="input-component">
			<form className="form-inline">
				<input
					data-test="input-box"
					className="mb-2 mx-sm-3"
					type="text"
					placeholder="enter a guess"
					onChange={(event) => setCurrentGuess(event.target.value)}
					value={currentGuess}
				/>
				<button data-test="submit-button" className="btn btn-primary mb-2">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Input;
