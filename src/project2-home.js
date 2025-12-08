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
    this.teamName = "Happy Volley FC";
    this.season = "2025 Youth Season";
  }

  static get properties() {
    return { ...super.properties, teamName: { type: String }, season: { type: String } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display:block; }
      .home-container { max-width:1200px; margin:0 auto; }
      .hero {
        background: linear-gradient(135deg, #fbbf24 0%, #ef4444 100%);
        color:#1e40af;
        padding:3rem;
        border-radius:1rem;
        text-align:center;
        margin-bottom:2rem;
      }
      .hero h1 { font-size:3rem; margin-bottom:1rem; }
      .hero p { font-size:1.5rem; }
      .welcome-section {
        padding:1.5rem;
        background-color:#f3f4f6;
        border-radius:0.5rem;
        margin-bottom:2rem;
      }
      h2 { color:#1e40af; font-size:2rem; margin-bottom:1rem; }
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
          <p>
            Follow our youth soccer team's journey! Check out our players, schedule, stats,
            and league standings here.
          </p>
        </div>

        <h2>Upcoming Games</h2>
        <project2-game-card date="Dec 12, 2025" opponent="State College Eagles" location="Home" time="4:00 PM"></project2-game-card>
        <project2-game-card date="Dec 19, 2025" opponent="Penn Valley Strikers" location="Away" time="5:00 PM"></project2-game-card>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2Home.tag, Project2Home);
