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
      h1 { color: #2a7d2a; font-size: 2rem; margin-bottom: 1rem; }
      .standings-list {
        background-color: #d4f0d4;
        border-radius: 12px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        overflow: hidden;
      }
      .standings-header, .team-row {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        padding: 12px;
        gap: 8px;
      }
      .standings-header {
        background-color: #3ca23c;
        color: white;
        font-weight: bold;
      }
      .team-row {
        background-color: white;
        color: #2a7d2a;
        border-bottom: 1px solid #c0e0c0;
        transition: background-color 0.2s ease;
      }
      .team-row:hover { background-color: #e0f8e0; }
      .team-row.highlight { background-color: #2a7d2a; color: white; font-weight: bold; }
      .rank { text-align: center; font-weight: bold; }
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
