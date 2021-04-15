import React from "react";

export type guessedWordObjType = {
	guessedWord: string;
	letterMatchCount: number;
};

export interface iProps {
	guessedWords: guessedWordObjType[];
}

const GuessedWords = (props: iProps) => {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = <span data-test="guess-instructions">Try to guess the word!</span>;
	} else {
		const guessedWordRows = props.guessedWords.map((word, index) => (
			<tr data-test="guessed-word" key={index}>
				<td>{word.guessedWord}</td>
				<td>{word.letterMatchCount}</td>
			</tr>
		));
		contents = (
			<div data-test="guessed-words">
				<h3>Guessed Words</h3>
				<table className="table table-sm">
					<thead className="thead-light">
						<tr>
							<th>Guess</th>
							<th>Matching Letters</th>
						</tr>
					</thead>
					<tbody>{guessedWordRows}</tbody>
				</table>
			</div>
		);
	}

	return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;
