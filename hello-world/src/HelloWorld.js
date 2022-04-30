import { LitElement, html, css } from 'lit';

export class HelloWorld extends LitElement {
  static get tag() {
    return 'hello-world';
  }
  static get properties() {
    return {
      greeting: {},
      planet: {},
    };
  }

  // controls how the text appears
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 10px;
        background: lightgray;
      }
      .planet {
        color: var(--planet-color, green);
      }
    `;
  }

  constructor() {
    super();
    // define properties
    this.greeting = 'Hello';
    this.planet = 'World';
  }

  // renders planet field on click
  render() {
    return html`
      <span onclick=this.toggleAttribute()>${this.greeting}<span class="planet">${this.planet}</span></span>
    `;
  }

  // update the render of planet field
  toggleAttribute() {
    this.planet = this.planet === ' World' ? ' Neptune' : ' World';
  }
}

customElements.define(HelloWorld.tag, HelloWorld);
