import React from "react";

type guessedWordObj = {
	guessedWord: string;
	letterMatchCount: number;
};

export interface iProps {
	guessedWords: guessedWordObj[];
}

const GuessedWords = (props: iProps) => {
	let contents;
	if (props.guessedWords.length === 0) {
		contents = <span data-test="guess-instructions">Try to guess the word!</span>;
	}

	return <div data-test="component-guessed-words">{contents}</div>;
};

export default GuessedWords;
