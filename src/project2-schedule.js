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
      { date: "Dec 10", opponent: "Maple Leafs", location: "Home", time: "7:00 PM" },
      { date: "Dec 12", opponent: "Sharks", location: "Away", time: "6:30 PM" },
      { date: "Dec 15", opponent: "Canadiens", location: "Home", time: "7:30 PM" },
    ];
  }

  static get properties() { return { ...super.properties, games: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .schedule-container { max-width: 1200px; margin: 0 auto; padding: 16px; }
      h1 { color: #1b5e20; font-size: 32px; margin-bottom: 16px; }
      .games-list { display: grid; gap: 12px; }
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
