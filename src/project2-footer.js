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

  static styles = [
    super.styles,
    css`
      :host { display: block; background: var(--ddd-theme-default-navy80); color: var(--ddd-theme-default-white); padding: var(--ddd-spacing-4) 0; }
      .footer-wrapper { max-width: 1200px; margin: auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
      .social-link { color: var(--ddd-theme-default-skyBlue); text-decoration: none; margin-left: var(--ddd-spacing-3); transition: color 0.3s; }
      .social-link:hover { color: var(--ddd-theme-default-white); }
      .copyright { font-size: var(--ddd-font-size-s); }
    `
  ];

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="copyright">© ${this.year} Sharvin Sivarajah. All rights reserved.</div>
        <div>
          <a href="#" class="social-link">Facebook</a>
          <a href="#" class="social-link">Twitter</a>
          <a href="#" class="social-link">Instagram</a>
        </div>
      </div>
    `;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);
