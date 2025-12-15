/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
/**
* Copyright 2025 Sharvin Sivarajah
* @license Apache-2.0
*/
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

export class Project2Schedule extends DDDSuper(LitElement) {
static get tag() { return "project2-schedule"; }

constructor() {
super();
this.games = [
{ date: "Mar 9", opponent: "Blue Valley United", location: "Home", time: "10:00 AM" },
{ date: "Mar 16", opponent: "River City FC", location: "Away", time: "12:30 PM" },
{ date: "Mar 23", opponent: "Harrisburg Juniors", location: "Home", time: "9:00 AM" },
{ date: "Apr 6", opponent: "Keystone Kickers", location: "Away", time: "11:15 AM" }
];
}

static get properties() {
return { ...super.properties, games: { type: Array } };
}

static get styles() {
return [super.styles, css`
:host { display: block; }
.schedule-container {
max-width: 1200px;
margin: 0 auto;
padding: 32px 24px;
}
h1 {
font-size: 36px;
color: #1b5e20;
margin-bottom: 24px;
}
.games-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
gap: 20px;
}
`];
}

render() {
return html`
<div class="schedule-container">
<h1>Season Schedule</h1>
<div class="games-grid">
${this.games.map(game => html`
<project2-game-card
.date="${game.date}"
.opponent="${game.opponent}"
.location="${game.location}"
.time="${game.time}">
</project2-game-card>
`)}
</div>
</div>
`;
}
}

customElements.define(Project2Schedule.tag, Project2Schedule);
