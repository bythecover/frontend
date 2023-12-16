/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";

const root = document.getElementById("root");

render(
    () => (
        <Router>
            <Route path="/" component={App} />
        </Router>
    ),
    root!
);
