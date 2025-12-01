/**
 * Copyright 2025 sharvinsiv 
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./project-game-card.js";

export class ProjectSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "project-schedule";
  }

  constructor() {
    super();
    this.games = [
      { date: "Mar 2, 2025", opponent: "Sunrise Strikers", location: "Home", time: "10:00 AM" },
      { date: "Mar 9, 2025", opponent: "Greenfield United", location: "Away", time: "1:00 PM" },
      { date: "Mar 16, 2025", opponent: "Blue River FC", location: "Home", time: "11:30 AM" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .schedule-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      h1 {
        color: var(--pv-dark, #0b6b34);
        font-size: 28px;
        margin-bottom: 16px;
      }
      .games-grid {
        display: grid;
        gap: 12px;
        margin-top: 12px;
      }
    `];
  }

  render() {
    return html`
      <div class="schedule-container">
        <h1> Match Schedule</h1>
        <div class="games-grid">
          ${this.games.map(game => html`
            <project-game-card
              .date="${game.date}"
              .opponent="${game.opponent}"
              .location="${game.location}"
              .time="${game.time}">
            </project-game-card>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(ProjectSchedule.tag, ProjectSchedule);

