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
        background: var(--card-bg);
        padding: 24px;
        text-align: center;
        border-top: 1px solid rgba(0,0,0,0.12);
      }

      .social-links {
        margin-bottom: 10px;
      }

      a {
        color: var(--accent-color);
        margin: 0 12px;
        text-decoration: none;
        font-weight: 600;
      }

      a:hover {
        text-decoration: underline;
      }

      p {
        margin: 0;
        opacity: 0.85;
      }
    `];
  }

  render() {
    return html`
      <footer>
        <div class="social-links">
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>© 2025 Sharvin Sivarajah. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);

