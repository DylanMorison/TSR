import React from "react";
import logo from "./logo.svg";
import Head from "./components/Head";
import Input from "./components/Input";
import Button from "./components/Button";
import ReducerButtons from "./components/ReducerButtons";
import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<Head title="hello" isActive={true} />
			<Input />
			<Button
				onClick={e => {
					console.log("hit");

					e.preventDefault();
				}}
			>
				Hello FC
			</Button>
			<ReducerButtons />
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
