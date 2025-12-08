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
      :host { display: block; background-color: #1b5e20; color: #ffffff; margin-top: 48px; font-family: 'Poppins', sans-serif; }
      .footer-wrapper { max-width: 1400px; margin: 0 auto; padding: 24px; text-align: center; border-top: 3px solid #81c784; border-radius: 12px 12px 0 0; }
      .social-links { display: flex; gap: 16px; justify-content: center; margin-top: 12px; }
      .social-link { color: #81c784; text-decoration: none; font-weight: 500; transition: all 0.3s; }
      .social-link:hover { color: #000000; transform: scale(1.1); }
      .copyright { font-size: 14px; opacity: 0.9; }
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

