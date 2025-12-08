/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Stats extends DDDSuper(LitElement) {
  static get tag() { return "p2-stats"; }

  constructor() {
    super();
    this.wins = 5;
    this.losses = 2;
    this.ties = 1;
    this.goalsFor = 18;
    this.goalsAgainst = 12;
  }

  static get properties() {
    return { ...super.properties,
      wins: { type: Number },
      losses: { type: Number },
      ties: { type: Number },
      goalsFor: { type: Number },
      goalsAgainst: { type: Number }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      h1 { font-size: 2rem; color: #004d40; margin-bottom: 16px; }
      .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 16px; }
      .card { background: #26a69a; color: #004d40; border-radius: 10px; text-align: center; padding: 12px; }
      .value { font-size: 1.5rem; font-weight: bold; }
      .label { font-size: 0.9rem; margin-top: 4px; }
    `];
  }

  render() {
    return html`
      <h1>Team Statistics</h1>
      <div class="grid">
        <div class="card"><div class="value">${this.wins}</div><div class="label">Wins</div></div>
        <div class="card"><div class="value">${this.losses}</div><div class="label">Losses</div></div>
        <div class="card"><div class="value">${this.ties}</div><div class="label">Ties</div></div>
        <div class="card"><div class="value">${this.goalsFor}</div><div class="label">Goals For</div></div>
        <div class="card"><div class="value">${this.goalsAgainst}</div><div class="label">Goals Against</div></div>
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2Stats.tag, P2Stats);
