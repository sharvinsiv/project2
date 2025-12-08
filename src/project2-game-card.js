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
    return {
      ...super.properties,
      date: { type: String },
      opponent: { type: String },
      location: { type: String },
      time: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host { display:block; margin-bottom:1rem; }
      .card {
        background-color:#fef3c7;
        border:2px solid #f87171;
        border-radius:1rem;
        padding:1rem 1.5rem;
        box-shadow:0 4px 6px rgba(0,0,0,0.1);
        transition:transform 0.2s ease, box-shadow 0.2s ease;
      }
      .card:hover { transform:translateY(-3px); box-shadow:0 6px 12px rgba(0,0,0,0.15); }
      .game-header { display:flex; justify-content:space-between; margin-bottom:0.5rem; font-weight:bold; color:#1e40af; }
      .opponent { font-size:1.25rem; margin-bottom:0.25rem; color:#ef4444; }
      .time { font-size:1rem; color:#6b7280; }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="game-header">
          <div class="date">${this.date}</div>
          <div class="location">${this.location}</div>
        </div>
        <div class="opponent">vs ${this.opponent}</div>
        <div class="time">${this.time}</div>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2GameCard.tag, Project2GameCard);
