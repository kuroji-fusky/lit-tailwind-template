import { html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { BaseTailwindElement } from "./BaseTailwindElement"

@customElement("material-container")
export class Container extends BaseTailwindElement {
  render() {
    return html`
      <div class="p-3 rounded-md border-2 shadow-lg">
        <slot></slot>
      </div>
    `
  }
}
