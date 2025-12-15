/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-upcoming-band.js";

export class Project2Schedule extends DDDSuper(LitElement) {
  static get tag() { return "project2-schedule"; }

  static get properties() {
    return { ...super.properties, games: { type: Array }, loading: { type: Boolean } };
  }

  constructor() {
    super();
    this.games = [];
    this.loading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this._load();
  }

  async _load() {
    try {
      const res = await fetch("/api/schedule");
      this.games = await res.json();
    } catch (e) {
      console.warn("schedule load failed", e);
      this.games = [];
    } finally {
      this.loading = false;
    }
  }

  static get styles() {
    return [super.styles, css`
      h1 {
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-4);
      }
      .sub {
        margin-bottom: var(--ddd-spacing-5);
        opacity: 0.9;
      }
    `];
  }

  render() {
    return html`
      <h1>Schedule</h1>
      <div class="sub">
        Upcoming games for Happy Volley FC (loaded from <code>/api/schedule</code>).
      </div>

      ${this.loading
        ? html`<div>Loading schedule…</div>`
        : html`<project2-upcoming-band .games=${this.games}></project2-upcoming-band>`
      }
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);

