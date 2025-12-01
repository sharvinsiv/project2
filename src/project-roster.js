/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectRoster extends DDDSuper(LitElement) {

  static get tag() {
    return "project-roster";
  }

  static get styles() {
    return [super.styles, css`
      .card {
        background: var(--pv-surface);
        padding: 20px;
        border-radius: 12px;
        margin: 12px 0;
        border-left: 6px solid var(--pv-primary);
      }
    `];
  }

  render() {
    return html`
      <h2>Team Roster</h2>

      <div class="card"><strong>Ava Thompson</strong> — Goalkeeper</div>
      <div class="card"><strong>Chloe Martinez</strong> — Left Back</div>
      <div class="card"><strong>Layla Brooks</strong> — Defensive Midfielder</div>
      <div class="card"><strong>Riley Chen</strong> — Left Winger</div>
    `;
  }
}

customElements.define(ProjectRoster.tag, ProjectRoster);
