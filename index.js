class AmyLi extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open'})
        .appendChild(document.createElement('slot'))
  }

  connectedCallback() {
    this.style.opacity = '1'
    this.interval = setInterval(() => {
      this.style.opacity = this.style.opacity === '1' ? '0' : '1'
    }, 400)
  }

  disconnectedCallback() {
    clearInterval(this.interval)
  }
}

customElements.define('amy-li', AmyLi)
