import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * function to create a ShallowWrapper for the App component
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttr = (wrapper: Enzyme.ShallowWrapper, val: string) =>
	wrapper.find(`[data-test='${val}']`);

test("renders non-empty component without error", () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "component-app");
	expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
	const wrapper = setup();
	const button = findByTestAttr(wrapper, "increment-button");
	expect(button.length).toBe(1);
});

test("renders counter display", () => {
	const wrapper = setup();
	const counterDisplay = findByTestAttr(wrapper, "counter-display");
	expect(counterDisplay.length).toBe(1);
});

test("counter display starts at 0", () => {
	const wrapper = setup();
	const count = findByTestAttr(wrapper, "count").text();
	expect(count).toBe("0");
});

test("clicking button increments counter display", () => {
	const wrapper = setup();

	const button = findByTestAttr(wrapper, "increment-button");
	button.simulate("click");

	const count = findByTestAttr(wrapper, "count").text();
	expect(count).toBe("1");
});
