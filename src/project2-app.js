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

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
      theme: { type: String }
    };
  }

  constructor() {
    super();

    // Initial route
    this.route = window.location.pathname || "/";

    // Browser navigation
    window.addEventListener("popstate", () => {
      this.route = window.location.pathname || "/";
    });

    // Theme default (kept as-is)
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
      case "/join":
        return html`<project2-join></project2-join>`;
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

      <main>
        ${this.renderPage()}
      </main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
