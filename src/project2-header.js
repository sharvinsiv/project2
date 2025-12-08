
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class P2Header extends DDDSuper(LitElement) {
  static get tag() { return "p2-header"; }

  constructor() {
    super();
    this.activePath = "/";
    this.links = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/roster", label: "Roster" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
  }

  static get properties() { return { ...super.properties, activePath: { type: String }, links: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; background: #004d40; color: white; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
      .header { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 10px 20px; }
      .logo { font-weight: bold; font-size: 1.5rem; color: #26a69a; }
      nav { display: flex; gap: 12px; }
      a { text-decoration: none; padding: 6px 12px; border-radius: 5px; color: white; transition: background 0.2s; font-weight: 500; }
      a:hover, a.active { background: #26a69a; color: #004d40; }
    `];
  }

  onLinkClick(e, path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("navigate", { detail: { path }, bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="header">
        <div class="logo">Happy Volley FC</div>
        <nav>
          ${this.links.map(link => html`
            <a href="${link.path}" class="${this.activePath===link.path?'active':''}" @click="${e=>this.onLinkClick(e, link.path)}">${link.label}</a>
          `)}
        </nav>
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(Project2Header.tag, Project2Header);

