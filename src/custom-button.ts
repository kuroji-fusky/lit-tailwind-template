import { html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { BaseTailwindElement } from "./BaseTailwindElement"

@customElement("custom-button")
export class Container extends BaseTailwindElement {
  @property()
  name?: string = "World"

  render() {
    return html`
      <button class="bg-slate-300 hover:bg-slate-400 rounded-md border px-2.5 py-2">${this.name}</button>
    `
  }
}
