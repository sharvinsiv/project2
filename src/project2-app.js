/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

import "./project2-header.js";
import "./project2-footer.js";
import "./project2-home.js";
import "./project2-schedule.js";
import "./project2-roster.js";
import "./project2-stats.js";
import "./project2-standings.js";

export class Project2App extends DDDSuper(LitElement) {
static get tag() { return "project2-app"; }

static styles = css`
:host {
display: flex;
flex-direction: column;
min-height: 100vh;
background: #FFFFFF;
color: #1b1b1b;
}

main {
flex: 1;
padding: 32px;
max-width: 1100px;
margin: 0 auto;
width: 100%;
}
`;

static properties = { route: { type: String } };

constructor() {
super();
this.route = "home";
}

navigate(e) {
this.route = e.detail;
}

renderPage() {
switch (this.route) {
case "schedule": return html`<project2-schedule></project2-schedule>`;
case "roster": return html`<project2-roster></project2-roster>`;
case "stats": return html`<project2-stats></project2-stats>`;
case "standings": return html`<project2-standings></project2-standings>`;
default: return html`<project2-home></project2-home>`;
}
}

render() {
return html`
<project2-header @navigate=${this.navigate}></project2-header>
<main>${this.renderPage()}</main>
<project2-footer></project2-footer>
`;
}
}

customElements.define(Project2App.tag, Project2App);
