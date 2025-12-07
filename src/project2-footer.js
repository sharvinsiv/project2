/**
 * Copyright 2025 sharvinsiv
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class Project2Footer extends DDDSuper(LitElement) {
  static get tag() {
    return "project2-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        background: #14532d;
        color: white;
        padding: 20px;
        text-align: center;
        margin-top: 50px;
      }
    `];
  }

  render() {
    return html`© ${this.year} Happy Valley FC — State College, PA`;
  }
}

customElements.define(Project2Footer.tag, Project2Footer);
