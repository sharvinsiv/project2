
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";

export class Project2Header extends LitElement {
  static get tag() {
    return "project2-header";
  }

  static styles = css`
    header {
      background: var(--accent-color);
      color: white;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .menu-btn {
      font-size: 20px;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
    }

    .logo {
      font-weight: bold;
      cursor: pointer;
      font-size: 18px;
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
      cursor: pointer;
      font-size: 15px;
    }

    button:hover {
      text-decoration: underline;
    }

    .theme-toggle {
      border: 1px solid white;
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 14px;
    }
  `;

  nav(route) {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: route,
      bubbles: true,
      composed: true
    }));
  }

  toggleTheme() {
    this.dispatchEvent(new CustomEvent("toggle-theme", {
      bubbles: true,
      composed: true
    }));
  }

  toggleMenu() {
    this.dispatchEvent(new CustomEvent("toggle-menu", {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <header>
        <div class="left">
          <button class="menu-btn" @click=${this.toggleMenu}>☰</button>
          <div class="logo" @click=${() => this.nav("home")}>
            Happy Volley FC
          </div>
        </div>

        <nav>
          <button @click=${() => this.nav("home")}>Home</button>
          <button @click=${() => this.nav("schedule")}>Schedule</button>
          <button @click=${() => this.nav("roster")}>Roster</button>
          <button @click=${() => this.nav("stats")}>Stats</button>
          <button @click=${() => this.nav("standings")}>Standings</button>
          <button @click=${() => this.nav("join")}>Join Us</button>
          <button class="theme-toggle" @click=${this.toggleTheme}>🌙 / ☀️</button>
        </nav>
      </header>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);
