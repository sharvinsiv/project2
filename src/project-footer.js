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
      year: { type: Number },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background: linear-gradient(90deg, var(--pv-dark), var(--pv-primary));
        color: #fff;
        margin-top: 32px;
      }
      .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: 24px;
        text-align: center;
      }
      a {
        color: var(--pv-accent);
        text-decoration: none;
      }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <p>© ${this.year} Happy Volley FC — All Rights Reserved</p>
        <p>Built with Lit + DDDSuper</p>
      </div>
    `;
  }
}

customElements.define(ProjectFooter.tag, ProjectFooter);
