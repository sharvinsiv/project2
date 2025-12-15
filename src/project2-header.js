
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

  static styles = css`
    header {
      background: var(--accent-color);
      color: white;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    button {
      background: none;
      border: none;
      color: white;
      font-size: 16px;
      cursor: pointer;
      padding: 6px 10px;
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

  render() {
    return html`
      <header>
        <strong>Happy Volley FC</strong>
        <nav>
          <button @click=${() => this.nav("home")}>Home</button>
          <button @click=${() => this.nav("schedule")}>Schedule</button>
          <button @click=${() => this.nav("roster")}>Roster</button>
          <button @click=${() => this.nav("stats")}>Stats</button>
          <button @click=${() => this.nav("standings")}>Standings</button>

          <!-- Dark / Light Toggle -->
          <button class="theme-toggle" @click=${this.toggleTheme}>
            🌙 / ☀️
          </button>
        </nav>
      </header>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);

