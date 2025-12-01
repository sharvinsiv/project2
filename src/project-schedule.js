/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "project-schedule";
  }

  static get styles() {
    return [super.styles, css`
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }
      th, td {
        padding: 12px;
        border-bottom: 1px solid #ccc;
      }
      th {
        background: var(--pv-primary);
        color: white;
      }
    `];
  }

  render() {
    return html`
      <h2>Match Schedule</h2>
      <table>
        <tr><th>Date</th><th>Opponent</th><th>Location</th></tr>
        <tr><td>Feb 10</td><td>Skyline Juniors</td><td>Main Court</td></tr>
        <tr><td>Feb 17</td><td>River City AC</td><td>Fieldhouse</td></tr>
        <tr><td>Feb 24</td><td>Peak Volley</td><td>Main Court</td></tr>
      </table>
    `;
  }
}

customElements.define(ProjectSchedule.tag, ProjectSchedule);
