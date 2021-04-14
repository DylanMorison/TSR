import React, { useRef, useState } from "react";

const Input = () => {
	const [name, setName] = useState("");
	// !null is read only
	const inputRef = useRef<HTMLInputElement>(null);

	// console.log("ref", inputRef?.current?.value);

	return <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />;
};

export default Input;
