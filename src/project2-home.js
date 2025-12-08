/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./p2-game-card.js";

export class Project2Home extends DDDSuper(LitElement) {
  static get tag() { return "p2-home"; }

  constructor() {
    super();
    this.teamName = "Happy Volley FC";
    this.season = "2025 Spring";
    this.upcomingGames = [
      { date: "Mar 10", opponent: "Blue Tigers", location: "Home", time: "5:00 PM" },
      { date: "Mar 17", opponent: "Red Hawks", location: "Away", time: "6:00 PM" }
    ];
  }

  static get properties() { return { ...super.properties, teamName: { type: String }, season: { type: String }, upcomingGames: { type: Array } }; }

  static get styles() {
    return [super.styles, css`
      :host { display: block; }
      .hero { text-align: center; padding: 40px; background: linear-gradient(135deg,#26a69a,#004d40); color: white; border-radius: 12px; margin-bottom: 30px; }
      .hero h1 { margin: 0 0 10px 0; font-size: 3rem; }
      .hero p { margin: 0; font-size: 1.2rem; }
      .section { max-width: 1200px; margin: 0 auto 20px; padding: 20px; border-radius: 8px; background: #e0f2f1; }
    `];
  }

  render() {
    return html`
      <div class="hero">
        <h1>${this.teamName}</h1>
        <p>Season ${this.season}</p>
      </div>
      <div class="section">
        <h2>Upcoming Games</h2>
        ${this.upcomingGames.map(game => html`
          <p2-game-card .date="${game.date}" .opponent="${game.opponent}" .location="${game.location}" .time="${game.time}"></p2-game-card>
        `)}
      </div>
    `;
  }

  static get haxProperties() { return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href; }
}

customElements.define(P2Home.tag, P2Home);
