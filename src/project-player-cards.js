/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectPlayerCard extends DDDSuper(LitElement) {

  static get tag() {
    return "project-player-card";
  }

  constructor() {
    super();
    this.name = "Player Name";
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
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .card {
        background: linear-gradient(135deg, #ffffff 0%, #f6fff6 100%);
        border: 1px solid rgba(11,107,52,0.06);
        color: var(--pv-dark, #0b6b34);
        border-radius: 10px;
        padding: 16px;
        box-shadow: 0 6px 18px rgba(30,155,72,0.04);
        transition: transform 0.16s ease;
        text-align: center;
      }
      .card:hover {
        transform: translateY(-4px);
      }
      .jersey-number {
        font-size: 28px;
        font-weight: 800;
        color: var(--pv-accent, #ff7a18);
        margin-bottom: 8px;
      }
      .player-name {
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 6px;
      }
      .position {
        font-size: 14px;
        color: #586a5b;
      }
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

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectPlayerCard.tag, ProjectPlayerCard);
