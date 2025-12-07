/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Stats extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-stats";
  }

  constructor() {
    super();
    this.wins = 7;
    this.losses = 1;
    this.ties = 2;
    this.goalsFor = 22;
    this.goalsAgainst = 10;
  }

  static get styles() {
    return [super.styles, css`
      .stat-card {
        background: #86efac;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
      }
    `];
  }

  render() {
    return html`
      <h1>Team Statistics</h1>
      <div class="stats-grid">
        <div class="stat-card">Wins: ${this.wins}</div>
        <div class="stat-card">Losses: ${this.losses}</div>
        <div class="stat-card">Ties: ${this.ties}</div>
        <div class="stat-card">Goals For: ${this.goalsFor}</div>
        <div class="stat-card">Goals Against: ${this.goalsAgainst}</div>
      </div>
    `;
  }
}

customElements.define(Project2Stats.tag, Project2Stats);
