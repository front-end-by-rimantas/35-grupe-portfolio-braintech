function services(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''; 
    let columnIndex = 0;

    for(let obj of data) {
        columnIndex += 1;
        HTML += `
        <div class="services-card">
        <i class="fa fa-${obj.icon} icon" aria-hidden="true" style="color:${obj.colorFront}"></i>
        <h1 class="services-number">0${columnIndex}</h1>
        <a class="a" href="#">${obj.title}</a>
        <p class="paragraph">${obj.desc}</p>
        </div>
        `;    
    }

    DOM.innerHTML= HTML;
}
export { services };