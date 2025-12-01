/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectStats extends DDDSuper(LitElement) {

  static get tag() {
    return "project-stats";
  }

  static get styles() {
    return [super.styles, css`
      .stat {
        background: var(--pv-surface);
        padding: 18px;
        border-radius: 12px;
        margin-top: 12px;
      }
    `];
  }

  render() {
    return html`
      <h2>Team Stats</h2>

      <div class="stat">Shot Accuracy: <strong>87%</strong></div>
      <div class="stat">Clean Sheets: <strong>3</strong></div>
      <div class="stat">Average Passes per Match <strong>5.1</strong></div>
    `;
  }
}

customElements.define(ProjectStats.tag, ProjectStats);
