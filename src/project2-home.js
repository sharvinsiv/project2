/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Home extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-home";
  }

  static styles = css`
    :host {
      display: block;
    }

    section {
      margin-bottom: 96px;
    }

    h1 {
      font-size: 42px;
      margin-bottom: 24px;
      color: var(--accent-color);
    }

    h2 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
      max-width: 900px;
    }

    /* HERO IMAGE */
    .hero {
      margin-top: 32px;
    }

    .hero img {
      width: 100%;
      height: 460px;
      object-fit: cover;
      border-radius: 20px;
      transition: transform 0.4s ease;
      box-shadow: 0 14px 40px rgba(0,0,0,0.25);
    }

    .hero img:hover {
      transform: scale(1.04);
    }

    /* COUNTER BANNER */
    .counter {
      background: var(--accent-color);
      color: white;
      padding: 48px;
      border-radius: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    }

    .counter h3 {
      font-size: 48px;
      margin-bottom: 8px;
    }

    .counter span {
      font-size: 18px;
      opacity: 0.9;
    }

    /* CONTACT SECTION */
    .contact {
      background: var(--card-bg);
      padding: 48px;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    .contact p {
      margin-bottom: 12px;
      font-size: 18px;
    }

    /* SPONSORS */
    .sponsors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 32px;
    }

    .sponsor-card {
      background: var(--card-bg);
      padding: 32px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      transition: transform 0.3s ease;
    }

    .sponsor-card:hover {
      transform: translateY(-6px);
    }

    .sponsor-card img {
      max-width: 160px;
      max-height: 80px;
      object-fit: contain;
    }
  `;

  render() {
    return html`
      <!-- INTRO -->
      <section>
        <h1>Happy Volley FC</h1>
        <p>
          Happy Volley FC is a competitive youth soccer club built on teamwork,
          discipline, and passion for the game. Our mission is to help young
          athletes grow both on and off the field while representing our club
          with pride, effort, and respect.
        </p>
      </section>

      <!-- HERO IMAGE -->
      <section class="hero">
        <img
          src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6"
          alt="Happy Volley FC team photo"
        />
      </section>

      <!-- CHAMPIONSHIP COUNTER -->
      <section>
        <div class="counter">
          <h3>7</h3>
          <span>League Championships Won</span>
        </div>
      </section>

      <!-- CONTACT -->
      <section>
        <h2>Contact the Team</h2>
        <div class="contact">
          <p><strong>Email:</strong> contact@happyvolleyfc.org</p>
          <p><strong>Phone:</strong> (555) 867-5309</p>
        </div>
      </section>

      <!-- SPONSORS -->
      <section>
        <h2>Our Sponsors</h2>
        <div class="sponsors">
          <div class="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike logo"
            />
          </div>
          <div class="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/COPA90_logo.svg"
              alt="Copa90 logo"
            />
          </div>
          <div class="sponsor-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg"
              alt="Pepsi logo"
            />
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);

