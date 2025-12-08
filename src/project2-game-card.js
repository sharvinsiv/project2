/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2GameCard extends DDDSuper(LitElement) {
  static get tag() { return "project2-game-card"; }

  static properties = {
    ...super.properties,
    date: { type: String },
    opponent: { type: String },
    location: { type: String },
    time: { type: String }
  };

  constructor() {
    super();
    this.date = "TBD";
    this.opponent = "Opponent";
    this.location = "TBD";
    this.time = "TBD";
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .card { background: var(--ddd-theme-default-white); border-radius: var(--ddd-radius-md); padding: var(--ddd-spacing-4); box-shadow: var(--ddd-boxShadow-sm); transition: transform 0.2s; }
      .card:hover { transform: translateY(-2px); box-shadow: var(--ddd-boxShadow-md); }
      .date-location { display: flex; justify-content: space-between; margin-bottom: var(--ddd-spacing-2); }
      .date { font-weight: bold; color: var(--ddd-theme-default-navy80); }
      .location { background: var(--ddd-theme-default-skyBlue); color: var(--ddd-theme-default-navy80); border-radius: var(--ddd-radius-sm); padding: var(--ddd-spacing-1) var(--ddd-spacing-3); font-size: var(--ddd-font-size-s); }
      .opponent { font-weight: bold; font-size: var(--ddd-font-size-xl); margin-bottom: var(--ddd-spacing-1); color: var(--ddd-theme-default-coalyGray); }
      .time { font-size: var(--ddd-font-size-m); color: var(--ddd-theme-default-potentialMidnight); }
    `
  ];

  render() {
    return html`
      <div class="card">
        <div class="date-location">
          <span class="date">${this.date}</span>
          <span class="location">${this.location}</span>
        </div>
        <div class="opponent">vs ${this.opponent}</div>
        <div class="time">${this.time}</div>
      </div>
    `;
  }
}

customElements.define(Project2GameCard.tag, Project2GameCard);
