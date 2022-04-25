function renderPartners(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `
       
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderPartners };