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
      { name: "Alex Turner", number: "9", position: "Forward" },
      { name: "Lily Evans", number: "7", position: "Midfielder" },
      { name: "Ryan Hall", number: "1", position: "Goalkeeper" },
      { name: "Sophia Lee", number: "5", position: "Defender" }
    ];
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .container { max-width: 1200px; margin: auto; }
      h1 { margin-bottom: var(--ddd-spacing-4); color: var(--ddd-theme-default-navy80); }
      .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--ddd-spacing-4); margin-top: var(--ddd-spacing-4); }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>Team Roster</h1>
        <div class="grid">
          ${this.players.map(p => html`
            <project2-player-card .name=${p.name} .number=${p.number} .position=${p.position}></project2-player-card>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Roster.tag, Project2Roster);
