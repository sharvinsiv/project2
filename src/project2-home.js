/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

export class Project2Home extends DDDSuper(LitElement) {

  static get tag() { return "project2-home"; }

  constructor() {
    super();
    this.teamName = "Happy Volley Youth Soccer";
    this.season = "2025-2026";
  }

  static get properties() { return { ...super.properties, teamName: { type: String }, season: { type: String } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .home-container { max-width: 1200px; margin: 0 auto; }
      .hero {
        background: linear-gradient(135deg, #1b5e20 0%, #81c784 100%);
        color: #ffffff;
        padding: 48px;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 24px;
      }
      .hero h1 { font-size: 48px; margin-bottom: 12px; }
      .hero p { font-size: 24px; }
      .welcome-section {
        padding: 16px;
        background-color: #ffffff;
        color: #1b5e20;
        border-radius: 8px;
        margin-bottom: 16px;
      }
      h2 { color: #1b5e20; font-size: 32px; margin-bottom: 12px; }
    `];
  }

  render() {
    return html`
      <div class="home-container">
        <div class="hero">
          <h1>${this.teamName}</h1>
          <p>Season ${this.season}</p>
        </div>
        <div class="welcome-section">
          <h2>Welcome to Happy Volley FC</h2>
          <p>Follow our team through the season with live updates, player stats, schedules, and more.</p>
        </div>
        <h2>Upcoming Games</h2>
        <project2-game-card></project2-game-card>
      </div>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
