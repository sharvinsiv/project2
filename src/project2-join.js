import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Join extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-join";
  }

  static styles = css`
    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    h1 {
      color: var(--accent-color);
      margin-bottom: 16px;
    }

    p {
      margin-bottom: 32px;
      line-height: 1.6;
    }

    form {
      display: grid;
      gap: 20px;
      background: var(--card-bg);
      padding: 32px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }

    label {
      font-weight: 600;
      font-size: 14px;
    }

    input {
      width: 100%;
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
      margin-top: 16px;
      padding: 14px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 999px;
      border: none;
      background: var(--accent-color);
      color: white;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(0,0,0,0.25);
    }
  `;

  render() {
    return html`
      <div class="container">
        <h1>Join Happy Volley FC</h1>
        <p>
          Interested in becoming part of Happy Volley FC?  
          Fill out the form below and our coaching staff will reach out with
          information about tryouts, training sessions, and team placement.
        </p>

        <form>
          <div>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" />
          </div>

          <div>
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your phone number" />
          </div>

          <div>
            <label>Age</label>
            <input type="number" placeholder="Enter your age" />
          </div>

          <button type="button">Submit Interest</button>
        </form>
      </div>
    `;
  }
}

customElements.define(Project2Join.tag, Project2Join);
