/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class ProjectHome extends DDDSuper(LitElement) {

  static get tag() {
    return "project-home";
  }

  static get styles() {
    return [super.styles, css`
      .hero {
        background: var(--pv-primary);
        color: white;
        padding: 40px;
        border-radius: 16px;
        text-align: center;
      }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <h2>Welcome to Happy Volley FC!</h2>
        <p>Youth Soccer Excellence • Teamwork • Sportsmanship</p>
      </div>
    `;
  }
}

customElements.define(ProjectHome.tag, ProjectHome);
