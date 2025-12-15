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
    this.theme = "dark";

    document.documentElement.setAttribute("data-theme", this.theme);

    window.addEventListener("popstate", () => {
      this.route = window.location.pathname || "/";
    });
  }

  handleNavigation(e) {
    if (!e.detail?.path) return;
    this.route = e.detail.path;
    window.history.pushState({}, "", e.detail.path);
  }

  toggleTheme() {
    this.theme = this.theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", this.theme);
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
        background: var(--app-bg);
        color: var(--text-color);
        font-family: var(--ddd-font-navigation);
      }

      main {
        padding: var(--ddd-spacing-6);
        max-width: 1400px;
        margin: 0 auto;
      }

      /* LIGHT MODE */
      :root[data-theme="light"] {
        --app-bg: #f5f7f6;
        --text-color: #111;
        --card-bg: #ffffff;
        --accent-color: var(--ddd-theme-default-landgrantGreen);
      }

      /* DARK MODE */
      :root[data-theme="dark"] {
        --app-bg: #1b1b1b;
        --text-color: #f5f5f5;
        --card-bg: #2a2a2a;
        --accent-color: var(--ddd-theme-default-landgrantGreen);
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

      <main>
        ${this.renderPage()}
      </main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
