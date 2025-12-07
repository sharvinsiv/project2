/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-match-card.js";

export class Project2Home extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-home";
  }

  constructor() {
    super();
    this.teamName = "Happy Valley FC";
    this.season = "2024–2025";
  }

  static get properties() {
    return {
      ...super.properties,
      teamName: { type: String },
      season: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      .hero {
        background: linear-gradient(135deg, #14532d, #86efac);
        color: white;
        padding: 50px;
        border-radius: 16px;
        text-align: center;
      }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <h1>${this.teamName}</h1>
        <p>Season ${this.season}</p>
      </div>

      <h2>Upcoming Matches</h2>
      <project2-match-card></project2-match-card>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
