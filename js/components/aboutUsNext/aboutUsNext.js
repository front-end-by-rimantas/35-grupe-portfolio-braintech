function renderAboutUsBar(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `
        <div class="bar">
            <span class="barname">${item.title}</span>
            <span class="barpercent">${item.percent}%</span>
        <div class="bar-img" style="background-color: ${item.color}; border-right: calc(100vh - ${item.percent}vh) solid var(--lgray); "></div>
      </div>
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderAboutUsBar };