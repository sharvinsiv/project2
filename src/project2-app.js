/**
 * Copyright 2025 Sharvin Sivarajah
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./p2-header.js";
import "./p2-home.js";
import "./p2-schedule.js";
import "./p2-roster.js";
import "./p2-stats.js";
import "./p2-standings.js";
import "./p2-footer.js";

export class Project2App extends DDDSuper(LitElement) {
  static get tag() { return "project2-app"; }

  constructor() {
    super();
    this.currentPath = window.location.pathname || "/";
    window.addEventListener("popstate", () => this.currentPath = window.location.pathname);
  }

  static get properties() {
    return { ...super.properties, currentPath: { type: String } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; min-height: 100vh; background: #f4f7f8; }
      .container { display: flex; flex-direction: column; min-height: 100vh; }
      .main-content { flex: 1; padding: 20px; }
    `];
  }

  navigate(e) {
    if(e.detail?.path) {
      this.currentPath = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  getCurrentView() {
    switch(this.currentPath) {
      case "/schedule": return html`<p2-schedule></p2-schedule>`;
      case "/roster": return html`<p2-roster></p2-roster>`;
      case "/stats": return html`<p2-stats></p2-stats>`;
      case "/standings": return html`<p2-standings></p2-standings>`;
      default: return html`<p2-home></p2-home>`;
    }
  }

  render() {
    return html`
      <div class="container">
        <p2-header
          .activePath="${this.currentPath}"
          @navigate="${this.navigate}">
        </p2-header>
        <div class="main-content">
          ${this.getCurrentView()}
        </div>
        <p2-footer></p2-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

customElements.define(Project2App.tag, Project2App);
