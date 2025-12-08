
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {
  static get tag() { return "project2-header"; }

  static properties = {
    ...super.properties,
    activePath: { type: String }
  };

  constructor() {
    super();
    this.navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/roster", label: "Roster" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
  }

  navigate(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("navigate", { detail: { path }, bubbles: true, composed: true }));
  }

  static styles = [
    super.styles,
    css`
      :host { display: block; background: var(--ddd-theme-default-navy80); color: var(--ddd-theme-default-white); }
      nav { display: flex; gap: var(--ddd-spacing-4); padding: var(--ddd-spacing-3); }
      .nav-link { color: var(--ddd-theme-default-white); text-decoration: none; padding: var(--ddd-spacing-2) var(--ddd-spacing-3); border-radius: var(--ddd-radius-sm); transition: background 0.3s; }
      .nav-link.active { background: var(--ddd-theme-default-skyBlue); color: var(--ddd-theme-default-navy80); }
      .nav-link:hover { background: var(--ddd-theme-default-skyBlue); color: var(--ddd-theme-default-navy80); }
      .logo { font-weight: bold; font-size: var(--ddd-font-size-xl); color: var(--ddd-theme-default-skyBlue); margin-right: var(--ddd-spacing-4); }
      .header-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: auto; }
    `
  ];

  render() {
    return html`
      <div class="header-container">
        <div class="logo">Happy Volley FC</div>
        <nav>
          ${this.navItems.map(item => html`
            <a href="${item.path}" class="nav-link ${this.activePath === item.path ? "active" : ""}" @click=${e => this.navigate(e, item.path)}>${item.label}</a>
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
