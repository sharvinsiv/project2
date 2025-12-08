
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {

  static get tag() { return "project2-header"; }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/roster", label: "Roster" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
  }

  static get properties() { return { ...super.properties, currentRoute: { type: String }, navItems: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; background-color: #1b5e20; color: #ffffff; }
      .header-wrapper { display: flex; justify-content: space-between; align-items: center; padding: 16px; max-width: 1200px; margin: 0 auto; }
      .logo { font-size: 24px; font-weight: bold; color: #81c784; }
      nav { display: flex; gap: 12px; }
      .nav-link { text-decoration: none; color: #ffffff; padding: 6px 12px; border-radius: 6px; transition: background 0.3s; }
      .nav-link:hover, .nav-link.active { background-color: #81c784; color: #000000; }
    `];
  }

  handleClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', { detail: { path }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo">Happy Volley FC</div>
        <nav>
          ${this.navItems.map(item => html`
            <a href="${item.path}" class="nav-link ${this.currentRoute === item.path ? 'active' : ''}"
              @click="${(e)=>this.handleClick(e,item.path)}">${item.label}</a>`)}
        </nav>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
