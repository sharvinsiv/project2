/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectStandings extends DDDSuper(LitElement) {

  static get tag() {
    return "project-standings";
  }

  constructor() {
    super();
    this.teams = [
      { rank: 1, name: "Happy Volley FC", wins: 6, losses: 1, ties: 0, points: 18 },
      { rank: 2, name: "Sunrise Strikers", wins: 5, losses: 2, ties: 0, points: 15 },
      { rank: 3, name: "Greenfield United", wins: 3, losses: 3, ties: 1, points: 10 },
      { rank: 4, name: "Blue River FC", wins: 2, losses: 4, ties: 1, points: 7 }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      teams: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .standings-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--pv-dark, #0b6b34);
        font-size: 28px;
        margin-bottom: 16px;
      }
      .standings-list {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 8px 26px rgba(15,60,30,0.04);
        overflow: hidden;
      }
      .standings-header {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: 8px;
        padding: 12px;
        background-color: var(--pv-primary, #1e9b48);
        color: #fff;
        font-weight: 700;
      }
      .team-row {
        display: grid;
        grid-template-columns: 60px 2fr 1fr 1fr 1fr 1fr;
        gap: 8px;
        padding: 12px;
        border-bottom: 1px solid #eef6ee;
        color: #233227;
      }
      .team-row.highlight {
        background-color: #f0fff2;
        font-weight: 700;
      }
      .rank {
        text-align: center;
        font-weight: 700;
      }
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

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectStandings.tag, ProjectStandings);
