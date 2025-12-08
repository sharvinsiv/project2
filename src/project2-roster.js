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
      { name: "Kazaiah Sterling", number: "9", position: "Left Back" },
      { name: "Dejan Kulusevski", number: "20", position: "Right Wing" },
      { name: "Djed Spence", number: "3", position: "Right Back" },
      { name: "Rodrigo Bentancur", number: "8", position: "Central Midfielder" },
      { name: "Harry Kane", number: "9", position: "Striker" },
      { name: "Hugo Lloris", number: "1", position: "Goalkeeper" },
      { name: "Cristian Romero", number: "15", position: "Centre Back" },
      { name: "Radu Dragusin", number: "5", position: "Centre Back" },
      { name: "Destiny Udogie", number: "2", position: "Left Back" },
      { name: "Papa Mate Sarr", number: "17", position: "Central Defensive Midfielder" },
      { name: "Xavi Simons", number: "10", position: "Central Attacking Midfielder" }
    
    ];
  }

  static get properties() { return { ...super.properties, players: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .roster-container { max-width: 1200px; margin: 0 auto; }
      h1 { color: #1b5e20; font-size: 32px; margin-bottom: 16px; }
      .players-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
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
            </project2-player-card>`)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Roster.tag, Project2Roster);
