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

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
      }

      section {
        margin-bottom: 64px;
      }

      h1 {
        color: #2e7d32;
        margin-bottom: 16px;
      }

      h2 {
        margin-bottom: 24px;
      }

      .description {
        max-width: 900px;
        font-size: 18px;
        line-height: 1.7;
      }

      .hero-image {
        width: 100%;
        margin: 48px 0;
      }

      .hero-image img {
        width: 100%;
        height: 420px;
        object-fit: cover;
        border-radius: 16px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.25);
      }

      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 24px;
      }

      figure {
        background: #111;
        border-radius: 14px;
        overflow: hidden;
      }

      figure img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      figcaption {
        padding: 12px;
        text-align: center;
        font-size: 14px;
        color: #ddd;
        background: #000;
      }
    `];
  }

  render() {
    return html`
   
      <section>
        <h1>Welcome to Happy Volley FC</h1>
        <p class="description">
          Happy Volley FC is a youth soccer club dedicated to building strong
          athletes and even stronger character. We believe soccer is more than
          just a game — it is a way to teach teamwork, discipline, leadership,
          and resilience. Our players learn how to support one another, push
          themselves to improve, and take pride in representing their team
          both on and off the field.
          <br><br>
          Through structured training sessions, competitive matches, and a
          positive coaching environment, Happy Volley FC helps young athletes
          grow their skills, confidence, and love for the sport. Whether it’s
          game day excitement or hard work at practice, our club is committed
          to creating a fun, safe, and motivating experience for every player.
        </p>
      </section>

     
      <section class="hero-image">
        <img
          src="https://gopsusports.com/imgproxy/t9mhvu1JWLtLx24u_Ghvxd5lfuckbjylo6sdFBT9O-U/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyMy8wOC8wMi9zVDVFalVBZTY0M1dwU1g1cmg0a1dmR3NkbEd0aGczWHA2eUwwNUtuLmpwZw.jpg"
          alt="Youth soccer team group photo"
        />
      </section>

      <!-- Gallery Section (scroll required) -->
      <section>
        <h2>Team Gallery</h2>
        <div class="gallery">
          <figure>
            <img src="https://spacecoastdaily.com/wp-content/uploads/2025/06/EFSC-Mens-Soccer.jpg">
            <figcaption>Game day energy</figcaption>
          </figure>
          <figure>
            <img src="
https://gearupwithus.com/wp-content/uploads/2025/09/iStock-2228740185-1024x683.jpg">
            <figcaption>Practice session</figcaption>
          </figure>
          <figure>
            <img src="https://www.missourisoccer.org/wp-content/uploads/sites/164/2024/06/State-Cup-13.jpg?w=1024">
            <figcaption>Teamwork on the field</figcaption>
          </figure>
        </div>
      </section>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
