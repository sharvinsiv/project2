/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
static get tag() { return "project2-footer"; }

static styles = css`
footer {
background: #1f5f2a;
padding: 24px;
text-align: center;
color: white;
}

a {
color: #a5d6a7;
margin: 0 10px;
text-decoration: none;
}
`;

render() {
return html`
<footer>
<div>
<a href="#">Facebook</a>
<a href="#">Twitter</a>
<a href="#">Instagram</a>
</div>
<p>© 2025 Sharvin Sivarajah. All rights reserved.</p>
</footer>
`;
}
}

customElements.define(Project2Footer.tag, Project2Footer);
