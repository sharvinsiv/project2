/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2GameCard extends DDDSuper(LitElement) {

  static get tag() { return "project2-game-card"; }

  constructor() {
    super();
    this.date = "TBD";
    this.opponent = "Opponent";
    this.location = "TBD";
    this.time = "TBD";
  }

  static get properties() {
    return { ...super.properties, date: { type: String }, opponent: { type: String }, location: { type: String }, time: { type: String } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .card {
        background-color: #ffffff;
        border: 2px solid #1b5e20;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 12px;
        transition: transform 0.2s;
      }
      .card:hover { transform: translateY(-2px); }
      .game-header { display: flex; justify-content: space-between; margin-bottom: 8px; }
      .date { font-weight: bold; color: #1b5e20; }
      .location-badge { background-color: #81c784; color: #000000; padding: 4px 8px; border-radius: 4px; }
      .opponent { font-size: 18px; font-weight: bold; margin-bottom: 4px; color: #1b5e20; }
      .time { font-size: 14px; color: #000000; }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="game-header">
          <div class="date">${this.date}</div>
          <div class="location-badge">${this.location}</div>
        </div>
        <div class="opponent">vs ${this.opponent}</div>
        <div class="time">${this.time}</div>
      </div>
    `;
  }
}

customElements.define(Project2GameCard.tag, Project2GameCard);
