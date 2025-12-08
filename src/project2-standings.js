/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Standings extends DDDSuper(LitElement) {
  static get tag() { return "p2-standings"; }

  constructor() {
    super();
    this.teams = [
      { rank: 1, name: "Happy Volley FC", wins: 5, losses: 2, ties: 1, points: 16 },
      { rank: 2, name: "Blue Tigers", wins: 4, losses: 3, ties: 1, points: 13 },
      { rank: 3, name: "Red Hawks", wins: 3, losses: 3, ties: 2, points: 11 },
      { rank: 4, name: "Green Eagles", wins: 2, losses: 4, ties: 2, points: 8 }
    ];
  }

  static get properties() { return { ...super.properties, teams: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      h1 { font-size: 2rem; color: #004d40; margin-bottom: 16px; }
      .table { max-width: 800px; margin: 0 auto; border-collapse: collapse; }
      .row { display: grid; grid-template-columns: 40px 2fr 1fr 1fr 1fr 1fr; gap: 8px; padding: 8px 0; }
      .header { background: #004d40; color: white; font-weight: bold; }
      .highlight { background: #26a69a; font-weight: bold; color: #004d40; }
      .row:nth-child(odd) { background: #e0f2f1; }
      .cell { text-align: center; }
    `];
  }

  render() {
    return html`
      <h1>League Standings</h1>
      <div class="table">
        <div class="row header">
          <div class="cell">#</div>
          <div class="cell">Team</div>
          <div class="cell">W</div>
          <div class="cell">L</div>
          <div class="cell">T</div>
          <div class="cell">PTS</div>
        </div>
        ${this.teams.map(t => html`
          <div class="row ${t.rank === 1 ? 'highlight' : ''}">
            <div class="cell">${t.rank}</div>
            <div class="cell">${t.name}</div>
            <div class="cell">${t.wins}</div>
            <div class="cell">${t.losses}</div>
            <div class="cell">${t.ties}</div>
            <div class="cell">${t.points}</div>
          </div>
        `)}
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2Standings.tag, P2Standings);
