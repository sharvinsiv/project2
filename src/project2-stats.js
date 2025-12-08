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
    this.wins = 8;
    this.losses = 2;
    this.ties = 1;
    this.goalsFor = 21;
    this.goalsAgainst = 10;
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .container { max-width: 1200px; margin: auto; }
      h1 { color: var(--ddd-theme-default-navy80); margin-bottom: var(--ddd-spacing-4); }
      .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: var(--ddd-spacing-4); }
      .card { background: var(--ddd-theme-default-skyBlue); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); text-align: center; box-shadow: var(--ddd-boxShadow-sm); }
      .value { font-size: var(--ddd-font-size-3xl); font-weight: bold; color: var(--ddd-theme-default-navy80); }
      .label { font-size: var(--ddd-font-size-m); margin-top: var(--ddd-spacing-2); color: var(--ddd-theme-default-coalyGray); }
    `
  ];

  render() {
    return html`
      <div class="container">
        <h1>Team Statistics</h1>
        <div class="grid">
          ${["Wins","Losses","Ties","Goals For","Goals Against"].map((label,i) => html`
            <div class="card">
              <div class="value">${[this.wins,this.losses,this.ties,this.goalsFor,this.goalsAgainst][i]}</div>
              <div class="label">${label}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Stats.tag, Project2Stats);
