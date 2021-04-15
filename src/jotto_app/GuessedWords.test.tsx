import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import GuessedWords, { iProps } from "./GuessedWords";
import Enzyme from "enzyme";

const setup = (props: iProps) => {
	return shallow(<GuessedWords guessedWords={props.guessedWords} />);
};

describe("if there are no words guessed", () => {
	let wrapper: Enzyme.ShallowWrapper;
	beforeEach(() => {
		const props = { guessedWords: [] };
		wrapper = setup(props);
	});

	test("renders without error", () => {
		const component = findByTestAttr(wrapper, "component-guessed-words");
		expect(component.length).toBe(1);
	});

	test("renders instructions to guess a word", () => {
		const instructions = findByTestAttr(wrapper, "guess-instructions");
		expect(instructions.text().length).not.toBe(0);
	});
});

describe("if there are words guessed", () => {});
