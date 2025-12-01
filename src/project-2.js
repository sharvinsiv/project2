/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project-header.js";
import "./project-home.js";
import "./project-schedule.js";
import "./project-roster.js";
import "./project-stats.js";
import "./project-standings.js";
import "./project-footer.js";

export class ProjectApp extends DDDSuper(LitElement) {

  static get tag() {
    return "project-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: linear-gradient(180deg, #f6fff6 0%, #e9f8ea 100%);
        --pv-primary: #1e9b48; /* team green */
        --pv-dark: #0b6b34;
        --pv-accent: #ff7a18;
        --pv-surface: #ffffff;
        --pv-muted: #617b68;
      }
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }
      .content {
        flex: 1;
        padding: 24px;
      }
    `];
  }

  initRouting() {
    // Handle initial page load
    this.route = window.location.pathname;
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  handleNavigation(e) {
    if (e.detail && e.detail.path) {
      this.route = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  renderPage() {
    switch(this.route) {
      case '/schedule':
        return html`<project-schedule></project-schedule>`;
      case '/team':
        return html`<project-roster></project-roster>`;
      case '/stats':
        return html`<project-stats></project-stats>`;
      case '/standings':
        return html`<project-standings></project-standings>`;
      default:
        return html`<project-home></project-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <project-header 
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}">
        </project-header>
        <div class="content">
          ${this.renderPage()}
        </div>
        <project-footer></project-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectApp.tag, ProjectApp);
