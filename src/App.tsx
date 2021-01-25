import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./features/login";
import { TextForm } from "./features/text";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/request">
                    <TextForm />
                </Route>
                <Route path="/login">
                    <LoginForm />
                </Route>
                <Route path="/">
                    <TextForm />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
