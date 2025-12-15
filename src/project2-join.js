/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Join extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-join";
  }

  static properties = {
    submitted: { type: Boolean },
    error: { type: String }
  };

  constructor() {
    super();
    this.submitted = false;
    this.error = "";
  }

  static styles = css`
    .container {
      max-width: 620px;
      margin: 0 auto;
    }

    h1 {
      color: var(--accent-color);
      margin-bottom: var(--ddd-spacing-2);
    }

    p {
      margin-bottom: var(--ddd-spacing-5);
      line-height: 1.6;
      opacity: 0.9;
    }

    form,
    .success {
      background: var(--card-bg);
      padding: var(--ddd-spacing-6);
      border-radius: var(--ddd-radius-lg);
      border: 2px solid var(--accent-color);
      box-shadow: var(--ddd-boxShadow-lg);
    }

    form {
      display: grid;
      gap: var(--ddd-spacing-4);
    }

    label {
      font-weight: 700;
      font-size: 14px;
    }

    input {
      padding: 12px;
      border-radius: 10px;
      border: 1px solid rgba(0, 0, 0, 0.25);
      font-size: 15px;
      background: transparent;
      color: var(--text-color);
    }

    input:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    .error {
      color: #d32f2f;
      font-size: 14px;
    }

    button {
      margin-top: var(--ddd-spacing-2);
      padding: 14px;
      font-size: 16px;
      font-weight: 700;
      border-radius: 999px;
      border: none;
      background: var(--accent-color);
      color: white;
      cursor: pointer;
    }

    .success {
      text-align: center;
    }
  `;

  submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const age = Number(data.get("age"));
    if (![...data.values()].every(Boolean)) {
      this.error = "Please fill out all fields.";
      return;
    }
    if (age < 5 || age > 18) {
      this.error = "Age must be between 5 and 18.";
      return;
    }

    this.error = "";
    this.submitted = true;
  }

  render() {
    if (this.submitted) {
      return html`
        <div class="container">
          <div class="success">
            <h1>Thank You!</h1>
            <p>
              Your interest form has been received. A coach will contact you soon.
            </p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="container">
        <h1>Join Happy Volley FC</h1>
        <p>
          Fill out the form below to register your interest. Our coaching staff will
          reach out with tryout dates and team information.
        </p>

        <form @submit=${this.submitForm}>
          <div>
            <label>Full Name</label>
            <input name="name" type="text" />
          </div>

          <div>
            <label>Email Address</label>
            <input name="email" type="email" />
          </div>

          <div>
            <label>Phone Number</label>
            <input name="phone" type="tel" />
          </div>

          <div>
            <label>Age</label>
            <input name="age" type="number" />
          </div>

          ${this.error ? html`<div class="error">${this.error}</div>` : ""}

          <button type="submit">Submit Interest</button>
        </form>
      </div>
    `;
  }
}

customElements.define(Project2Join.tag, Project2Join);
