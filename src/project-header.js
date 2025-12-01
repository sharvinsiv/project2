
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "project-header";
  }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/team", label: "Team" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String },
      navItems: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background: var(--pv-primary, #1e9b48);
        color: #fff;
        box-shadow: 0 4px 18px rgba(11,107,52,0.12);
      }
      .header-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 24px;
        max-width: 1200px;
        margin: 0 auto;
      }
      .logo {
        font-size: 20px;
        font-weight: 700;
        color: #fff;
        letter-spacing: 0.6px;
      }
      nav {
        display: flex;
        gap: 12px;
      }
      .nav-link {
        text-decoration: none;
        color: rgba(255,255,255,0.95);
        padding: 8px 12px;
        border-radius: 6px;
        transition: background-color 0.18s ease;
        font-weight: 600;
      }
      .nav-link:hover {
        background: rgba(255,255,255,0.12);
      }
      .nav-link.active {
        background: #fff;
        color: var(--pv-primary, #1e9b48);
      }
    `];
  }

  handleClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo"> Happy Volley FC</div>
        <nav>
          ${this.navItems.map(item => html`
            <a 
              href="${item.path}"
              class="nav-link ${this.currentRoute === item.path ? 'active' : ''}"
              @click="${(e) => this.handleClick(e, item.path)}">
              ${item.label}
            </a>
          `)}
        </nav>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectHeader.tag, ProjectHeader);
