function renderFeatures(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        HTML += `

        <div class="features">
        <img src="../../../img/why-choose-us/${item.icon}.png" class="ico"></img>
        
            <div class="ico2">
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.desc}</p>
            </div>
        </div>
        `;
    }

    DOM.innerHTML = HTML;
    
}

export { renderFeatures };