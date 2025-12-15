/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

import "./project2-header.js";
import "./project2-footer.js";
import "./project2-sidebar.js";
import "./project2-home.js";
import "./project2-schedule.js";
import "./project2-roster.js";
import "./project2-stats.js";
import "./project2-standings.js";
import "./project2-join.js";

export class Project2App extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-app";
  }

  static get properties() {
    return {
      route: { type: String },
      theme: { type: String },
      menuOpen: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.route = "home";
    this.theme = "light";
    this.menuOpen = false;
    this.setAttribute("theme", this.theme);
  }

  static styles = css`
    :host {
      /* LIGHT MODE */
      --bg-color: #ffffff;
      --text-color: #111111;
      --accent-color: #2e7d32;
      --card-bg: #f5f5f5;
    }

    :host([theme="dark"]) {
      /* DARK MODE */
      --bg-color: #1b1b1b;
      --text-color: #ffffff;
      --accent-color: #81c784;
      --card-bg: #111111;
    }

    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: var(--bg-color);
      color: var(--text-color);
      transition: background 0.3s ease, color 0.3s ease;
    }

    main {
      flex: 1;
      padding: 32px;
      max-width: 1100px;
      margin: 0 auto;
      width: 100%;
    }
  `;

  navigate(e) {
    this.route = e.detail;
    this.menuOpen = false;
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.setAttribute("theme", this.theme);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  renderPage() {
    switch (this.route) {
      case "schedule":
        return html`<project2-schedule></project2-schedule>`;
      case "roster":
        return html`<project2-roster></project2-roster>`;
      case "stats":
        return html`<project2-stats></project2-stats>`;
      case "standings":
        return html`<project2-standings></project2-standings>`;
      case "join":
        return html`<project2-join></project2-join>`;
      default:
        return html`<project2-home></project2-home>`;
    }
  }

  render() {
    return html`
      <project2-sidebar
        ?open=${this.menuOpen}
        @navigate=${this.navigate}>
      </project2-sidebar>

      <project2-header
        @navigate=${this.navigate}
        @toggle-theme=${this.toggleTheme}
        @toggle-menu=${this.toggleMenu}>
      </project2-header>

      <main>
        ${this.renderPage()}
      </main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
