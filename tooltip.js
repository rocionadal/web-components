class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
  }

  connectedCallback() { // DOM initializations
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() { // to make clear that i will only call this method from inside the class
    this._tooltipContainer = document.createElement('div');
    this._tooltipContainer.textContent = 'This is the tooltip text';
    this.append(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);

  }
}

customElements.define('rn-tooltip', Tooltip);
