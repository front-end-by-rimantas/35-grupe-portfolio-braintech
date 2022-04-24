function renderAboutUsBar(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''; let border = 0;
    for (const item of data) {
        border = 100 - item.percent;
        HTML += `
        <div class="bar">
            <span class="barname">${item.title}</span>
            <span class="barpercent">${item.percent}%</span>
        <div class="bar-img" style="background-color: ${item.color}; border-right: calc(${border}px * 5.3)  solid var(--lgray); "></div>
      </div>
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderAboutUsBar };