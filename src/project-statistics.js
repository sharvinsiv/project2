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

  constructor() {
    super();
    this.wins = 6;
    this.losses = 1;
    this.ties = 0;
    this.goalsFor = 22;
    this.goalsAgainst = 8;
  }

  static get properties() {
    return {
      ...super.properties,
      wins: { type: Number },
      losses: { type: Number },
      ties: { type: Number },
      goalsFor: { type: Number },
      goalsAgainst: { type: Number }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .stats-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--pv-dark, #0b6b34);
        font-size: 28px;
        margin-bottom: 16px;
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 12px;
        margin-top: 12px;
      }
      .stat-card {
        background-color: #fff;
        padding: 14px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 6px 18px rgba(30,155,72,0.04);
      }
      .stat-value {
        font-size: 22px;
        font-weight: 800;
        color: var(--pv-accent, #ff7a18);
      }
      .stat-label {
        font-size: 13px;
        color: #586a5b;
        margin-top: 6px;
      }
    `];
  }

  render() {
    return html`
      <div class="stats-container">
        <h1> Team Statistics</h1>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">${this.wins}</div>
            <div class="stat-label">Wins</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.losses}</div>
            <div class="stat-label">Losses</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.ties}</div>
            <div class="stat-label">Ties</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.goalsFor}</div>
            <div class="stat-label">Goals For</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${this.goalsAgainst}</div>
            <div class="stat-label">Goals Against</div>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectStats.tag, ProjectStats);
