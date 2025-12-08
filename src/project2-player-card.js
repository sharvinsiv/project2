/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2PlayerCard extends DDDSuper(LitElement) {
  static get tag() { return "p2-player-card"; }

  constructor() {
    super();
    this.name = "Player Name";
    this.number = "00";
    this.position = "Position";
  }

  static get properties() {
    return { ...super.properties,
      name: { type: String },
      number: { type: String },
      position: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .card { background: linear-gradient(135deg,#004d40,#26a69a); color: white; text-align: center; padding: 16px; border-radius: 12px; transition: transform 0.2s; }
      .card:hover { transform: scale(1.05); }
      .number { font-size: 2.5rem; font-weight: bold; margin-bottom: 4px; }
      .name { font-weight: 500; font-size: 1.1rem; margin-bottom: 2px; }
      .position { opacity: 0.9; font-size: 0.95rem; }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="number">#${this.number}</div>
        <div class="name">${this.name}</div>
        <div class="position">${this.position}</div>
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2PlayerCard.tag, P2PlayerCard);
