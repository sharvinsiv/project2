import { LitElement, html, css } from "lit";

export class Project2Sidebar extends LitElement {
  static properties = {
    open: { type: Boolean }
  };

  constructor() {
    super();
    this.open = false;
  }

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 260px;
      background: var(--card-bg);
      box-shadow: 2px 0 12px rgba(0,0,0,0.3);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 1000;
    }

    :host([open]) {
      transform: translateX(0);
    }

    .header {
      padding: 20px;
      font-size: 20px;
      font-weight: bold;
      color: var(--accent-color);
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    button {
      background: none;
      border: none;
      text-align: left;
      padding: 14px 20px;
      font-size: 16px;
      color: var(--text-color);
      cursor: pointer;
    }

    button:hover {
      background: rgba(0,0,0,0.08);
    }
  `;

  go(route) {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: route,
      bubbles: true,
      composed: true
    }));
    this.open = false;
    this.removeAttribute("open");
  }

  render() {
    return html`
      <div class="header">Menu</div>
      <nav>
        <button @click=${() => this.go("home")}>Home</button>
        <button @click=${() => this.go("schedule")}>Schedule</button>
        <button @click=${() => this.go("roster")}>Roster</button>
        <button @click=${() => this.go("stats")}>Stats</button>
        <button @click=${() => this.go("standings")}>Standings</button>
      </nav>
    `;
  }
}

customElements.define("project2-sidebar", Project2Sidebar);
