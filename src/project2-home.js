/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

export class Project2Home extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-home";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          font-family: var(--ddd-font-navigation);
        }

        h1 {
          font-size: var(--ddd-font-size-xl);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-default-potentialMidnight);
        }

        h2 {
          font-size: var(--ddd-font-size-l);
          margin-bottom: var(--ddd-spacing-3);
          color: var(--ddd-theme-default-potentialMidnight);
        }

        p {
          max-width: 800px;
          line-height: 1.6;
          margin-bottom: var(--ddd-spacing-6);
        }

        /* Sponsor cards */
        .sponsor-card {
          background: var(--ddd-theme-default-roarLight);
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-lg);
          text-align: center;
          font-family: var(--ddd-font-navigation);
          box-shadow: var(--ddd-boxShadow-sm);
        }

        .sponsor-card img {
          max-width: 120px;
          height: auto;
          margin-bottom: var(--ddd-spacing-2);
        }
      `,
    ];
  }

  render() {
    return html`
      <h1>Happy Volley FC</h1>

      <p>
        Welcome to Happy Volley FC — a youth soccer organization focused on
        teamwork, player development, and competitive excellence. Follow our
        journey throughout the season for schedules, rosters, stats, and more.
      </p>

      <h2>Upcoming Games</h2>
      <project2-game-card></project2-game-card>

      <!-- Sponsors Section -->
      <h2 style="margin-top: var(--ddd-spacing-10);">
        Our Sponsors
      </h2>

      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--ddd-spacing-6);
          margin-top: var(--ddd-spacing-4);
        "
      >
        <div class="sponsor-card">
          <img src="" alt="Nike logo" />
          <p>Nike</p>
        </div>

        <div class="sponsor-card">
          <img src="" alt="Pepsi logo" />
          <p>Pepsi</p>
        </div>

        <div class="sponsor-card">
          <img src="" alt="Copa90 logo" />
          <p>Copa 90</p>
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
