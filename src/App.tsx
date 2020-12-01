import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TextForm } from "./features/text";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
    return (
        <MuiThemeProvider>
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
        </MuiThemeProvider>
    );
}

export default App;
