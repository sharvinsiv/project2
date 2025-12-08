/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./p2-player-card.js";

export class Project2Roster extends DDDSuper(LitElement) {
  static get tag() { return "p2-roster"; }

  constructor() {
    super();
    this.players = [
      { name: "Alex Thompson", number: "1", position: "Goalie" },
      { name: "Liam Roberts", number: "5", position: "Defender" },
      { name: "Olivia Green", number: "8", position: "Midfielder" },
      { name: "Emma Lewis", number: "10", position: "Forward" },
      { name: "Ethan Hall", number: "12", position: "Midfielder" },
      { name: "Sophia Clark", number: "15", position: "Forward" }
    ];
  }

  static get properties() { return { ...super.properties, players: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      h1 { font-size: 2rem; color: #004d40; margin-bottom: 16px; }
      .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
    `];
  }

  render() {
    return html`
      <h1>Team Roster</h1>
      <div class="grid">
        ${this.players.map(p => html`
          <p2-player-card .name="${p.name}" .number="${p.number}" .position="${p.position}"></p2-player-card>
        `)}
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(Project2Roster.tag, Project2Roster);
