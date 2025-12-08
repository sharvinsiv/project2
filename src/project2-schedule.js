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
      { date: "Jan 10, 2025", opponent: "State College Strikers", location: "Home", time: "5:00 PM" },
      { date: "Jan 17, 2025", opponent: "Bellefonte United", location: "Away", time: "6:00 PM" },
      { date: "Jan 24, 2025", opponent: "Philipsburg FC", location: "Home", time: "4:30 PM" }
    ];
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .container { max-width: 1200px; margin: auto; }
      h1 { color: var(--ddd-theme-default-navy80); margin-bottom: var(--ddd-spacing-4); }
      .games { display: grid; gap: var(--ddd-spacing-4); margin-top: var(--ddd-spacing-4); }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>Game Schedule</h1>
        <div class="games">
          ${this.games.map(g => html`
            <project2-game-card
              .date=${g.date}
              .opponent=${g.opponent}
              .location=${g.location}
              .time=${g.time}>
            </project2-game-card>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);
