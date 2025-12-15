/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Home extends DDDSuper(LitElement) {
static get tag() { return "project2-home"; }

static styles = css`
h1 { color: #2e7d32; }

section {
margin-bottom: 48px;
}

.gallery {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
gap: 20px;
}

figure {
background: #111;
border-radius: 10px;
overflow: hidden;
}

img {
width: 100%;
height: 180px;
object-fit: cover;
}

figcaption {
padding: 10px;
text-align: center;
font-size: 14px;
color: #ccc;
}
`;

render() {
return html`
<section>
<h1>Welcome to Happy Volley FC</h1>
<p>
Happy Volley FC is a youth soccer club focused on teamwork,
discipline, and fun. Our mission is to help young athletes grow
their skills, confidence, and love for the game.
</p>
</section>

<section>
<h2>Team Gallery</h2>
<div class="gallery">
<figure>
<img src="https://spacecoastdaily.com/wp-content/uploads/2025/06/EFSC-Mens-Soccer.jpg">
<figcaption>Game day energy</figcaption>
</figure>
<figure>
<img src="https://gearupwithus.com/wp-content/uploads/2025/09/iStock-2228740185-1024x683.jpg">
<figcaption>Practice session</figcaption>
</figure>
<figure>
<img src="https://www.missourisoccer.org/wp-content/uploads/sites/164/2024/06/State-Cup-13.jpg?w=1024">
<figcaption>Teamwork on the field</figcaption>
</figure>
</div>
</section>
`;
}
}

customElements.define(Project2Home.tag, Project2Home);
