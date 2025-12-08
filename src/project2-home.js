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
    this.season = "2025-2026";
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; }
      .container { max-width: 1200px; margin: auto; padding: var(--ddd-spacing-4); }
      .hero { background: linear-gradient(135deg, var(--ddd-theme-default-skyBlue), var(--ddd-theme-default-limeGreen)); color: white; padding: var(--ddd-spacing-8); border-radius: var(--ddd-radius-lg); text-align: center; margin-bottom: var(--ddd-spacing-6); }
      .hero h1 { font-size: var(--ddd-font-size-4xl); margin-bottom: var(--ddd-spacing-2); }
      .hero p { font-size: var(--ddd-font-size-xl); }
      h2 { color: var(--ddd-theme-default-navy80); margin-top: var(--ddd-spacing-6); margin-bottom: var(--ddd-spacing-4); }
    `
  ];

  render() {
    return html`
      <div class="container">
        <div class="hero">
          <h1>${this.teamName}</h1>
          <p>Season ${this.season}</p>
        </div>
        <h2>Welcome to Happy Volley FC!</h2>
        <p>Follow our youth soccer team from State College, PA. Check schedules, player info, stats, and standings!</p>
        <h2>Upcoming Games</h2>
        <project2-game-card></project2-game-card>
      </div>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
