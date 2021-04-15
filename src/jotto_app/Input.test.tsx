import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import Input, { inputProps } from "./Input";
import Enzyme from "enzyme";

const setup = (props: inputProps) => {
	return shallow(<Input secretWord={props.secretWord} />);
};

test("renders without error", () => {
	const wrapper = setup({ secretWord: "hi" });
	const inputComponent = findByTestAttr(wrapper, "input-component");
	expect(inputComponent.length).toBe(1);
});

describe("state controlled input field", () => {
	test("state updates with value of input box upon change", () => {
		const mockSetCurrentGuess = jest.fn();
		React.useState = jest.fn(() => ["", mockSetCurrentGuess]);

		const wrapper = setup({ secretWord: "hi" });
		const inputBox = findByTestAttr(wrapper, "input-box");

		const mockEvent = { target: { value: "train" } };
		inputBox.simulate("change", mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
	});
});
