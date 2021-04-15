import React, { useState } from "react";

export type inputProps = {
	secretWord: string;
	success: boolean;
};

const Input = ({ secretWord, success }: inputProps) => {
	const [currentGuess, setCurrentGuess] = useState("");

	if (success) {
		return <div data-test="component-input" />;
	}

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
				<button
					data-test="submit-button"
					className="btn btn-primary mb-2"
					onClick={(e) => {
						e.preventDefault();
						setCurrentGuess("");
					}}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Input;
