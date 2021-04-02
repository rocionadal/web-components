class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() { // DOM initializations
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', )
    this.appendChild(tooltipIcon);
  }
}

customElements.define('rn-tooltip', Tooltip);
