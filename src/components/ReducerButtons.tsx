import React, { useReducer, useRef } from "react";
import { useClickOutSide } from "./useClickOutside";

const initialState = { rValue: true };

type State = {
	rValue: boolean;
};

type Action = {
	type: "one" | "two" | "three";
};

function reducer(state: State, action: Action) {
	switch (action.type) {
		case "one":
			return { rValue: true };
		case "two":
			return { rValue: false };
		default:
			return state;
	}
}

const ReducerButtons = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const ref = useRef<HTMLDivElement>(null!);

	useClickOutSide(ref, () => {
		console.log("clicked outside!");
	});

	return (
		<div ref={ref}>
			{state?.rValue ? <h1>Visible</h1> : <h1>Hidden</h1>}

			<button onClick={() => dispatch({ type: "one" })}>Action One</button>
			<button onClick={() => dispatch({ type: "two" })}>Action Two</button>
			<button onClick={() => dispatch({ type: "three" })}>Action Three</button>
		</div>
	);
};

export default ReducerButtons;
