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

  constructor() {
    super();
    this.games = [];
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array }
    };
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
        font-family: 'Poppins', sans-serif;
      }

      h1 {
        color: #1b5e20;
        margin-bottom: 24px;
      }

      .games-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
      }
    `];
  }

  render() {
    return html`
      <h1>Schedule</h1>
      <div class="games-list">
        ${this.games.map(game => html`
          <project2-game-card
            .date=${game.date}
            .opponent=${game.opponent}
            .location=${game.location}
            .time=${game.time}
          ></project2-game-card>
        `)}
      </div>
    `;
  }
}

customElements.define(Project2Schedule.tag, Project2Schedule);
