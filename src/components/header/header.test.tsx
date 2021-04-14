import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header/> Component", () => {
	it("should render without errors", () => {
		const component = shallow(<Header />);
		const wrapper = component.find(".headerComponent");
		expect(wrapper.length).toBe(1);
	});

	it("should render a logo", () => {
		const component = shallow(<Header />);
		const logo = component.find(".logoIMG");
		expect(logo.length).toBe(1);
	});
});
