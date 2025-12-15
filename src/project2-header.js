
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
      theme: { type: String }
    };
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.menuOpen = false;
    this.theme = "light";
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

  static get styles() {
    return [super.styles, css`
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
    `];
  }

  render() {
    return html`
      <header>
        <div
          class="brand"
          @click=${() => this.navigate("/")}
        >
          <button
            class="menu-btn"
            @click=${(e) => {
              e.stopPropagation();
              this.toggleSidebar();
            }}
            aria-label="Open menu"
          >
            ☰
          </button>
          Happy Volley FC
        </div>

        <nav>
          <button class=${this.currentRoute === "/" ? "active" : ""} @click=${() => this.navigate("/")}>Home</button>
          <button class=${this.currentRoute === "/schedule" ? "active" : ""} @click=${() => this.navigate("/schedule")}>Schedule</button>
          <button class=${this.currentRoute === "/roster" ? "active" : ""} @click=${() => this.navigate("/roster")}>Roster</button>
          <button class=${this.currentRoute === "/stats" ? "active" : ""} @click=${() => this.navigate("/stats")}>Stats</button>
          <button class=${this.currentRoute === "/standings" ? "active" : ""} @click=${() => this.navigate("/standings")}>Standings</button>
          <button class="join" @click=${() => this.navigate("/join")}>Join Us</button>
          <button @click=${this.toggleTheme}>🌙 / ☀️</button>
        </nav>
      </header>

      <div class="sidebar ${this.menuOpen ? "open" : ""}">
        <button @click=${() => this.navigate("/")}>Home</button>
        <button @click=${() => this.navigate("/schedule")}>Schedule</button>
        <button @click=${() => this.navigate("/roster")}>Roster</button>
        <button @click=${() => this.navigate("/stats")}>Stats</button>
        <button @click=${() => this.navigate("/standings")}>Standings</button>
        <button @click=${() => this.navigate("/join")}>Join Us</button>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
