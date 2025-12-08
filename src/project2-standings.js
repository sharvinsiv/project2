/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Standings extends DDDSuper(LitElement) {

  static get tag() { return "project2-standings"; }

  constructor() {
    super();
    this.teams = [
      { rank: 1, name: "Happy Volley FC", wins: 8, losses: 3, ties: 1, points: 25 },
      { rank: 2, name: "State College Strikers", wins: 7, losses: 4, ties: 1, points: 22 },
      { rank: 3, name: "Pennsylvania Panthers", wins: 6, losses: 5, ties: 1, points: 19 },
      { rank: 4, name: "Central City Cyclones", wins: 4, losses: 7, ties: 1, points: 13 }
    ];
  }

  static get properties() { return { ...super.properties, teams: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .standings-container { max-width: 1200px; margin: 0 auto; }
      h1 { color: var(--ddd-theme-default-green80); font-size: var(--ddd-font-size-3xl); margin-bottom: var(--ddd-spacing-4); }
      .standings-list {
        background-color: var(--ddd-theme-default-lightGreen);
        border-radius: var(--ddd-radius-lg);
        box-shadow: var(--ddd-boxShadow-md);
        overflow: hidden;
      }
      .standings-header {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3);
        background-color: var(--ddd-theme-default-green90);
        color: var(--ddd-theme-default-white);
        font-weight: var(--ddd-font-weight-bold);
      }
      .team-row {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3);
        border-bottom: var(--ddd-border-sm);
        border-color: var(--ddd-theme-default-lightGreen);
        color: var(--ddd-theme-default-green90);
        transition: background-color 0.2s ease;
      }
      .team-row:hover { background-color: var(--ddd-theme-default-lightGreen); }
      .team-row.highlight { background-color: var(--ddd-theme-default-green80); font-weight: var(--ddd-font-weight-bold); color: var(--ddd-theme-default-white); }
      .rank { text-align: center; font-weight: var(--ddd-font-weight-bold); }
    `];
  }

  render() {
    return html`
      <div class="standings-container">
        <h1> League Standings</h1>
        <div class="standings-list">
          <div class="standings-header">
            <div class="rank">Rank</div>
            <div>Team</div>
            <div>W</div>
            <div>L</div>
            <div>T</div>
            <div>PTS</div>
          </div>
          ${this.teams.map(team => html`
            <div class="team-row ${team.rank === 1 ? 'highlight' : ''}">
              <div class="rank">${team.rank}</div>
              <div>${team.name}</div>
              <div>${team.wins}</div>
              <div>${team.losses}</div>
              <div>${team.ties}</div>
              <div>${team.points}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2Standings.tag, Project2Standings);
