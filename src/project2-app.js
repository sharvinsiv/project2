/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

import "./project2-header.js";
import "./project2-footer.js";
import "./project2-home.js";
import "./project2-schedule.js";
import "./project2-roster.js";
import "./project2-stats.js";
import "./project2-standings.js";
import "./project2-join.js";
import "./project2-parent-info.js";
import "./project2-contact.js";

export class Project2App extends DDDSuper(LitElement) {
  static get tag() { return "project2-app"; }

  static get properties() {
    return { ...super.properties, page: { type: String } };
  }

  constructor() {
    super();
    this.page = this._getPageFromUrl();
    window.addEventListener("popstate", () => {
      this.page = this._getPageFromUrl();
    });
  }

  static get styles() {
    return [super.styles, css`
      :host {
        /* Brand palette (built from DDD tokens) */
        --hv-bg: var(--ddd-theme-default-roarLight);
        --hv-text: var(--ddd-theme-default-potentialMidnight);
        --hv-accent: var(--ddd-theme-default-inventOrange);
        --hv-surface: var(--ddd-theme-default-shrineTan);

        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: var(--hv-bg);
        color: var(--hv-text);
        font-family: var(--ddd-font-navigation);
      }

      main {
        flex: 1;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }
    `];
  }

  _getPageFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("page") || "home";
  }

  _setPage(page) {
    const url = new URL(window.location.href);
    url.searchParams.set("page", page);
    window.history.pushState({}, "", url.toString());
    this.page = page;
  }

  handleNavigate(e) {
    if (e.detail?.page) this._setPage(e.detail.page);
  }

  renderPage() {
    switch (this.page) {
      case "schedule": return html`<project2-schedule></project2-schedule>`;
      case "roster": return html`<project2-roster></project2-roster>`;
      case "stats": return html`<project2-stats></project2-stats>`;
      case "standings": return html`<project2-standings></project2-standings>`;
      case "join": return html`<project2-join></project2-join>`;
      case "parent-info": return html`<project2-parent-info></project2-parent-info>`;
      case "contact": return html`<project2-contact></project2-contact>`;
      default: return html`<project2-home @navigate=${this.handleNavigate}></project2-home>`;
    }
  }

  render() {
    return html`
      <project2-header
        .currentPage=${this.page}
        @navigate=${this.handleNavigate}>
      </project2-header>

      <main>${this.renderPage()}</main>

      <project2-footer></project2-footer>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);

