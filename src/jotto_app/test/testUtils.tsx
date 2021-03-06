import Enzyme, { ShallowWrapper } from "enzyme";

export const findByTestAttr = (wrapper: ShallowWrapper, val: string): ShallowWrapper => {
	return wrapper.find(`[data-test='${val}']`);
};
