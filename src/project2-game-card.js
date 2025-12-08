/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2GameCard extends DDDSuper(LitElement) {
  static get tag() { return "p2-game-card"; }

  constructor() {
    super();
    this.date = "TBD";
    this.opponent = "Opponent";
    this.location = "TBD";
    this.time = "TBD";
  }

  static get properties() {
    return { ...super.properties,
      date: { type: String },
      opponent: { type: String },
      location: { type: String },
      time: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .card { background: #ffffff; padding: 16px; border-radius: 12px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); transition: transform 0.2s; }
      .card:hover { transform: translateY(-2px); }
      .top { display: flex; justify-content: space-between; font-weight: bold; margin-bottom: 8px; }
      .opponent { font-size: 1.2rem; margin-bottom: 4px; }
      .time { color: #555; }
      .location { background: #26a69a; color: #004d40; padding: 2px 8px; border-radius: 6px; font-size: 0.9rem; }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="top">
          <div class="date">${this.date}</div>
          <div class="location">${this.location}</div>
        </div>
        <div class="opponent">vs ${this.opponent}</div>
        <div class="time">${this.time}</div>
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2GameCard.tag, P2GameCard);
