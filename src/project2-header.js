
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
      sidebarOpen: { type: Boolean },
      theme: { type: String }
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [];
    this.sidebarOpen = false;
    this.theme = "light";
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
      console.warn("Menu API failed, using fallback");
      this.navItems = [
        { label: "Home", path: "/" },
        { label: "Schedule", path: "/schedule" },
        { label: "Roster", path: "/roster" },
        { label: "Stats", path: "/stats" },
        { label: "Standings", path: "/standings" }
      ];
    }
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

  toggleTheme() {
    this.dispatchEvent(
      new CustomEvent("toggle-theme", {
        bubbles: true,
        composed: true
      })
    );
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background-color: #1b5e20;
        color: white;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-4);
        max-width: 1400px;
        margin: 0 auto;
      }

      .left {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
      }

      .logo {
        font-size: 24px;
        font-weight: bold;
        color: #81c784;
        cursor: pointer;
      }

      nav {
        display: flex;
        gap: var(--ddd-spacing-2);
      }

      button {
        background: none;
        border: none;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
      }

      button.active,
      button:hover {
        background-color: #81c784;
        color: black;
      }

      .menu-btn {
        font-size: 22px;
      }

      .sidebar {
        display: none;
        background: #145a23;
        padding: var(--ddd-spacing-4);
      }

      .sidebar.open {
        display: block;
      }

      .sidebar button {
        display: block;
        width: 100%;
        text-align: left;
        margin-bottom: var(--ddd-spacing-2);
      }
    `];
  }

  render() {
    return html`
      <header class="header">
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
          <button @click=${this.toggleTheme}>
            ${this.theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

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

