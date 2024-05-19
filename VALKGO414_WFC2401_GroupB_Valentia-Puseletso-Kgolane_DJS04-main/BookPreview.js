// BookPreview.js

class BookPreview extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set data(data) {
        this._data = data;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                .preview {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin: 10px;
                    width: 150px;
                }
                .preview__image {
                    width: 100px;
                    height: 150px;
                }
                .preview__info {
                    text-align: center;
                }
                .preview__title {
                    font-size: 16px;
                    font-weight: bold;
                }
                .preview__author {
                    font-size: 14px;
                    color: #555;
                }
            </style>
            <div class="preview">
                <img class="preview__image" src="${this._data.image}" alt="${this._data.title}" />
                <div class="preview__info">
                    <h3 class="preview__title">${this._data.title}</h3>
                    <div class="preview__author">${this._data.author}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('book-preview', BookPreview);
