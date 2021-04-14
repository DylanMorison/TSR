import React from "react";
import Header from "./components/header/Header";

import "./app.scss";

const App: React.FC = () => {
	return (
		<div className="App" style={{ fontFamily: "monospace" }}>
			<Header />
		</div>
	);
};

export default App;
