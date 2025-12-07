/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-player-card.js";

export class Project2Roster extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-roster";
  }

  constructor() {
    super();
    this.players = [
      { name: "Alex Miller", number: "9", position: "Forward" },
      { name: "Jordan Lee", number: "10", position: "Midfielder" },
      { name: "Chris Walker", number: "4", position: "Defender" },
      { name: "Sam Torres", number: "1", position: "Goalkeeper" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      players: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
      .roster-container {
        max-width: 1200px;
        margin: auto;
      }
      h1 {
        color: #14532d;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
      }
    `];
  }

  render() {
    return html`
      <div class="roster-container">
        <h1>Team Roster</h1>
        <div class="players-grid">
          ${this.players.map(player => html`
            <project2-player-card
              .name="${player.name}"
              .number="${player.number}"
              .position="${player.position}">
            </project2-player-card>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Roster.tag, Project2Roster);
