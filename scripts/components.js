// Breadcrumbs Component
class BreadcrumbsComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: contents;
        }

        nav {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          padding: 1rem;
          border-bottom: solid 1px #aaa;
        }

        ::slotted(a) {
          color: #0066cc;
          text-decoration: none;
          padding: 0 0.25rem;
        }

        ::slotted(a:hover) {
          text-decoration: underline;
        }

        ::slotted(a:not(:last-child))::after {
          content: ">";
          margin-left: 0.5rem;
          color: #999;
          font-weight: 300;
        }
      </style>

      <nav>
        <slot></slot>
      </nav>
    `;
  }
}

registerComponent('app-breadcrumbs', BreadcrumbsComponent);

// Navigation Menu Component
class NavMenuComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          flex-direction: column;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        li {
          margin-bottom: 1rem;
        }

        a {
          text-decoration: none;
          color: #0066cc;
        }

        a:hover {
          text-decoration: underline;
        }

        button {
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          background-color: #0066cc;
          color: white;
          border: none;
          border-radius: 4px;
        }
      </style>
      <nav>
        <ul>
          <li>
            <a href="./index.html">With FOUC</a>
          </li>
          <li>
            <a href="./old-css-solution.html">Old CSS Solution</a>
          </li>
          <li>
            <a href="./js-solution.html">JS Solution</a>
          </li>
          <li>
            <a href="./css-solution.html">CSS Solution</a>
          </li>
        </ul>
      </nav>
      <hr>
      <button id="add-undefined-btn">Add Undefined Element</button>
      <slot></slot>
    `;

    const button = this.shadowRoot.querySelector('#add-undefined-btn');
    button.addEventListener('click', () => {
      const undefinedElement = document.createElement('undefined-element');
      undefinedElement.textContent = 'I\'m Undefined!';
      undefinedElement.style.display = 'block';
      undefinedElement.style.marginTop = '1rem';
      undefinedElement.style.padding = '1rem';
      undefinedElement.style.backgroundColor = '#f0f0f0';
      undefinedElement.style.border = '1px solid #ddd';
      undefinedElement.style.borderRadius = '4px';
      undefinedElement.style.textAlign = 'center';
      this.appendChild(undefinedElement);
    });
  }
}

registerComponent('nav-menu', NavMenuComponent);

function registerComponent(tagName, componentClass) {
  setTimeout(() => customElements.define(tagName, componentClass), 100);
}