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
      route: { type: String },
      theme: { type: String }
    };
  }

  constructor() {
    super();

    // Routing
    this.route = window.location.pathname || "/";

    window.addEventListener("popstate", () => {
      this.route = window.location.pathname || "/";
    });

    // Theme
    this.theme = "light";
    document.documentElement.setAttribute("data-theme", "light");
  }

  handleNavigation(e) {
    if (!e.detail?.path) return;

    this.route = e.detail.path;
    window.history.pushState({}, "", e.detail.path);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", this.theme);
  }

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
        :root {
          --app-bg: var(--ddd-theme-default-roarLight);
          --app-text: var(--ddd-theme-default-potentialMidnight);
        }

        html[data-theme="dark"] {
          --app-bg: var(--ddd-theme-default-potentialMidnight);
          --app-text: var(--ddd-theme-default-roarLight);
        }

        :host {
          display: block;
          min-height: 100vh;
          background: var(--app-bg);
          color: var(--app-text);
        }

        .layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        main {
          flex: 1;
          padding: var(--ddd-spacing-6);
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
          .theme="${this.theme}"
          @navigate="${this.handleNavigation}"
          @toggle-theme="${this.toggleTheme}"
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
