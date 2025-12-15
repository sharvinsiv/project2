
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-menu.js";

export class Project2Header extends DDDSuper(LitElement) {
  static get tag() { return "project2-header"; }

  static get properties() {
    return { ...super.properties, currentPage: { type: String }, menuOpen: { type: Boolean } };
  }

  constructor() {
    super();
    this.currentPage = "home";
    this.menuOpen = false;
  }

  static get styles() {
    return [super.styles, css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        background: var(--hv-surface);
        border-bottom: 1px solid rgba(0,0,0,0.08);
      }

      .left {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
      }

      .brand {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        cursor: pointer;
        user-select: none;
      }

      .brand img {
        width: 40px;
        height: 40px;
        border-radius: 999px;
        object-fit: cover;
      }

      .brand-title {
        font-size: var(--ddd-font-size-l);
        font-weight: 700;
        letter-spacing: 0.2px;
      }

      button {
        font-family: var(--ddd-font-navigation);
        border: none;
        background: transparent;
        cursor: pointer;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
      }

      button:hover {
        background: rgba(0,0,0,0.06);
      }

      .menuBtn {
        font-weight: 700;
      }
    `];
  }

  _goHome() {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { page: "home" }, bubbles: true, composed: true
    }));
    this.menuOpen = false;
  }

  _toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  _navigateFromMenu(e) {
    const page = e.detail?.page;
    if (!page) return;
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { page }, bubbles: true, composed: true
    }));
    this.menuOpen = false;
  }

  render() {
    return html`
      <header>
        <div class="left">
          <button class="menuBtn" @click=${this._toggleMenu}>☰ Menu</button>

          <div class="brand" @click=${this._goHome} title="Back to Home">
            <!-- Put your AI-generated logo at /assets/happy-volley-logo.png -->
            <img src="/assets/happy-volley-logo.png" alt="Happy Volley FC logo" />
            <div class="brand-title">Happy Volley FC</div>
          </div>
        </div>
      </header>

      <project2-menu
        ?open=${this.menuOpen}
        .currentPage=${this.currentPage}
        @navigate=${this._navigateFromMenu}>
      </project2-menu>
    `;
  }
}

customElements.define(Project2Header.tag, Project2Header);

