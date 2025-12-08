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
      { rank: 1, name: "Happy Volley FC", wins: 8, losses: 2, ties: 1, points: 25 },
      { rank: 2, name: "State College Strikers", wins: 7, losses: 3, ties: 1, points: 22 },
      { rank: 3, name: "Bellefonte United", wins: 5, losses: 5, ties: 1, points: 16 },
      { rank: 4, name: "Philipsburg FC", wins: 3, losses: 7, ties: 1, points: 10 }
    ];
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .container { max-width: 1200px; margin: auto; }
      h1 { color: var(--ddd-theme-default-navy80); margin-bottom: var(--ddd-spacing-4); }
      .table { border-radius: var(--ddd-radius-md); overflow: hidden; box-shadow: var(--ddd-boxShadow-md); }
      .header, .row { display: grid; grid-template-columns: 50px 2fr 1fr 1fr 1fr 1fr; padding: var(--ddd-spacing-3); }
      .header { background: var(--ddd-theme-default-navy80); color: var(--ddd-theme-default-white); font-weight: bold; }
      .row { border-bottom: var(--ddd-border-sm); border-color: var(--ddd-theme-default-limestoneLight); color: var(--ddd-theme-default-navy80); transition: background 0.2s; }
      .row:hover { background: var(--ddd-theme-default-limestoneLight); }
      .highlight { background: var(--ddd-theme-default-skyBlue); font-weight: bold; }
      .rank { text-align: center; font-weight: bold; }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>League Standings</h1>
        <div class="table">
          <div class="header">
            <div class="rank">Rank</div>
            <div>Team</div>
            <div>W</div>
            <div>L</div>
            <div>T</div>
            <div>PTS</div>
          </div>
          ${this.teams.map(t => html`
            <div class="row ${t.rank === 1 ? "highlight" : ""}">
              <div class="rank">${t.rank}</div>
              <div>${t.name}</div>
              <div>${t.wins}</div>
              <div>${t.losses}</div>
              <div>${t.ties}</div>
              <div>${t.points}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Standings.tag, Project2Standings);
