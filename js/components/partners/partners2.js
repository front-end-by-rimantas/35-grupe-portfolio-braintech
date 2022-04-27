function renderPartners2(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `<div class="row">
        <div class="partners-col col-6 col-md-4 col-lg-4 col-xl-2">
        <a class="partner-link" href="#">
          <img class="partner-logo2" src="./img/companies/partners2/${item.logo}.png" alt="Partner Logo"/>
          <img class="partner-logo-hover" src="./img/companies/partners2/${item.logo2}.png" alt="Partner Logo"/>
        </a>
      </div>
      </div>
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderPartners2 };