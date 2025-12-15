/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
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
      { team: "The Philadelphia Penalties", wins: 12, losses: 2, draws: 4 },
      { team: "Pittsburgh Riverhounds", wins: 4, losses: 10, draws: 4 },
      { team: "Harrisburg Handlers", wins: 1, losses: 13, draws: 4 }
    ];
  }

  static get properties() { return { ...super.properties, standings: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; font-family: 'Poppins', sans-serif; }
      .standings-container { max-width: 1000px; margin: 0 auto; padding: 32px 24px; }
      h1 { color: #1b5e20; font-size: 36px; margin-bottom: 24px; border-bottom: 2px solid #81c784; display: inline-block; padding-bottom: 6px; }
      table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 8px;
        background-color: #ffffff;
        color: #1b5e20;
        font-weight: 500;
      }
      th, td { padding: 14px 12px; text-align: left; }
      th { background-color: #81c784; color: #000000; border-radius: 8px 8px 0 0; }
      tr { background-color: #f1f8f1; border-radius: 8px; }
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
              <th>Draws</th>
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

