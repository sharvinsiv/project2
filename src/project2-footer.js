/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
  static get tag() { return "p2-footer"; }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() { return { ...super.properties, year: { type: Number } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; background: #004d40; color: white; padding: 16px 0; }
      .wrapper { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; }
      .social a { color: #26a69a; margin-left: 10px; text-decoration: none; }
      .social a:hover { color: white; }
    `];
  }

  render() {
    return html`
      <div class="wrapper">
        <div>© ${this.year} Sharvin Sivarajah. All rights reserved.</div>
        <div class="social">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2Footer.tag, P2Footer);
