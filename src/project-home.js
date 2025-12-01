/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project-game-card.js";

export class ProjectHome extends DDDSuper(LitElement) {

  static get tag() {
    return "project-home";
  }

  constructor() {
    super();
    this.teamName = "Happy Volley FC";
    this.season = "2025 Youth Season";
  }

  static get properties() {
    return {
      ...super.properties,
      teamName: { type: String },
      season: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .home-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      .hero {
        background: linear-gradient(135deg, var(--pv-primary, #1e9b48) 0%, #24b86b 100%);
        color: #fff;
        padding: 40px;
        border-radius: 12px;
        text-align: center;
        margin-bottom: 28px;
      }
      .hero h1 {
        font-size: 34px;
        margin-bottom: 8px;
      }
      .hero p {
        font-size: 16px;
        opacity: 0.95;
      }
      .welcome-section {
        padding: 18px;
        background-color: #ffffff;
        border-radius: 10px;
        margin-bottom: 20px;
        box-shadow: 0 8px 26px rgba(15,60,30,0.04);
      }
      h2 {
        color: var(--pv-dark, #0b6b34);
        font-size: 20px;
        margin-bottom: 12px;
      }
    `];
  }

  render() {
    return html`
      <div class="home-container">
        <div class="hero">
          <h1> ${this.teamName}</h1>
          <p>${this.season}</p>
        </div>
        
        <div class="welcome-section">
          <h2>Welcome to Happy Volley FC</h2>
          <p>
            We are a youth soccer club focused on fun, development, and team spirit.
            Stay up to date with match schedules, player profiles, and team stats.
          </p>
        </div>

        <h2>Upcoming Matches</h2>
        <project-game-card date="Mar 2, 2025" opponent="Sunrise Strikers" location="Home" time="10:00 AM"></project-game-card>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectHome.tag, ProjectHome);
