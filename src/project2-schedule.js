/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

export class Project2Schedule extends DDDSuper(LitElement) {

  static get tag() {
    return "project2-schedule";
  }

  constructor() {
    super();
    this.games = [
      { date: "Jan 10, 2025", opponent: "State College Strikers", location: "Home", time: "6:00 PM" },
      { date: "Jan 17, 2025", opponent: "Pennsylvania Panthers", location: "Away", time: "7:30 PM" },
      { date: "Jan 24, 2025", opponent: "Central City Cyclones", location: "Home", time: "5:30 PM" }
    ];
  }

  static get properties() {
    return { ...super.properties, games: { type: Array } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .schedule-container { max-width: 1200px; margin: 0 auto; }
      h1 { color: var(--ddd-theme-default-green80); font-size: var(--ddd-font-size-3xl); margin-bottom: var(--ddd-spacing-4); }
      .games-grid { display: grid; gap: var(--ddd-spacing-4); margin-top: var(--ddd-spacing-4); grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); }
    `];
  }

  render() {
    return html`
      <div class="schedule-container">
        <h1> Game Schedule</h1>
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

globalThis.customElements.define(Project2Schedule.tag, Project2Schedule);
