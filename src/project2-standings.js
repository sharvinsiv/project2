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
    this.standings = [
      { team: "The Philadelphia Penalties", wins: 10, losses: 2, ties: 1 },
      { team: "Pittsburgh Riverhounds", wins: 8, losses: 3, ties: 2 },
      { team: "Harrisburg Handlers", wins: 4, losses: 5, ties: 1 }
    ];
  }

  static get properties() { return { ...super.properties, standings: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .standings-container { max-width: 800px; margin: 0 auto; padding: 16px; }
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
      <div class="standings-container">
        <h1>Standings</h1>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Ties</th>
            </tr>
          </thead>
          <tbody>
            ${this.standings.map(team => html`
              <tr>
                <td>${team.team}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.ties}</td>
              </tr>
            `)}
          </tbody>
        </table>
      </div>
    `;
  }
}

customElements.define(Project2Standings.tag, Project2Standings);
