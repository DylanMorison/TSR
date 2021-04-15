import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import Input, { inputProps } from "./Input";
import Enzyme from "enzyme";

const mockSetCurrentGuess = jest.fn();

const defaultProps = { secretWord: "hi", success: false };

jest.mock("react", () => ({
	...jest.requireActual("react"),
	useState: (initialState: any) => [initialState, mockSetCurrentGuess]
}));

const setup = (props: inputProps) => {
	return shallow(<Input secretWord={props.secretWord} success={props.success} />);
};

describe("render", () => {
	describe("success is true", () => {
		let wrapper: Enzyme.ShallowWrapper;

		beforeEach(() => {
			wrapper = setup({ ...defaultProps, success: true });
		});

		test("renders without error", () => {
			const inputComponent = findByTestAttr(wrapper, "component-input");
			expect(inputComponent.length).toBe(1);
		});

		test("input box does not show", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.exists()).toBe(false);
		});

		test("submit button does not show", () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.exists()).toBe(false);
		});
	});

	describe("success is false", () => {
		let wrapper: Enzyme.ShallowWrapper;

		beforeEach(() => {
			wrapper = setup(defaultProps);
		});

		test("<Input/> renders without error", () => {
			const inputComponent = findByTestAttr(wrapper, "input-component");
			expect(inputComponent.length).toBe(1);
		});

		test("input box shows", () => {
			const inputBox = findByTestAttr(wrapper, "input-box");
			expect(inputBox.exists()).toBe(true);
		});

		test("submit button shows", () => {
			const submitButton = findByTestAttr(wrapper, "submit-button");
			expect(submitButton.exists()).toBe(true);
		});
	});
});

describe("state controlled input field", () => {
	beforeEach(() => {});

	test("state updates with value of input box upon change", () => {
		const wrapper = setup(defaultProps);
		const inputBox = findByTestAttr(wrapper, "input-box");

		const mockEvent = { target: { value: "train" } };
		inputBox.simulate("change", mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
	});

	test("field is cleared upon submit button click", () => {
		const wrapper = setup(defaultProps);
		const submitBtn = findByTestAttr(wrapper, "submit-button");

		submitBtn.simulate("click", { preventDefault() {} });
		expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
	});
});
