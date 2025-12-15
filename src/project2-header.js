
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {
static get tag() {
return "project2-header";
}

static get styles() {
return [super.styles, css`
header {
background: var(--project2-green);
color: #1b1b1b;
padding: 16px;
display: flex;
justify-content: space-between;
align-items: center;
}

nav button {
background: none;
border: none;
color: #1b1b1b;
margin-left: 16px;
font-size: 16px;
cursor: pointer;
}

nav button:hover {
text-decoration: underline;
}
`];
}

nav(route) {
this.dispatchEvent(new CustomEvent("navigate", {
detail: route,
bubbles: true,
composed: true
}));
}

render() {
return html`
<header>
<strong>Happy Volley FC</strong>
<nav>
<button @click=${() => this.nav("home")}>Home</button>
<button @click=${() => this.nav("schedule")}>Schedule</button>
<button @click=${() => this.nav("roster")}>Roster</button>
<button @click=${() => this.nav("stats")}>Stats</button>
<button @click=${() => this.nav("standings")}>Standings</button>
</nav>
</header>
`;
}
}

globalThis.customElements.define(Project2Header.tag, Project2Header);
