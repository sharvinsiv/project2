/**
 * Happy Volleys Youth Soccer Team Website
 * @license Apache-2.0
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class HappyVolleysTeam extends DDDSuper(I18NMixin(LitElement)) {
  static get tag() {
    return "happy-volleys-team";
  }

  static get properties() {
    return {
      ...super.properties,
      currentPage: { type: String },
      mobileMenuOpen: { type: Boolean },
      teamMembers: { type: Array },
      newsItems: { type: Array },
      scheduleEvents: { type: Array },
      currentMonth: { type: Number },
      currentYear: { type: Number },
      isLoggedIn: { type: Boolean },
      loginEmail: { type: String },
      loginPassword: { type: String },
      rememberMe: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.currentPage = "home";
    this.mobileMenuOpen = false;
    this.teamMembers = [];
    this.newsItems = [];
    this.scheduleEvents = [];
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear();
    this.isLoggedIn = false;
    this.loginEmail = "";
    this.loginPassword = "";
    this.rememberMe = false;
    
    this.loadData();
  }

  connectedCallback() {
    super.connectedCallback();
    this.checkAuth();
  }

  checkAuth() {
    const saved = localStorage.getItem("happyVolleysAuth");
    if (saved) {
      this.isLoggedIn = true;
    }
  }

  loadData() {
    this.teamMembers = [
      { name: "Emma Wilson", role: "Forward", number: 10, avatar: "https://i.pravatar.cc/100?img=1" },
      { name: "Liam Chen", role: "Midfielder", number: 7, avatar: "https://i.pravatar.cc/100?img=2" },
      { name: "Sophia Martinez", role: "Defender", number: 5, avatar: "https://i.pravatar.cc/100?img=3" },
      { name: "Noah Taylor", role: "Goalkeeper", number: 1, avatar: "https://i.pravatar.cc/100?img=4" },
      { name: "Ava Johnson", role: "Forward", number: 11, avatar: "https://i.pravatar.cc/100?img=5" },
      { name: "Ethan Brown", role: "Midfielder", number: 8, avatar: "https://i.pravatar.cc/100?img=6" },
    ];

    this.newsItems = [
      {
        id: 1,
        title: "Happy Volleys Win Regional Championship!",
        date: "2024-11-20",
        excerpt: "Our team brought home the trophy after an incredible season.",
        image: "https://picsum.photos/400/250?random=1"
      },
      {
        id: 2,
        title: "New Training Facility Opening Soon",
        date: "2024-11-15",
        excerpt: "State-of-the-art fields and equipment coming to State College.",
        image: "https://picsum.photos/400/250?random=2"
      },
      {
        id: 3,
        title: "Spring Season Registration Now Open",
        date: "2024-11-10",
        excerpt: "Sign up your young athlete for our spring soccer program.",
        image: "https://picsum.photos/400/250?random=3"
      },
    ];

    this.scheduleEvents = [
      { date: "2024-12-05", time: "3:00 PM", opponent: "State College United", location: "Home Field", type: "game" },
      { date: "2024-12-08", time: "4:30 PM", opponent: "Practice", location: "Training Center", type: "practice" },
      { date: "2024-12-12", time: "2:00 PM", opponent: "Penn State Youth", location: "Away", type: "game" },
      { date: "2024-12-15", time: "4:30 PM", opponent: "Practice", location: "Training Center", type: "practice" },
      { date: "2024-12-19", time: "6:00 PM", opponent: "Holiday Tournament", location: "Regional Complex", type: "tournament" },
    ];
  }

  navigate(page) {
    this.currentPage = page;
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  handleLogin(e) {
    e.preventDefault();
    if (this.loginEmail && this.loginPassword) {
      this.isLoggedIn = true;
      if (this.rememberMe) {
        localStorage.setItem("happyVolleysAuth", "true");
      }
      this.navigate("home");
    }
  }

  handleLogout() {
    this.isLoggedIn = false;
    localStorage.removeItem("happyVolleysAuth");
  }

  handleForgotPassword() {
    this.navigate("forgot-password");
  }

  prevMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
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
          --black: #000000;
          --yellow: #ffc107;
          --red: #f44336;
          --success-green: #4caf50;
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

        .nav-dropdown {
          position: relative;
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

        .secondary-button {
          background: var(--white);
          color: var(--dark-blue);
          border: 2px solid var(--dark-blue);
          padding: 14px 32px;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: all 0.2s ease;
        }

        .secondary-button:hover {
          background: var(--light-blue);
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

        .team-member-card {
          background: var(--white);
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .team-member-card img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 3px solid var(--bright-green);
        }

        .member-info h3 {
          margin: 0 0 4px 0;
          color: var(--dark-blue);
        }

        .member-info p {
          margin: 0;
          color: var(--medium-gray);
        }

        /* Calendar */
        .calendar-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .calendar-nav-button {
          background: var(--dark-blue);
          color: var(--white);
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }

        .calendar-nav-button:hover {
          background: var(--bright-blue);
        }

        .calendar-event {
          background: var(--white);
          border-left: 4px solid var(--bright-green);
          padding: 16px;
          margin-bottom: 12px;
          border-radius: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .calendar-event.practice {
          border-left-color: var(--bright-blue);
        }

        .calendar-event.tournament {
          border-left-color: var(--yellow);
        }

        .event-date {
          font-weight: bold;
          color: var(--dark-blue);
          margin-bottom: 4px;
        }

        /* Login */
        .login-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          padding: 40px 24px;
        }

        .login-form {
          background: var(--white);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
        }

        .login-input {
          width: 100%;
          padding: 12px;
          margin-bottom: 16px;
          border: 2px solid var(--light-gray);
          border-radius: 6px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        .login-input:focus {
          outline: none;
          border-color: var(--bright-blue);
        }

        .remember-me-checkbox {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .forgot-password-link {
          color: var(--bright-blue);
          text-decoration: none;
          font-size: 0.9rem;
        }

        .forgot-password-link:hover {
          text-decoration: underline;
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

        .highlight-text {
          color: var(--bright-green);
          font-weight: bold;
        }

        .text-link {
          color: var(--bright-blue);
          text-decoration: underline;
          cursor: pointer;
        }

        .text-link:hover {
          color: var(--dark-blue);
        }
      `,
    ];
  }

  renderHeader() {
    return html`
      <div class="header-bar">
        <a class="logo-link" @click="${() => this.navigate("home")}">
          <div class="logo">⚽</div>
          <span>Happy Volleys</span>
        </a>

        <nav class="top-nav">
          <button class="nav-button" @click="${() => this.navigate("home")}">Home</button>
          <button class="nav-button" @click="${() => this.navigate("team")}">Team</button>
          <button class="nav-button" @click="${() => this.navigate("schedule")}">Schedule</button>
          <button class="nav-button" @click="${() => this.navigate("news")}">News</button>
          ${this.isLoggedIn
            ? html`<button class="nav-button" @click="${this.handleLogout}">Logout</button>`
            : html`<button class="nav-button" @click="${() => this.navigate("login")}">Login</button>`
          }
        </nav>

        <button class="mobile-menu-toggle" @click="${this.toggleMobileMenu}">
          ☰
        </button>
      </div>

      ${this.mobileMenuOpen ? html`
        <div class="mobile-nav-menu">
          <button class="nav-button" @click="${() => this.navigate("home")}">Home</button>
          <button class="nav-button" @click="${() => this.navigate("team")}">Team</button>
          <button class="nav-button" @click="${() => this.navigate("schedule")}">Schedule</button>
          <button class="nav-button" @click="${() => this.navigate("news")}">News</button>
          ${this.isLoggedIn
            ? html`<button class="nav-button" @click="${this.handleLogout}">Logout</button>`
            : html`<button class="nav-button" @click="${() => this.navigate("login")}">Login</button>`
          }
        </div>
      ` : ""}
    `;
  }

  renderHomePage() {
    return html`
      <div class="hero-banner">
        <h1 class="page-title">Welcome to Happy Volleys</h1>
        <p class="hero-subtitle">State College's Premier Youth Soccer Team</p>
        <button class="primary-button" @click="${() => this.navigate("team")}">
          Meet Our Team
        </button>
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
          ${this.newsItems.slice(0, 3).map(item => html`
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
    `;
  }

  renderTeamPage() {
    return html`
      <div class="hero-banner">
        <h1 class="page-title">Our Team</h1>
        <p class="hero-subtitle">Meet the Happy Volleys Players</p>
      </div>

      <div class="section-block">
        <div class="card-grid">
          ${this.teamMembers.map(member => html`
            <div class="team-member-card">
              <img src="${member.avatar}" alt="${member.name}" />
              <div class="member-info">
                <h3>${member.name}</h3>
                <p>${member.role} • #${member.number}</p>
              </div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  renderSchedulePage() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    return html`
      <div class="hero-banner">
        <h1 class="page-title">Schedule</h1>
        <p class="hero-subtitle">Upcoming Games & Practices</p>
      </div>

      <div class="section-block">
        <div class="calendar-header-bar">
          <button class="calendar-nav-button" @click="${this.prevMonth}">← Previous</button>
          <h2>${monthNames[this.currentMonth]} ${this.currentYear}</h2>
          <button class="calendar-nav-button" @click="${this.nextMonth}">Next →</button>
        </div>

        ${this.scheduleEvents.map(event => html`
          <div class="calendar-event ${event.type}">
            <div class="event-date">${event.date} at ${event.time}</div>
            <div><strong>${event.opponent}</strong></div>
            <div>${event.location}</div>
          </div>
        `)}
      </div>
    `;
  }

  renderNewsPage() {
    return html`
      <div class="hero-banner">
        <h1 class="page-title">Team News</h1>
        <p class="hero-subtitle">Stay updated with Happy Volleys</p>
      </div>

      <div class="section-block">
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
    `;
  }

  renderLoginPage() {
    return html`
      <div class="login-page">
        <form class="login-form" @submit="${this.handleLogin}">
          <h2 class="section-title" style="text-align: left; margin-bottom: 24px;">Login</h2>
          
          <input 
            type="email" 
            class="login-input" 
            placeholder="Email"
            .value="${this.loginEmail}"
            @input="${(e) => this.loginEmail = e.target.value}"
            required
          />
          
          <input 
            type="password" 
            class="login-input" 
            placeholder="Password"
            .value="${this.loginPassword}"
            @input="${(e) => this.loginPassword = e.target.value}"
            required
          />

          <div class="remember-me-checkbox">
            <input 
              type="checkbox" 
              id="remember"
              .checked="${this.rememberMe}"
              @change="${(e) => this.rememberMe = e.target.checked}"
            />
            <label for="remember">Remember me</label>
          </div>

          <button type="submit" class="primary-button" style="width: 100%; margin-bottom: 12px;">
            Login
          </button>

          <a class="forgot-password-link" @click="${this.handleForgotPassword}">
            Forgot password?
          </a>
        </form>
      </div>
    `;
  }

  renderForgotPasswordPage() {
    return html`
      <div class="login-page">
        <div class="login-form">
          <h2 class="section-title" style="text-align: left; margin-bottom: 24px;">Reset Password</h2>
          
          <input 
            type="email" 
            class="login-input" 
            placeholder="Enter your email"
          />

          <button class="primary-button" style="width: 100%; margin-bottom: 12px;">
            Send Reset Link
          </button>

          <a class="forgot-password-link" @click="${() => this.navigate('login')}">
            Back to login
          </a>
        </div>
      </div>
    `;
  }

  renderFooter() {
    return html`
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

        <p style="text-align: center; margin-top: 24px; color: var(--medium-gray);">
          © 2024 Happy Volleys. All rights reserved.
        </p>
      </footer>
    `;
  }

  render() {
    return html`
      ${this.renderHeader()}
      
      ${this.currentPage === "home" ? this.renderHomePage() : ""}
      ${this.currentPage === "team" ? this.renderTeamPage() : ""}
      ${this.currentPage === "schedule" ? this.renderSchedulePage() : ""}
      ${this.currentPage === "news" ? this.renderNewsPage() : ""}
      ${this.currentPage === "login" ? this.renderLoginPage() : ""}
      ${this.currentPage === "forgot-password" ? this.renderForgotPasswordPage() : ""}

      ${this.renderFooter()}
    `;
  }
}

customElements.define(HappyVolleysTeam.tag, HappyVolleysTeam);
