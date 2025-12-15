/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
  static get tag() { return "project2-footer"; }

  static get styles() {
    return [super.styles, css`
      footer {
        margin-top: auto;
        padding: var(--ddd-spacing-5);
        background: var(--hv-surface);
        border-top: 1px solid rgba(0,0,0,0.08);
        font-family: var(--ddd-font-navigation);
      }
      .wrap {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--ddd-spacing-4);
        flex-wrap: wrap;
      }
      a {
        color: var(--hv-accent);
        text-decoration: none;
        font-weight: 700;
      }
      a:hover { text-decoration: underline; }
    `];
  }

  render() {
    return html`
      <footer>
        <div class="wrap">
          <div>© ${new Date().getFullYear()} Happy Volley FC</div>
          <div>
            <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Facebook</a>
            &nbsp;•&nbsp;
            <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Twitter</a>
            &nbsp;•&nbsp;
            <a href="https://hax.psu.edu/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);

