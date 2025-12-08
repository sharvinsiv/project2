/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2PlayerCard extends DDDSuper(LitElement) {

  static get tag() { return "project2-player-card"; }

  constructor() {
    super();
    this.name = "Player Name";
    this.number = "00";
    this.position = "Position";
  }

  static get properties() {
    return { ...super.properties, name: { type: String }, number: { type: String }, position: { type: String } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .card {
        background: linear-gradient(135deg, #81c784 0%, #1b5e20 100%);
        color: #ffffff;
        border-radius: 8px;
        padding: 16px;
        text-align: center;
        transition: transform 0.2s;
      }
      .card:hover { transform: scale(1.05); }
      .jersey-number { font-size: 36px; font-weight: bold; margin-bottom: 8px; }
      .player-name { font-size: 20px; font-weight: medium; margin-bottom: 4px; }
      .position { font-size: 16px; opacity: 0.9; }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="jersey-number">#${this.number}</div>
        <div class="player-name">${this.name}</div>
        <div class="position">${this.position}</div>
      </div>
    `;
  }
}

customElements.define(Project2PlayerCard.tag, Project2PlayerCard);
