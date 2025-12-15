
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
    open: { type: Boolean },
  };

  constructor() {
    super();
    this.open = false;
  }

  static styles = [
    super.styles,
    css`
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-potentialMidnight);
        color: var(--ddd-theme-default-roarLight);
      }

      .left {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
      }

      .logo {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        font-family: var(--ddd-font-navigation);
        font-weight: bold;
        cursor: pointer;
      }

      .logo img {
        height: 42px;
        width: 42px;
      }

      button {
        background: none;
        border: none;
        color: inherit;
        font-size: var(--ddd-font-size-m);
        cursor: pointer;
      }

      nav {
        display: flex;
        gap: var(--ddd-spacing-4);
      }

      .menu {
        display: none;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        background: var(--ddd-theme-default-roarLight);
        color: var(--ddd-theme-default-potentialMidnight);
      }

      .menu[open] {
        display: flex;
      }
    `,
  ];

  nav(route) {
    this.dispatchEvent(
      new CustomEvent("navigate", {
        detail: { path: `/${route === "home" ? "" : route}` },
        bubbles: true,
        composed: true,
      })
    );
  }

  toggleMenu() {
    this.open = !this.open;
  }

  render() {
    return html`
      <header>
        <div class="left">
          <button @click=${this.toggleMenu}>☰</button>

          <div class="logo" @click=${() => this.nav("home")}>
            <img
              src="data:image/svg+xml;utf8,
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <circle cx='50' cy='50' r='48' fill='%232563eb'/>
                <polygon points='50,15 65,40 90,40 70,58 78,85 50,68 22,85 30,58 10,40 35,40'
                  fill='white'/>
              </svg>"
              alt="Happy Volley FC logo"
            />
            Happy Volley FC
          </div>
        </div>

        <nav>
          <button @click=${() => this.nav("schedule")}>Schedule</button>
          <button @click=${() => this.nav("roster")}>Roster</button>
          <button @click=${() => this.nav("stats")}>Stats</button>
          <button @click=${() => this.nav("standings")}>Standings</button>
        </nav>
      </header>

      <div class="menu" ?open=${this.open}>
        <button @click=${() => this.nav("home")}>Home</button>
        <button @click=${() => this.nav("schedule")}>Schedule</button>
        <button @click=${() => this.nav("roster")}>Roster</button>
        <button @click=${() => this.nav("stats")}>Stats</button>
        <button @click=${() => this.nav("standings")}>Standings</button>
      </div>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);

