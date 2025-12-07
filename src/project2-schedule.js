/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-match-card.js";

export class Project2Schedule extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-schedule";
  }

  constructor() {
    super();
    this.games = [
      { date: "Sept 10", opponent: "State College United", location: "Home", time: "5:00 PM" },
      { date: "Sept 17", opponent: "Bellefonte FC", location: "Away", time: "6:00 PM" },
      { date: "Sept 24", opponent: "Altoona Strikers", location: "Home", time: "4:30 PM" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
      h1 {
        color: #14532d;
      }
      .games-grid {
        display: grid;
        gap: 20px;
      }
    `];
  }

  render() {
    return html`
      <h1>Match Schedule</h1>
      <div class="games-grid">
        ${this.games.map(game => html`
          <project2-match-card
            .date="${game.date}"
            .opponent="${game.opponent}"
            .location="${game.location}"
            .time="${game.time}">
          </project2-match-card>
        `)}
      </div>
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);
