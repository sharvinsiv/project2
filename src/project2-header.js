
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

  static properties = {
    currentRoute: { type: String },
    navItems: { type: Array },
    sidebarOpen: { type: Boolean },
    theme: { type: String }
  };

  constructor() {
    super();
    this.currentRoute = window.location.pathname || "/";
    this.navItems = [];
    this.sidebarOpen = false;
    this.theme = "dark";
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
      this.navItems = [
        { label: "Home", path: "/" },
        { label: "Schedule", path: "/schedule" },
        { label: "Roster", path: "/roster" },
        { label: "Stats", path: "/stats" },
        { label: "Standings", path: "/standings" },
        { label: "Join Us", path: "/join" }
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

  emitToggleTheme() {
    this.dispatchEvent(
      new CustomEvent("toggle-theme", {
        bubbles: true,
        composed: true
      })
    );
  }

  static styles = css`
    :host {
      display: block;
      background: #1b5e20;
      color: white;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px;
      max-width: 1400px;
      margin: 0 auto;
    }

    nav {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    button {
      background: none;
      border: none;
      color: white;
      padding: 8px 12px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 15px;
      font-family: var(--ddd-font-navigation);
    }

    button:hover {
      background: rgba(255,255,255,0.15);
    }

    .sidebar {
      display: none;
      background: #145a23;
      padding: 16px;
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

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="header">
        <div class="brand" @click=${() => this.emitNavigate("/")}>
          <button @click=${this.toggleSidebar} aria-label="Open menu">☰</button>
          <span>Happy Volley FC</span>
        </div>

        <nav>
          ${this.navItems.map(
            (item) => html`
              <button @click=${() => this.emitNavigate(item.path)}>
                ${item.label}
              </button>
            `
          )}
          <button @click=${this.emitToggleTheme}>
            ${this.theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </div>

      <div class="sidebar ${this.sidebarOpen ? "open" : ""}">
        ${this.navItems.map(
          (item) => html`
            <button @click=${() => this.emitNavigate(item.path)}>
              ${item.label}
            </button>
          `
        )}
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
