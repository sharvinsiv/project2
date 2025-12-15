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
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: var(--accent-color);
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 24px;
      line-height: 1.6;
      opacity: 0.9;
    }

    form {
      display: grid;
      gap: 18px;
      background: var(--card-bg);
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }

    label {
      font-weight: 600;
      font-size: 14px;
    }

    input {
      padding: 12px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 15px;
    }

    input:focus {
      outline: none;
      border-color: var(--accent-color);
    }

    button {
      margin-top: 12px;
      padding: 14px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 999px;
      border: none;
      background: var(--accent-color);
      color: white;
      cursor: pointer;
    }

    .error {
      color: #d32f2f;
      font-size: 14px;
    }

    .success {
      background: var(--card-bg);
      padding: 40px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 12px 30px rgba(0,0,0,0.15);
    }
  `;

  submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const age = Number(data.get("age"));

    if (!name || !email || !phone || !age) {
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
            <h1>Thank You for Joining!</h1>
            <p>
              Your interest in Happy Volley FC has been received.
              A coach will contact you soon with next steps.
            </p>
          </div>
        </div>
      `;
    }

    return html`
      <div class="container">
        <h1>Join Happy Volley FC</h1>
        <p>
          Interested in joining our youth soccer program?
          Fill out the form below and our coaching staff will be in touch.
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

