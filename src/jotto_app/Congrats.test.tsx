import { shallow } from "enzyme";
import Congrats, { Iprops } from "./Congrats";
import { findByTestAttr } from "./test/testUtils";

const setup = (props?: Iprops) => {
	return shallow(<Congrats success={props?.success || false} />);
};

test("renders without error", () => {
	const wrapper = setup();
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.length).toBe(1);
});

test("renders no text when `success` props is false", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success is true`", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	expect(message.text().length).not.toBe(0);
});
