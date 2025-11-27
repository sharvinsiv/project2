// Updated Lit component to display a homepage-style hero section
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class Project1Home extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "project-1-home";
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: "Verdana", sans-serif;
        }

        header {
          background: #0a2a4d;
          color: white;
          padding: 10px 20px;
          font-size: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .top-links {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
        }

        nav {
          background: #0e3a6b;
          padding: 12px 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        nav a {
          color: white;
          text-decoration: none;
          margin: 0 12px;
          font-weight: bold;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 420px;
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
        }

        .hero-content {
          position: relative;
          z-index: 10;
          color: white;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .hero-subtitle {
          margin-top: 8px;
          font-size: 1.2rem;
        }

        .cta-btn {
          margin-top: 20px;
          background: #2f80ed;
          color: white;
          padding: 12px 26px;
          border-radius: 8px;
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          font-weight: bold;
        }

        .ticker {
          background: #0e3a6b;
          color: white;
          padding: 10px 20px;
          font-size: 0.9rem;
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div>STATE COLLEGE YOUTH ICE HOCKEY ASSOCIATION</div>
        <div class="top-links">
          <span>🔑 Log In</span>
          <span>👤 Sign Up</span>
        </div>
      </header>

      <nav>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Hockey_pictogram.svg" width="60" />
        <div>
          <a href="#">ABOUT</a>
          <a href="#">PROGRAMS</a>
          <a href="#">SCHEDULE</a>
          <a href="#">TEAMS</a>
          <a href="#">RESOURCES</a>
          <a href="#">TOURNAMENTS</a>
        </div>
        <button class="cta-btn" style="padding: 8px 18px; font-size: 1rem;">REGISTER</button>
      </nav>

      <div
        class="hero"
        style="background-image: url('https://images.unsplash.com/photo-1604537529428-15bcbeecce3d');"
      >
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-title">HOCKEY VALLEY</div>
          <div class="hero-subtitle">STATE COLLEGE YOUTH ICE HOCKEY ASSOCIATION</div>
          <button class="cta-btn">BECOME A 25-26 ICER TODAY</button>
        </div>
      </div>

      <div class="ticker">
        Hockey Valley Tournament • March 27, 2026 • Pegula Ice Arena • University Park, PA
      </div>
    `;
  }
}

customElements.define(Project1Home.tag, Project1Home);
