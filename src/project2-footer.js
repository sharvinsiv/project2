/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
static get tag() {
return "project2-footer";
}

static get styles() {
return [super.styles, css`
footer {
background: #111;
color: white;
text-align: center;
padding: 16px;
margin-top: 40px;
}

.socials a {
color: #7ed957;
margin: 0 8px;
text-decoration: none;
}
`];
}

render() {
return html`
<footer>
<div class="socials">
<a href="#">Facebook</a>
<a href="#">Instagram</a>
<a href="#">Twitter</a>
</div>
<p>© ${new Date().getFullYear()} Happy Volley FC</p>
</footer>
`;
}
}

globalThis.customElements.define(Project2Footer.tag, Project2Footer);
