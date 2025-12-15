/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project2-game-card.js";

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
      const data = await res.json();
      this.games = data.games || [];
    } catch (e) {
      console.error("Schedule API failed", e);
      this.games = [];
    }
  }

  static get styles() {
    return [super.styles, css`
      h1 {
        margin-bottom: var(--ddd-spacing-4);
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--ddd-spacing-4);
      }
    `];
  }

  render() {
    return html`
      <h1>Upcoming Matches</h1>
      <div class="grid">
        ${this.games.map(game => html`
          <project2-game-card
            .date="${game.date}"
            .opponent="${game.opponent}"
            .location="${game.location}"
            .time="${game.time}"
          ></project2-game-card>
        `)}
      </div>
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);
