
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {
static get tag() { return "project2-header"; }

static get styles() {
return [super.styles, css`
header {
background: #1b5e20;
color: white;
padding: 16px 24px;
display: flex;
justify-content: space-between;
align-items: center;
}

h1 {
margin: 0;
font-size: 20px;
}

nav a {
color: #81c784;
margin-left: 16px;
text-decoration: none;
font-weight: 600;
}
`];
}

render() {
return html`
<header>
<h1>⚽ Happy Volley FC</h1>
<nav>
<a href="#">Home</a>
<a href="#">Schedule</a>
<a href="#">Gallery</a>
</nav>
</header>
`;
}
}

customElements.define(Project2Header.tag, Project2Header);
