import React from "react";

interface iProps {
	title: string;
	isActive: boolean;
}

const Head = ({ title, isActive = true }: iProps) => {
	return (
		<div>
			<h1>Hello</h1>
		</div>
	);
};

export default Head;
