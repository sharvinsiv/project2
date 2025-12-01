/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project-player-card.js";

export class ProjectRoster extends DDDSuper(LitElement) {

  static get tag() {
    return "project-roster";
  }

  constructor() {
    super();
    this.players = [
      { name: "Alex Rivera", number: "11", position: "Forward" },
      { name: "Maya Chen", number: "7", position: "Midfield" },
      { name: "Liam Torres", number: "1", position: "Goalie" },
      { name: "Zoe Patel", number: "5", position: "Defense" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      players: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .roster-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--pv-dark, #0b6b34);
        font-size: 28px;
        margin-bottom: 16px;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 16px;
        margin-top: 12px;
      }
    `];
  }

  render() {
    return html`
      <div class="roster-container">
        <h1> Team Roster</h1>
        <div class="players-grid">
          ${this.players.map(player => html`
            <project-player-card
              .name="${player.name}"
              .number="${player.number}"
              .position="${player.position}">
            </project-player-card>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectRoster.tag, ProjectRoster);

