/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Schedule extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-schedule";
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array }
    };
  }

  constructor() {
    super();
    this.games = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadSchedule();
  }

  async loadSchedule() {
    try {
      const res = await fetch("/api/schedule");
      this.games = await res.json();
    } catch (e) {
      console.error("Failed to load schedule", e);
    }
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
      }

      h1 {
        margin-bottom: 32px;
        color: var(--hv-accent);
      }

      .schedule-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
      }

      .card {
        background: #ffffff;            
        padding: var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-lg);
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
        border-left: 6px solid var(--hv-accent);

        color: #000000;                  
      }

      .opponent {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 8px;
        color: #000000;
      }

      .meta {
        font-size: 14px;
        opacity: 0.85;
        margin-bottom: 4px;
        color: #000000;
      }

      .location {
        margin-top: 8px;
        font-weight: 600;
        color: var(--hv-accent);
      }
    `];
  }

  render() {
    return html`
      <h1>Season Schedule</h1>

      <div class="schedule-grid">
        ${this.games.map(game => html`
          <div class="card">
            <div class="opponent">vs ${game.opponent}</div>
            <div class="meta">Date ${game.date}</div>
            <div class="meta">Time ${game.time}</div>
            <div class="location">${game.location}</div>
          </div>
        `)}
      </div>
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);
