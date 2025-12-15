/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

export class Project2Home extends LitElement {
static get styles() {
return css`
section {
margin-bottom: 40px;
}

h2 {
color: #1b5e20;
margin-bottom: 8px;
}

p {
max-width: 700px;
line-height: 1.6;
}
`;
}

render() {
return html`
<section>
<h2>Welcome to Happy Volley FC</h2>
<p>
Happy Volley FC is a youth soccer club focused on teamwork, discipline,
and fun. Our mission is to help young athletes grow their skills,
confidence, and love for the game.
</p>
</section>
`;
}
}

customElements.define("project2-home", Project2Home);
