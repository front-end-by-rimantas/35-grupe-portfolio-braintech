function aboutUs(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''; 
    
    for(let obj of data) {

        HTML += `
        <div class="card">
        <i class="fa fa-${obj.icon} icon" aria-hidden="true" style="color:${obj.colorFront}"></i>
        <a class="a" href="#">${obj.title}</a>
        <p class="paragraph">${obj.desc}</p>
        </div>
        `;    
    }

    DOM.innerHTML= HTML;
    console.log(HTML);
}
export { aboutUs };