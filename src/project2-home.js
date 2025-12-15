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
    return [
      super.styles,
      css`
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

        /* HERO IMAGE */
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
          transition: transform 0.3s ease;
        }

        .hero-image img:hover {
          transform: scale(1.03);
        }

        /* GALLERY */
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
          transition: transform 0.3s ease;
        }

        figure img:hover {
          transform: scale(1.05);
        }

        figcaption {
          padding: 12px;
          text-align: center;
          font-size: 14px;
          color: #ddd;
          background: #000;
        }

        /* SPONSORS */
        .sponsors {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 32px;
          margin-top: 32px;
        }

        .sponsor-card {
          background: #f5f5f5;
          padding: 24px;
          border-radius: 14px;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .sponsor-card img {
          max-width: 120px;
          height: auto;
          margin-bottom: 12px;
        }
      `,
    ];
  }

  render() {
    return html`

      <section>
        <h1>Welcome to Happy Volley FC</h1>
        <p class="description">
          Happy Volley FC is a competitive youth soccer club dedicated to developing well rounded athletes through a strong commitment to teamwork, discipline, and a genuine love for the game. We provide a structured and supportive environment where players are challenged to grow technically, tactically, and mentally while learning the value of hard work and accountability. Our club believes that success on the field begins with strong character off the field. Through consistent training, thoughtful coaching, and a focus on personal development, we help young athletes build confidence, resilience, and leadership skills that extend beyond soccer. Players are encouraged to compete with intensity, respect the game, and support their teammates in every situation. At Happy Volley FC, representing the club is a responsibility we take seriously. Our athletes are taught to play with pride, give maximum effort, and uphold high standards of sportsmanship at all times. By fostering a culture of growth, respect, and passion, we aim to prepare our players not only for the next level of soccer but also for long term success in life.

        </p>
      </section>

      <section class="hero-image">
        <img
          src="https://gopsusports.com/imgproxy/t9mhvu1JWLtLx24u_Ghvxd5lfuckbjylo6sdFBT9O-U/rs:fit:1980:0:0:0/g:ce:0:0/q:90/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2dvcHN1c3BvcnRzLXByb2QvMjAyMy8wOC8wMi9zVDVFalVBZTY0M1dwU1g1cmg0a1dmR3NkbEd0aGczWHA2eUwwNUtuLmpwZw.jpg"
          alt="Youth soccer team group photo"
        />
      </section>

      <section>
        <h2>Team Gallery</h2>
        <div class="gallery">
          <figure>
            <img src="https://spacecoastdaily.com/wp-content/uploads/2025/06/EFSC-Mens-Soccer.jpg">
            <figcaption>Game day energy</figcaption>
          </figure>

          <figure>
            <img src="https://gearupwithus.com/wp-content/uploads/2025/09/iStock-2228740185-1024x683.jpg">
            <figcaption>Practice session</figcaption>
          </figure>

          <figure>
            <img src="https://www.missourisoccer.org/wp-content/uploads/sites/164/2024/06/State-Cup-13.jpg?w=1024">
            <figcaption>Teamwork on the field</figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2>Our Sponsors</h2>
        <div class="sponsors">
          <div class="sponsor-card">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/nike-4-logo-svg-vector.svg" alt="Nike logo">
            <p>Nike</p>
          </div>

          <div class="sponsor-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Pepsi_2023.svg/2048px-Pepsi_2023.svg.png" alt="Pepsi logo">
            <p>Pepsi</p>
          </div>

          <div class="sponsor-card">
            <img src="https://logovectordl.com/wp-content/uploads/2020/08/unibet-logo-vector.png" alt="Unibet logo">
            <p>Unibet</p>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define(Project2Home.tag, Project2Home);
