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

  static get styles() {
    return [super.styles, css`
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        padding: 12px;
        border-bottom: 1px solid #ccc;
      }
      th {
        background: var(--pv-dark);
        color: white;
      }
    `];
  }

  render() {
    return html`
      <h2>League Standings</h2>

      <table>
        <tr><th>Team</th><th>Record</th></tr>
        <tr><td>Happy Volley FC</td><td>6 - 1</td></tr>
        <tr><td>Skyline Juniors</td><td>5 - 2</td></tr>
        <tr><td>Peak Volley</td><td>4 - 3</td></tr>
      </table>
    `;
  }
}

customElements.define(ProjectStandings.tag, ProjectStandings);
