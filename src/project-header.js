
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

  static get properties() {
    return {
      ...super.properties,
      currentRoute: { type: String }
    };
  }

  static get styles() {
    return [super.styles, css`
      header {
        background: var(--pv-primary);
        color: white;
        padding: 20px;
      }
      nav {
        display: flex;
        gap: 24px;
        font-size: 18px;
      }
      .link {
        cursor: pointer;
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
      .active {
        text-decoration: underline;
        color: var(--pv-accent);
      }
    `];
  }

  navigate(path) {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <header>
        <h1>Happy Volley FC</h1>
        <nav>
          <span class="link ${this.currentRoute === '/' ? 'active' : ''}"
                @click="${() => this.navigate('/')}">Home</span>

          <span class="link ${this.currentRoute === '/schedule' ? 'active' : ''}"
                @click="${() => this.navigate('/schedule')}">Schedule</span>

          <span class="link ${this.currentRoute === '/team' ? 'active' : ''}"
                @click="${() => this.navigate('/team')}">Roster</span>

          <span class="link ${this.currentRoute === '/stats' ? 'active' : ''}"
                @click="${() => this.navigate('/stats')}">Stats</span>

          <span class="link ${this.currentRoute === '/standings' ? 'active' : ''}"
                @click="${() => this.navigate('/standings')}">Standings</span>
        </nav>
      </header>
    `;
  }
}

customElements.define(ProjectHeader.tag, ProjectHeader);
