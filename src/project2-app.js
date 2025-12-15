/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

import "./project2-header.js";
import "./project2-home.js";
import "./project2-schedule.js";
import "./project2-roster.js";
import "./project2-stats.js";
import "./project2-standings.js";
import "./project2-footer.js";

export class Project2App extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-app";
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String }
    };
  }

  constructor() {
    super();

    // Initial route on page load
    this.routeouteFromURL();

    // Handle browser back / forward
    window.addEventListener("popstate", () => {
      this.route = window.location.pathname || "/";
    });
  }

  /**
   * Normalize route on first load
   */
  routeFromURL() {
    this.route = window.location.pathname || "/";
  }

  /**
   * Handle navigation events from header + sidebar
   */
  handleNavigation(e) {
    if (!e.detail || !e.detail.path) return;

    const path = e.detail.path;

    // Update state + URL
    this.route = path;
    window.history.pushState({}, "", path);
  }

  /**
   * Page routing
   */
  renderPage() {
    switch (this.route) {
      case "/schedule":
        return html`<project2-schedule></project2-schedule>`;

      case "/roster":
        return html`<project2-roster></project2-roster>`;

      case "/stats":
        return html`<project2-stats></project2-stats>`;

      case "/standings":
        return html`<project2-standings></project2-standings>`;

      case "/":
      default:
        return html`<project2-home></project2-home>`;
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          background: #ffffff;
        }

        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
          padding: 32px 24px;
          max-width: 1400px;
          margin: 0 auto;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="layout">
        <project2-header
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}"
        ></project2-header>

        <main>
          ${this.renderPage()}
        </main>

        <project2-footer></project2-footer>
      </div>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
