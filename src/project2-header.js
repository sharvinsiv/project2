
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
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
      menuOpen: { type: Boolean },
      theme: { type: String },
      menu: { type: Array }
    };
  }

  constructor() {
    super();
    this.currentRoute = window.location.pathname || "/";
    this.menuOpen = false;
    this.theme = "light";
    this.menu = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadMenu();
  }

  async loadMenu() {
    try {
      const res = await fetch("/api/menu");
      this.menu = await res.json();
    } catch (e) {
      console.error("Failed to load menu", e);
    }
  }

  toggleSidebar() {
    this.menuOpen = !this.menuOpen;
  }

  navigate(path) {
    this.menuOpen = false;
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { path },
        bubbles: true,
        composed: true
      })
    );
  }

  toggleTheme() {
    this.dispatchEvent(
      new CustomEvent("toggle-theme", {
        bubbles: true,
        composed: true
      })
    );
  }

  renderMenuButtons(isSidebar = false) {
    return this.menu.map(
      item => html`
        <button
          class=${!isSidebar && this.currentRoute === item.path ? "active" : ""}
          @click=${() => this.navigate(item.path)}
        >
          ${item.title}
        </button>
      `
    );
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: #1b5e20;
          color: white;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font-weight: 700;
          font-size: 18px;
        }

        .logo {
          width: 36px;
          height: 36px;
          object-fit: contain;
          border-radius: 50%;
        }

        .menu-btn {
          font-size: 22px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        nav {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        nav button {
          background: none;
          border: none;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        nav button.active {
          border-bottom: 2px solid #81c784;
        }

        .join {
          background: #81c784;
          color: #000;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 700;
        }

        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 260px;
          height: 100vh;
          background: #1b5e20;
          padding: 24px;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 999;
        }

        .sidebar.open {
          transform: translateX(0);
        }

        .sidebar button {
          display: block;
          width: 100%;
          margin-bottom: 16px;
          background: none;
          border: none;
          color: white;
          font-size: 16px;
          text-align: left;
          cursor: pointer;
        }
      `
    ];
  }

  render() {
    return html`
      <header>
        <div class="brand" @click=${() => this.navigate("/")}>
          <button
            class="menu-btn"
            @click=${e => {
              e.stopPropagation();
              this.toggleSidebar();
            }}
            aria-label="Open menu"
          >
            ☰
          </button>

          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/012/995/442/small/football-championship-or-football-club-logo-vector.jpg"
            alt="Happy Valley FC logo"
            class="logo"
            loading="lazy"
          />

          <span>Happy Valley FC</span>
        </div>

        <nav>
          ${this.renderMenuButtons()}
          <button @click=${this.toggleTheme}>☀️ / 🌙</button>
        </nav>
      </header>

      <div class="sidebar ${this.menuOpen ? "open" : ""}">
        ${this.renderMenuButtons(true)}
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
