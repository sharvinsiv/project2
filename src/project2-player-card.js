/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2PlayerCard extends DDDSuper(LitElement) {
  static get tag() { return "project2-player-card"; }

  static properties = {
    ...super.properties,
    name: { type: String },
    number: { type: String },
    position: { type: String }
  };

  constructor() {
    super();
    this.name = "Player";
    this.number = "00";
    this.position = "Position";
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .card { text-align: center; padding: var(--ddd-spacing-4); border-radius: var(--ddd-radius-md); background: linear-gradient(135deg, var(--ddd-theme-default-limeGreen), var(--ddd-theme-default-skyBlue)); color: white; transition: transform 0.2s; }
      .card:hover { transform: scale(1.05); }
      .number { font-size: var(--ddd-font-size-4xl); font-weight: bold; margin-bottom: var(--ddd-spacing-2); }
      .name { font-size: var(--ddd-font-size-l); font-weight: medium; margin-bottom: var(--ddd-spacing-1); }
      .position { font-size: var(--ddd-font-size-m); opacity: 0.9; }
    `
  ];

  render() {
    return html`
      <div class="card">
        <div class="number">#${this.number}</div>
        <div class="name">${this.name}</div>
        <div class="position">${this.position}</div>
      </div>
    `;
  }
}

customElements.define(Project2PlayerCard.tag, Project2PlayerCard);
