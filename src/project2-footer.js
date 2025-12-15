/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-footer";
  }

  static get styles() {
    return [super.styles, css`
      footer {
        background: #1f5f2a;
        padding: 24px;
        text-align: center;
        color: white;
      }

      .social-links {
        margin-bottom: 8px;
      }

      a {
        color: #a5d6a7;
        margin: 0 12px;
        text-decoration: none;
        font-weight: 500;
      }

      a:hover {
        text-decoration: underline;
      }
    `];
  }

  render() {
    return html`
      <footer>
        <div class="social-links">
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <p>© 2025 Sharvin Sivarajah. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);

