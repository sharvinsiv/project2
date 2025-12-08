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

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    window.addEventListener('popstate', () => { this.route = window.location.pathname; });
  }

  static get properties() {
    return { ...super.properties, route: { type: String } };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        min-height: 100vh;
        font-family: 'Poppins', sans-serif; /* modern, clean font */
        background-color: #ffffff;
        color: #1b5e20; /* dark green */
        line-height: 1.6;
        scroll-behavior: smooth;
      }

      .app-container { 
        display: flex; 
        flex-direction: column; 
        min-height: 100vh; 
      }

      .content { 
        flex: 1; 
        padding: 32px 24px; 
        max-width: 1400px; 
        margin: 0 auto; 
      }
    `];
  }

  handleNavigation(e) {
    if (e.detail?.path) {
      this.route = e.detail.path;
      window.history.pushState({}, "", e.detail.path);
    }
  }

  renderPage() {
    switch(this.route) {
      case '/schedule': return html`<project2-schedule></project2-schedule>`;
      case '/roster': return html`<project2-roster></project2-roster>`;
      case '/stats': return html`<project2-stats></project2-stats>`;
      case '/standings': return html`<project2-standings></project2-standings>`;
      default: return html`<project2-home></project2-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <project2-header .currentRoute="${this.route}" @navigate="${this.handleNavigation}"></project2-header>
        <div class="content">${this.renderPage()}</div>
        <project2-footer></project2-footer>
      </div>
    `;
  }
}

customElements.define(Project2App.tag, Project2App);

