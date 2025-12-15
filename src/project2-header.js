
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

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      navItems: { type: Array },
      sidebarOpen: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [];
    this.sidebarOpen = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
  }

  async loadMenu() {
    try {
      const res = await fetch("/api/menu");
      const data = await res.json();
      this.navItems = data.items || [];
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

      .left {
        display: flex;
        align-items: center;
        gap: 12px;
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
      }

      button:hover,
      button.active {
        background-color: #81c784;
        color: #000;
      }

      .menu-btn {
        font-size: 22px;
      }

      .sidebar {
        background: #145a23;
        padding: 16px;
        display: none;
      }

      .sidebar.open {
        display: block;
      }

      .sidebar button {
        display: block;
        width: 100%;
        text-align: left;
        margin-bottom: 8px;
      }
    `];
  }

  emitNavigate(path) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { path },
        bubbles: true,
        composed: true
      })
    );
    this.sidebarOpen = false;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="left">
          <button class="menu-btn" @click=${this.toggleSidebar}>☰</button>
          <div class="logo" @click=${() => this.emitNavigate("/")}>
            Happy Volley FC
          </div>
        </div>

        <nav>
          ${this.navItems.map(item => html`
            <button
              class="${this.currentRoute === item.path ? "active" : ""}"
              @click=${() => this.emitNavigate(item.path)}
            >
              ${item.label}
            </button>
          `)}
        </nav>
      </div>

      <div class="sidebar ${this.sidebarOpen ? "open" : ""}">
        ${this.navItems.map(item => html`
          <button
            class="${this.currentRoute === item.path ? "active" : ""}"
            @click=${() => this.emitNavigate(item.path)}
          >
            ${item.label}
          </button>
        `)}
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
