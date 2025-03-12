import { LitElement, unsafeCSS } from "lit"

import style from "./global.css"

const baseTailwindStyles = unsafeCSS(style)

export class BaseTailwindElement extends LitElement {
  static styles = [baseTailwindStyles]
}

// export const BaseTailwindElementExtends = () => {
//   return class extends LitElement {
//     static styles = [baseTailwindStyles]
//   }
// }