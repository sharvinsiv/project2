
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-header";
  }

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

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      navItems: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: #14532d;
        color: white;
      }
      .header-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        max-width: 1200px;
        margin: auto;
      }
      .logo {
        font-size: 24px;
        font-weight: bold;
        color: #86efac;
      }
      nav {
        display: flex;
        gap: 20px;
      }
      .nav-link {
        color: white;
        text-decoration: none;
        padding: 8px 14px;
        border-radius: 6px;
      }
      .nav-link.active,
      .nav-link:hover {
        background-color: #86efac;
        color: #14532d;
      }
    `];
  }

  handleClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo">Happy Valley FC</div>
        <nav>
          ${this.navItems.map(item => html`
            <a
              href="${item.path}"
              class="nav-link ${this.currentRoute === item.path ? "active" : ""}"
              @click="${(e) => this.handleClick(e, item.path)}">
              ${item.label}
            </a>
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
