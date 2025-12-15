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
      :host { display: block; font-family: 'Poppins', sans-serif; }
      .card {
        background: linear-gradient(135deg, #81c784 0%, #ffffff 100%);
        border: 2px solid #1b5e20;
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 16px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s, box-shadow 0.3s;
      }
      .card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
      .game-header { display: flex; justify-content: space-between; margin-bottom: 12px; }
      .date { font-weight: 700; color: #1b5e20; }
      .location-badge { background-color: #1b5e20; color: #ffffff; padding: 6px 12px; border-radius: 12px; font-weight: 600; }
      .opponent { font-size: 20px; font-weight: 700; margin-bottom: 6px; color: #1b5e20; }
      .time { font-size: 14px; color: #1b5e20; font-weight: 500; }
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

