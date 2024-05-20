/*export function createBookElement({ author, id, image, title }, authors) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);
    element.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    
    element.addEventListener('click', () => {
        const newWindow = window.open('', '_blank', 'width=600,height=400');
        newWindow.document.write(`
            <html>
            <head>
                <title>${title}</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f9; }
                    .book-details { text-align: center; }
                    .book-image { max-width: 200px; border-radius: 10px; }
                    .book-title { font-size: 2rem; color: #ff69b4; }
                    .book-author { color: #ff69b4; }
                    .book-description { margin-top: 20px; color: #333; font-size: 1rem; }
                </style>
            </head>
            <body>
                <div class="book-details">
                    <img class="book-image" src="${image}" alt="${title}">
                    <div class="book-info">
                        <h2 class="book-title">${title}</h2>
                        <p class="book-author">${authors[author]}</p>
                        <p class="book-description">${description}</p>
                    </div>
                </div>
            </body>
            </html>
        `);
    });

    return element;
}
*/