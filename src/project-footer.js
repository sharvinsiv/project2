/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "project-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return {
      ...super.properties,
      year: { type: Number }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background: linear-gradient(90deg, #0b6b34 0%, #1e9b48 100%);
        color: #fff;
        margin-top: 32px;
      }
      .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
      .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
      .social-links {
        display: flex;
        gap: 12px;
      }
      .social-link {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        transition: opacity 0.2s ease;
      }
      .social-link:hover {
        opacity: 0.85;
      }
      .copyright {
        font-size: 13px;
      }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="copyright">
            © ${this.year} Happy Volley FC. All rights reserved.
          </div>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Twitter</a>
          </div>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectFooter.tag, ProjectFooter);
