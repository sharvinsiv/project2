
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0
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
    this.navItems = [];
  }

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      navItems: { type: Array }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
  }

  async loadMenu() {
    try {
      const res = await fetch("/api/menu");
      const data = await res.json();
      this.navItems = data.items;
    } catch (e) {
      console.error("Failed to load menu", e);
    }
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: #1b5e20;
        color: #ffffff;
      }

      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .logo {
        font-size: 24px;
        font-weight: bold;
        color: #81c784;
        cursor: pointer;
      }

      nav {
        display: flex;
        gap: 12px;
      }

      button {
        background: none;
        border: none;
        color: #ffffff;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 16px;
        cursor: pointer;
        transition: background 0.3s;
      }

      button:hover,
      button.active {
        background-color: #81c784;
        color: #000000;
      }
    `];
  }

  navigate(path) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { path },
        bubbles: true,
        composed: true
      })
    );
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo" @click=${() => this.navigate("/")}>
          Happy Volley FC
        </div>

        <nav>
          ${this.navItems.map(item => html`
            <button
              class="${this.currentRoute === item.path ? "active" : ""}"
              @click=${() => this.navigate(item.path)}
            >
              ${item.label}
            </button>
          `)}
        </nav>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
