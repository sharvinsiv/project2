/**
 * Happy Volleys Youth Soccer Team Website - Home Page
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class HappyVolleysHome extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "happy-volleys-home";
  }

  static get properties() {
    return {
      ...super.properties,
      mobileMenuOpen: { type: Boolean },
      newsItems: { type: Array },
    };
  }

  constructor() {
    super();
    this.mobileMenuOpen = false;
    this.newsItems = [];
    this.loadNews();
  }

  loadNews() {
    this.newsItems = [
      {
        id: 1,
        title: "Happy Volleys Win Regional Championship!",
        date: "2024-11-20",
        excerpt: "Our team brought home the trophy after an incredible season of hard work and dedication.",
        image: "https://picsum.photos/400/250?random=1"
      },
      {
        id: 2,
        title: "New Training Facility Opening Soon",
        date: "2024-11-15",
        excerpt: "State-of-the-art fields and equipment coming to State College this spring.",
        image: "https://picsum.photos/400/250?random=2"
      },
      {
        id: 3,
        title: "Spring Season Registration Now Open",
        date: "2024-11-10",
        excerpt: "Sign up your young athlete for our spring soccer program today!",
        image: "https://picsum.photos/400/250?random=3"
      },
    ];
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          min-height: 100vh;
          font-family: var(--ddd-font-navigation, "Verdana", sans-serif);
          --dark-blue: #0d47a1;
          --bright-blue: #2196f3;
          --light-blue: #bbdefb;
          --bright-green: #4caf50;
          --dark-green: #2e7d32;
          --light-green: #c8e6c9;
          --dark-gray: #424242;
          --medium-gray: #757575;
          --light-gray: #e0e0e0;
          --very-light-gray: #f5f5f5;
          --white: #ffffff;
        }

        /* Header */
        .header-bar {
          background: var(--dark-blue);
          color: var(--white);
          padding: 16px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--white);
          font-size: 1.5rem;
          font-weight: bold;
          cursor: pointer;
        }

        .logo {
          width: 50px;
          height: 50px;
          background: var(--bright-green);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
        }

        .top-nav {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .nav-button {
          background: none;
          border: none;
          color: var(--white);
          padding: 10px 16px;
          cursor: pointer;
          font-size: 1rem;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .nav-button:hover {
          background: var(--bright-blue);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--white);
          font-size: 1.8rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .top-nav {
            display: none;
          }
          
          .mobile-menu-toggle {
            display: block;
          }

          .mobile-nav-menu {
            position: fixed;
            top: 82px;
            left: 0;
            right: 0;
            background: var(--dark-blue);
            display: flex;
            flex-direction: column;
            padding: 16px;
            gap: 8px;
            z-index: 100;
          }
        }

        /* Hero Banner */
        .hero-banner {
          background: linear-gradient(135deg, var(--dark-blue), var(--bright-blue));
          color: var(--white);
          padding: 80px 24px;
          text-align: center;
        }

        .page-title {
          font-size: 3rem;
          margin: 0 0 16px 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin: 0 0 32px 0;
        }

        .primary-button {
          background: var(--bright-green);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.2s ease, transform 0.1s ease;
        }

        .primary-button:hover {
          background: var(--dark-green);
          transform: translateY(-2px);
        }

        /* Content Sections */
        .section-block {
          padding: 60px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.2rem;
          color: var(--dark-blue);
          margin: 0 0 32px 0;
          text-align: center;
        }

        .divider-line {
          height: 4px;
          background: var(--bright-green);
          width: 80px;
          margin: 0 auto 40px;
        }

        /* Cards */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .info-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .info-card h3 {
          font-size: 1.3rem;
          color: var(--dark-blue);
          margin: 0 0 12px 0;
        }

        .info-card p {
          color: var(--dark-gray);
          line-height: 1.6;
          margin: 0;
        }

        .news-card {
          background: var(--white);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .news-card:hover {
          transform: translateY(-4px);
        }

        .news-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-content {
          padding: 20px;
        }

        .news-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--medium-gray);
          font-size: 0.9rem;
          margin-bottom: 12px;
        }

        .news-title {
          font-size: 1.3rem;
          color: var(--dark-blue);
          margin: 0 0 12px 0;
        }

        .news-content p {
          color: var(--dark-gray);
          line-height: 1.6;
          margin: 0;
        }

        /* Footer */
        .footer-bar {
          background: var(--dark-gray);
          color: var(--white);
          padding: 40px 24px 20px;
          margin-top: 60px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-bottom: 32px;
        }

        .footer-content h3 {
          margin: 0 0 12px 0;
        }

        .footer-content p {
          margin: 4px 0;
          color: var(--light-gray);
        }

        .social-icons {
          display: flex;
          gap: 16px;
        }

        .social-icon-link {
          width: 40px;
          height: 40px;
          background: var(--bright-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: var(--white);
          transition: background 0.2s ease;
          font-weight: bold;
        }

        .social-icon-link:hover {
          background: var(--bright-green);
        }

        .partner-logos {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 24px 0;
          border-top: 1px solid var(--medium-gray);
        }

        .partner-logo {
          width: 100px;
          height: 60px;
          background: var(--very-light-gray);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--medium-gray);
          font-size: 0.8rem;
        }

        .copyright {
          text-align: center;
          margin-top: 24px;
          color: var(--medium-gray);
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="header-bar">
        <div class="logo-link">
          <div class="logo">⚽</div>
          <span>Happy Volleys</span>
        </div>

        <nav class="top-nav">
          <button class="nav-button">Home</button>
          <button class="nav-button">Team</button>
          <button class="nav-button">Schedule</button>
          <button class="nav-button">News</button>
          <button class="nav-button">Login</button>
        </nav>

        <button class="mobile-menu-toggle" @click="${this.toggleMobileMenu}">
          ☰
        </button>
      </div>

      ${this.mobileMenuOpen ? html`
        <div class="mobile-nav-menu">
          <button class="nav-button">Home</button>
          <button class="nav-button">Team</button>
          <button class="nav-button">Schedule</button>
          <button class="nav-button">News</button>
          <button class="nav-button">Login</button>
        </div>
      ` : ""}

      <div class="hero-banner">
        <h1 class="page-title">Welcome to Happy Volleys</h1>
        <p class="hero-subtitle">State College's Premier Youth Soccer Team</p>
        <button class="primary-button">Meet Our Team</button>
      </div>

      <div class="section-block">
        <h2 class="section-title">Why Join Happy Volleys?</h2>
        <div class="divider-line"></div>
        <div class="card-grid">
          <div class="info-card">
            <h3>🏆 Championship Training</h3>
            <p>Learn from experienced coaches who've led teams to regional victories.</p>
          </div>
          <div class="info-card">
            <h3>🤝 Team Spirit</h3>
            <p>Build lifelong friendships and develop teamwork skills on and off the field.</p>
          </div>
          <div class="info-card">
            <h3>⚽ Skill Development</h3>
            <p>Progressive training programs designed for all skill levels and ages.</p>
          </div>
        </div>
      </div>

      <div class="section-block" style="background: var(--very-light-gray);">
        <h2 class="section-title">Latest News</h2>
        <div class="divider-line"></div>
        <div class="card-grid">
          ${this.newsItems.map(item => html`
            <div class="news-card">
              <img src="${item.image}" alt="${item.title}" />
              <div class="news-content">
                <div class="news-meta">
                  <span>📅</span>
                  <span>${item.date}</span>
                </div>
                <h3 class="news-title">${item.title}</h3>
                <p>${item.excerpt}</p>
              </div>
            </div>
          `)}
        </div>
      </div>

      <footer class="footer-bar">
        <div class="footer-content">
          <div>
            <h3>Happy Volleys</h3>
            <p>Building champions on and off the field since 2010.</p>
          </div>
          
          <div>
            <h3>Contact Us</h3>
            <p>Email: info@happyvolleys.com</p>
            <p>Phone: (814) 555-0123</p>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="#" class="social-icon-link">f</a>
              <a href="#" class="social-icon-link">t</a>
              <a href="#" class="social-icon-link">i</a>
            </div>
          </div>
        </div>

        <div class="partner-logos">
          <div class="partner-logo">Partner 1</div>
          <div class="partner-logo">Partner 2</div>
          <div class="partner-logo">Partner 3</div>
        </div>

        <p class="copyright">© 2024 Happy Volleys. All rights reserved.</p>
      </footer>
    `;
  }
}

customElements.define(HappyVolleysHome.tag, HappyVolleysHome);
