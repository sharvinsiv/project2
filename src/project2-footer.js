/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {

  static get tag() { return "project2-footer"; }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return { ...super.properties, year: { type: Number } };
  }

  static get styles() {
    return [super.styles, css`
      :host { display: block; background-color: #1e40af; color: #f9fafb; margin-top: 2rem; }
      .footer-wrapper { max-width: 1200px; margin: 0 auto; padding: 1rem; text-align: center; }
      .social-links { display: flex; justify-content:center; gap:1rem; margin-top:0.5rem; }
      .social-link { color: #fbbf24; text-decoration:none; font-weight:bold; }
      .social-link:hover { color:#f9fafb; }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        © ${this.year} Happy Volley FC. All rights reserved.
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(Project2Footer.tag, Project2Footer);
