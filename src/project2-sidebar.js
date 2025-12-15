import { LitElement, html, css } from "lit";

export class Project2Sidebar extends LitElement {
  static properties = { open: { type: Boolean } };

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 260px;
      background: var(--card-bg);
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      z-index: 1000;
      box-shadow: 2px 0 20px rgba(0,0,0,0.3);
    }

    :host([open]) {
      transform: translateX(0);
    }

    nav {
      display: flex;
      flex-direction: column;
      padding: 24px;
    }

    button {
      background: none;
      border: none;
      padding: 14px;
      text-align: left;
      font-size: 16px;
      cursor: pointer;
      color: var(--text-color);
      border-radius: 8px;
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
  }

  render() {
    return html`
      <nav>
        <button @click=${() => this.go("home")}>Home</button>
        <button @click=${() => this.go("schedule")}>Schedule</button>
        <button @click=${() => this.go("roster")}>Roster</button>
        <button @click=${() => this.go("stats")}>Stats</button>
        <button @click=${() => this.go("standings")}>Standings</button>
        <button @click=${() => this.go("join")}>Join Us</button>
      </nav>
    `;
  }
}

customElements.define("project2-sidebar", Project2Sidebar);
