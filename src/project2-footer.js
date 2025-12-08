/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {

  static get tag() { return "project2-footer"; }

  constructor() { super(); this.year = new Date().getFullYear(); }

  static get properties() { return { ...super.properties, year: { type: Number } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; background-color: #1b5e20; color: #ffffff; margin-top: 32px; }
      .footer-wrapper { max-width: 1200px; margin: 0 auto; padding: 16px; text-align: center; }
      .social-links { display: flex; gap: 12px; justify-content: center; margin-top: 8px; }
      .social-link { color: #81c784; text-decoration: none; transition: color 0.3s; }
      .social-link:hover { color: #000000; }
      .copyright { font-size: 14px; }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="copyright">© ${this.year} Sharvin Sivarajah. All rights reserved.</div>
        <div class="social-links">
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);
