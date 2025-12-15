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
import "./project2-join.js";
import "./project2-footer.js";

export class Project2App extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-app";
  }

  static properties = {
    route: { type: String },
    theme: { type: String }
  };

  constructor() {
    super();
    this.route = window.location.pathname || "/";

    // default theme
    this.theme = "dark";

    window.addEventListener("popstate", () => {
      this.route = window.location.pathname || "/";
    });
  }

  connectedCallback() {
    super.connectedCallback();

    // ✅ ONE global stylesheet that actually affects the whole site
    this.ensureGlobalThemeStyles();

    // ✅ apply initial theme
    this.applyTheme(this.theme);
  }

  ensureGlobalThemeStyles() {
    const id = "happy-volley-theme-global";
    if (document.getElementById(id)) return;

    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      /* Theme variables */
      html[data-theme="light"] {
        --hv-bg: #f5f7f6;
        --hv-text: #101312;
        --hv-surface: #ffffff;
        --hv-border: rgba(0,0,0,0.12);
        --hv-accent: var(--ddd-theme-default-landgrantGreen);
      }

      html[data-theme="dark"] {
        --hv-bg: #121212;
        --hv-text: #f5f5f5;
        --hv-surface: #1f1f1f;
        --hv-border: rgba(255,255,255,0.16);
        --hv-accent: var(--ddd-theme-default-landgrantGreen);
      }

      /* Apply globally */
      html, body {
        background: var(--hv-bg) !important;
        color: var(--hv-text) !important;
        font-family: var(--ddd-font-navigation) !important;
        margin: 0;
        transition: background-color 180ms ease, color 180ms ease;
      }

      /* Optional: make common blocks look correct */
      main, section, table, figure, header, footer, div {
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
    this.theme = this.theme === "dark" ? "light" : "dark";
    this.applyTheme(this.theme);
    this.requestUpdate(); // updates header button label
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
      case "/join":
        return html`<project2-join></project2-join>`;
      default:
        return html`<project2-home></project2-home>`;
    }
  }

  static styles = [
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

  render() {
    return html`
      <project2-header
        .theme=${this.theme}
        @navigate=${this.handleNavigation}
        @toggle-theme=${this.toggleTheme}
      ></project2-header>

      <main>${this.renderPage()}</main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
