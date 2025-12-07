/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Standings extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-standings";
  }

  constructor() {
    super();
    this.teams = [
      { rank: 1, name: "Happy Valley FC", wins: 7, losses: 1, ties: 2, points: 23 },
      { rank: 2, name: "State College United", wins: 6, losses: 2, ties: 2, points: 20 },
      { rank: 3, name: "Bellefonte FC", wins: 5, losses: 4, ties: 1, points: 16 }
    ];
  }

  static get styles() {
    return [super.styles, css`
      .team-row.highlight {
        background: #86efac;
        font-weight: bold;
      }
    `];
  }

  render() {
    return html`
      <h1>League Standings</h1>
      ${this.teams.map(team => html`
        <div class="team-row ${team.rank === 1 ? "highlight" : ""}">
          ${team.rank}. ${team.name} — ${team.points} pts
        </div>
      `)}
    `;
  }
}

customElements.define(Project2Standings.tag, Project2Standings);
