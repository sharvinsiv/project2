import { LitElement, html, css } from "lit";

export class Project2Menu extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    menu: { type: Object },
    expanded: { type: Object },
    currentPage: { type: String }
  };

  constructor() {
    super();
    this.open = false;
    this.menu = null;
    this.expanded = {};
    this.currentPage = "home";
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadMenu();
  }

  async _loadMenu() {
    try {
      const res = await fetch("/api/menu");
      this.menu = await res.json();
      // Expand first group by default
      this.expanded = { Team: true };
    } catch (e) {
      console.warn("Menu failed to load", e);
      this.menu = { items: [] };
    }
  }

  static styles = css`
    :host {
      display: block;
    }

    .panel {
      display: none;
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
      border-bottom: 1px solid rgba(0,0,0,0.08);
      background: var(--hv-bg);
    }

    :host([open]) .panel {
      display: block;
    }

    .groupTitle {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--ddd-spacing-2) 0;
      font-weight: 800;
      font-size: var(--ddd-font-size-m);
      cursor: pointer;
      user-select: none;
    }

    .links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: var(--ddd-spacing-2);
      padding-bottom: var(--ddd-spacing-3);
    }

    .linkBtn {
      border: 1px solid rgba(0,0,0,0.12);
      border-radius: var(--ddd-radius-sm);
      padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
      background: var(--hv-surface);
      cursor: pointer;
      text-align: left;
      font-family: var(--ddd-font-navigation);
    }

    .linkBtn:hover { background: rgba(0,0,0,0.05); }
    .linkBtn.active { outline: 2px solid var(--hv-accent); }
  `;

  _toggleGroup(title) {
    this.expanded = { ...this.expanded, [title]: !this.expanded[title] };
  }

  _emitNavigate(page) {
    this.dispatchEvent(new CustomEvent("navigate", {
      detail: { page },
      bubbles: true,
      composed: true
    }));
  }

  _renderItem(item) {
    // Group
    if (Array.isArray(item.items)) {
      const title = item.title;
      const isOpen = !!this.expanded[title];
      return html`
        <div>
          <div class="groupTitle" @click=${() => this._toggleGroup(title)}>
            <span>${title}</span>
            <span>${isOpen ? "−" : "+"}</span>
          </div>
          ${isOpen ? html`
            <div class="links">
              ${item.items.map((child) => this._renderItem(child))}
            </div>
          ` : ""}
        </div>
      `;
    }

    // Link
    const page = item?.metadata?.page || item.slug;
    const active = page === this.currentPage;
    return html`
      <button class="linkBtn ${active ? "active" : ""}" @click=${() => this._emitNavigate(page)}>
        ${item.title}
      </button>
    `;
  }

  render() {
    const items = this.menu?.items || [];
    return html`
      <div class="panel">
        ${items.map((item) => this._renderItem(item))}
      </div>
    `;
  }
}

customElements.define("project2-menu", Project2Menu);
