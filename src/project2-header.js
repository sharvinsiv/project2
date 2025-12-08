
/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Header extends DDDSuper(LitElement) {

  static get tag() { return "project2-header"; }

  constructor() {
    super();
    this.currentRoute = "/";
    this.navItems = [
      { path: "/", label: "Home" },
      { path: "/schedule", label: "Schedule" },
      { path: "/roster", label: "Roster" },
      { path: "/stats", label: "Stats" },
      { path: "/standings", label: "Standings" }
    ];
  }

  static get properties() { return { ...super.properties, currentRoute: { type: String }, navItems: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display:block; background-color:#1e40af; color:#f9fafb; box-shadow:0 2px 4px rgba(0,0,0,0.2); }
      .header-wrapper { display:flex; justify-content:space-between; align-items:center; max-width:1200px; margin:0 auto; padding:1rem; }
      .logo { font-size:1.5rem; font-weight:bold; color:#fbbf24; }
      nav { display:flex; gap:1rem; }
      .nav-link { color:#f9fafb; text-decoration:none; padding:0.5rem 1rem; border-radius:0.25rem; font-weight:500; transition:0.3s; }
      .nav-link:hover, .nav-link.active { background-color:#fbbf24; color:#1e40af; }
    `];
  }

  handleClick(e,path) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate',{detail:{path},bubbles:true,composed:true}));
  }

  render() {
    return html`
      <div class="header-wrapper">
        <div class="logo">Happy Volley FC</div>
        <nav>
          ${this.navItems.map(item => html`
            <a href="${item.path}" class="nav-link ${this.currentRoute===item.path?'active':''}" @click=${e=>this.handleClick(e,item.path)}>${item.label}</a>
          `)}
        </nav>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2Header.tag, Project2Header);
