/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

export class Project2Schedule extends DDDSuper(LitElement) {

  static get tag() { return "project2-schedule"; }

  constructor() {
    super();
    this.games = [
      { date: "Dec 8", opponent: "The Philadelphia Penalties", location: "Away", time: "3:00 AM" },
      { date: "Dec 17", opponent: "Harrisburg Handlers", location: "Away", time: "2:50 PM" },
      { date: "Dec 26", opponent: "Pittsburgh Riverhounds", location: "Home", time: "10:30 PM" },
    ];
  }

  static get properties() { return { ...super.properties, games: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; font-family: 'Poppins', sans-serif; }
      .schedule-container { max-width: 1400px; margin: 0 auto; padding: 32px 24px; }
      h1 { color: #1b5e20; font-size: 36px; margin-bottom: 24px; border-bottom: 2px solid #81c784; display: inline-block; padding-bottom: 4px; }
      .games-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
    `];
  }

  render() {
    return html`
      <div class="schedule-container">
        <h1>Schedule</h1>
        <div class="games-list">
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

