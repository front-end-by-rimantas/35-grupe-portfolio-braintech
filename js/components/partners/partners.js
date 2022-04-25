function renderPartners(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `<div class="row">
        <div class="partner-col col-6 col-md-4 col-lg-3 col-xl-2">
             <a class="partner-link" href="${item.link}">
                <img class="partner-logo" src="./img/companies/partners1/${item.logo}.png" alt="Partner Logo"
             /></a>
        </div>
        </div>
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderPartners };