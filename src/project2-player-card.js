/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2PlayerCard extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-player-card";
  }

  constructor() {
    super();
    this.name = "Player";
    this.number = "00";
    this.position = "Position";
  }

  static get properties() {
    return {
      ...super.properties,
      name: { type: String },
      number: { type: String },
      position: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      .card {
        background: linear-gradient(135deg, #14532d, #86efac);
        color: white;
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        transition: transform 0.2s ease;
      }
      .card:hover {
        transform: scale(1.05);
      }
      .jersey-number {
        font-size: 36px;
        font-weight: bold;
      }
    `];
  }

  render() {
    return html`
      <div class="card">
        <div class="jersey-number">#${this.number}</div>
        <div>${this.name}</div>
        <div>${this.position}</div>
      </div>
    `;
  }
}

customElements.define(Project2PlayerCard.tag, Project2PlayerCard);
