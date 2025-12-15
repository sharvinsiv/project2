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
          Happy Volley FC is a competitive youth soccer club dedicated to developing well rounded athletes through a strong commitment to teamwork, discipline, and a genuine love for the game. We provide a structured and supportive environment where players are challenged to grow technically, tactically, and mentally while learning the value of hard work and accountability. Our club believes that success on the field begins with strong character off the field. Through consistent training, thoughtful coaching, and a focus on personal development, we help young athletes build confidence, resilience, and leadership skills that extend beyond soccer. Players are encouraged to compete with intensity, respect the game, and support their teammates in every situation. 
At Happy Volley FC, representing the club is a responsibility we take seriously. Our athletes are taught to play with pride, give maximum effort, and uphold high standards of sportsmanship at all times. By fostering a culture of growth, respect, and passion, we aim to prepare our players not only for the next level of soccer but also for long term success in life.

        </p>
      </section>

      <section class="hero">
        <img
          src="https://gopsusports.com/imgproxy/t9mhvu1JWLtLx24u_Ghvxd5lfuckbjylo6sdFBT9O-U/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyMy8wOC8wMi9zVDVFalVBZTY0M1dwU1g1cmg0a1dmR3NkbEd0aGczWHA2eUwwNUtuLmpwZw.jpg"
          alt="Happy Volley FC team photo"
        />
      </section>

      <section>
        <div class="counter">
          <h3>7</h3>
          <span>League Championships Won</span>
        </div>
      </section>

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
              src="https://logovectordl.com/wp-content/uploads/2020/08/unibet-logo-vector.png"
              alt="Unibet logo"
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

