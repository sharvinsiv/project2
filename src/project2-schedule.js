/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./p2-game-card.js";

export class Project2Schedule extends DDDSuper(LitElement) {
  static get tag() { return "p2-schedule"; }

  constructor() {
    super();
    this.games = [
      { date: "Mar 10", opponent: "Blue Tigers", location: "Home", time: "5:00 PM" },
      { date: "Mar 17", opponent: "Red Hawks", location: "Away", time: "6:00 PM" },
      { date: "Mar 22", opponent: "Green Eagles", location: "Home", time: "4:30 PM" },
      { date: "Mar 30", opponent: "Yellow Lions", location: "Away", time: "6:15 PM" }
    ];
  }

  static get properties() { return { ...super.properties, games: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      h1 { font-size: 2rem; color: #004d40; margin-bottom: 16px; }
      .grid { display: grid; gap: 16px; }
    `];
  }

  render() {
    return html`
      <h1>Game Schedule</h1>
      <div class="grid">
        ${this.games.map(g => html`
          <p2-game-card .date="${g.date}" .opponent="${g.opponent}" .location="${g.location}" .time="${g.time}"></p2-game-card>
        `)}
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2Schedule.tag, P2Schedule);
