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

    // Theme (default)
    this.theme = "light";
  }

  connectedCallback() {
    super.connectedCallback();

    // Inject ONE global theme stylesheet (works with shadow DOM)
    this.ensureGlobalThemeStyles();

    // Apply theme on first load
    this.applyTheme(this.theme);
  }

  ensureGlobalThemeStyles() {
    const id = "happy-volley-global-theme";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      /* Light */
      html[data-theme="light"] {
        --hv-bg: var(--ddd-theme-default-roarLight);
        --hv-text: var(--ddd-theme-default-potentialMidnight);
        --hv-surface: #ffffff;
        --hv-border: rgba(0,0,0,0.12);
      }

      /* Dark */
      html[data-theme="dark"] {
        --hv-bg: var(--ddd-theme-default-potentialMidnight);
        --hv-text: var(--ddd-theme-default-roarLight);
        --hv-surface: #1b1b1b;
        --hv-border: rgba(255,255,255,0.16);
      }

      /* Apply globally */
      html, body {
        background: var(--hv-bg) !important;
        color: var(--hv-text) !important;
        font-family: var(--ddd-font-navigation) !important;
        margin: 0;
      }

      /* Make common “surface” areas look right in both themes */
      main, section, table, .card, figure {
        color: var(--hv-text);
      }
    `;
    document.head.appendChild(style);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  handleNavigation(e) {
    if (!e.detail?.path) return;
    this.route = e.detail.path;
    window.history.pushState({}, "", e.detail.path);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.applyTheme(this.theme);
    // Force re-render so header button label updates
    this.requestUpdate();
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
        :host {
          display: block;
          min-height: 100vh;
          background: var(--hv-bg);
          color: var(--hv-text);
          font-family: var(--ddd-font-navigation);
        }

        main {
          padding: var(--ddd-spacing-6);
          max-width: 1400px;
          margin: 0 auto;
        }
      `
    ];
  }

  render() {
    return html`
      <project2-header
        .currentRoute="${this.route}"
        .theme="${this.theme}"
        @navigate="${this.handleNavigation}"
        @toggle-theme="${this.toggleTheme}"
      ></project2-header>

      <main>${this.renderPage()}</main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);

