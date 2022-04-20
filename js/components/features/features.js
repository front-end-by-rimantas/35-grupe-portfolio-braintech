function renderFeatures(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `
     <div class="col-12">
            <i class="fa fa-${item.icon}" aria-hidden="true"></i>
            <h3 class="title">${item.title}</h3>
            <p class="description">${item.desc}</p>
        </div>
        `;
    }

    DOM.innerHTML = HTML;
    
}

export { renderFeatures };