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
    return { ...super.properties, name: { type:String }, number: { type:String }, position: { type:String } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display:block; }
      .card {
        background: linear-gradient(135deg,#fbbf24,#f87171);
        color:#1e40af;
        border-radius:0.75rem;
        padding:1rem;
        text-align:center;
        box-shadow:0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s ease;
      }
      .card:hover { transform:scale(1.05); }
      .jersey-number { font-size:2rem; font-weight:bold; margin-bottom:0.5rem; }
      .player-name { font-size:1.2rem; font-weight:500; margin-bottom:0.25rem; }
      .position { font-size:1rem; opacity:0.8; }
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

globalThis.customElements.define(Project2PlayerCard.tag, Project2PlayerCard);
