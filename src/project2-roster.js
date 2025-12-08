/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-player-card.js";

export class Project2Roster extends DDDSuper(LitElement) {

  static get tag() { return "project2-roster"; }

  constructor() {
    super();
    this.players = [
      { name: "Liam Anderson", number: "10", position: "Forward" },
      { name: "Emma Roberts", number: "7", position: "Midfielder" },
      { name: "Noah Harris", number: "1", position: "Goalie" },
      { name: "Olivia White", number: "12", position: "Defender" }
    ];
  }

  static get properties() { return { ...super.properties, players: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display:block; }
      .roster-container { max-width:1200px; margin:0 auto; }
      h1 { font-size:2rem; color:#1e40af; margin-bottom:1rem; }
      .players-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(220px,1fr)); gap:1rem; margin-top:1rem; }
    `];
  }

  render() {
    return html`
      <div class="roster-container">
        <h1>Team Roster</h1>
        <div class="players-grid">
          ${this.players.map(player => html`
            <project2-player-card .name="${player.name}" .number="${player.number}" .position="${player.position}"></project2-player-card>
          `)}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2Roster.tag, Project2Roster);
