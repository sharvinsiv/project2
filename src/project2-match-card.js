/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2MatchCard extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-match-card";
  }

  constructor() {
    super();
    this.date = "TBD";
    this.opponent = "Opponent";
    this.location = "Home";
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
      .card {
        background: white;
        border-radius: 10px;
        padding: 16px;
        border: 2px solid #14532d;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
      }
      .date {
        font-weight: bold;
        color: #14532d;
      }
      .opponent {
        font-size: 20px;
        margin: 10px 0;
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="date">${this.date}</div>
        <div class="opponent">vs ${this.opponent}</div>
        <div>${this.location} — ${this.time}</div>
      </div>
    `;
  }
}

customElements.define(Project2MatchCard.tag, Project2MatchCard);
