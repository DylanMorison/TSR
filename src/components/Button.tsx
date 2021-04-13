import React from "react";

interface iProps {
	// onClick: (e: React.MouseEvent) => void; // Basic Mouse Event
	// onChange?: (e: React.FormEvent<HTMLInputElement>) => void; // Basic input event
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<iProps> = ({ onClick, children }) => {
	return <button onClick={onClick}>{children}</button>;
};

export default Button;
