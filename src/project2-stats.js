/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Stats extends DDDSuper(LitElement) {

  static get tag() { return "project2-stats"; }

  constructor() {
    super();
    this.stats = [
      { player: "Alexander Moreno", goals: 52, assists: 0 },
      { player: "Djed Spence", goals: 0, assists: 11 },
      { player: "Rodrigo Bentancur", goals: 3, assists: 3 }
    ];
  }

  static get properties() { return { ...super.properties, stats: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .stats-container { max-width: 800px; margin: 0 auto; padding: 16px; }
      h1 { color: #1b5e20; font-size: 32px; margin-bottom: 16px; }
      table {
        width: 100%;
        border-collapse: collapse;
        background-color: #ffffff;
        color: #1b5e20;
      }
      th, td { padding: 12px; text-align: left; border-bottom: 1px solid #1b5e20; }
      th { background-color: #81c784; color: #000000; }
      tr:hover { background-color: #c8e6c9; }
    `];
  }

  render() {
    return html`
      <div class="stats-container">
        <h1>Player Stats</h1>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Goals</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            ${this.stats.map(player => html`
              <tr>
                <td>${player.player}</td>
                <td>${player.goals}</td>
                <td>${player.assists}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define(Project2Stats.tag, Project2Stats);

