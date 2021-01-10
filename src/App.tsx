import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TextForm } from "./features/text";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/request">
					<TextForm />
				</Route>
				<Route path="/">
					<TextForm />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
