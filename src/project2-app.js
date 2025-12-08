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
  static get tag() { return "project2-app"; }

  static properties = {
    ...super.properties,
    currentPath: { type: String }
  };

  constructor() {
    super();
    this.currentPath = window.location.pathname || "/";
    window.addEventListener("popstate", () => this.currentPath = window.location.pathname);
  }

  navigateTo(event) {
    const path = event.detail?.path;
    if(path) {
      this.currentPath = path;
      window.history.pushState({}, "", path);
    }
  }

  renderContent() {
    const routes = {
      "/schedule": html`<project2-schedule></project2-schedule>`,
      "/roster": html`<project2-roster></project2-roster>`,
      "/stats": html`<project2-stats></project2-stats>`,
      "/standings": html`<project2-standings></project2-standings>`,
      "/": html`<project2-home></project2-home>`
    };
    return routes[this.currentPath] || html`<project2-home></project2-home>`;
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; min-height: 100vh; background: var(--ddd-theme-default-white); }
      .app-container { display: flex; flex-direction: column; min-height: 100vh; }
      .main-content { flex: 1; padding: var(--ddd-spacing-4); }
    `
  ];

  render() {
    return html`
      <div class="app-container">
        <project2-header .activePath=${this.currentPath} @navigate=${this.navigateTo}></project2-header>
        <div class="main-content">${this.renderContent()}</div>
        <project2-footer></project2-footer>
      </div>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);
