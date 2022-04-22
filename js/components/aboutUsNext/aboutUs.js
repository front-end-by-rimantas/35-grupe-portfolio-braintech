function aboutUs(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = ''; let blet = '';
    let parser = new DOMParser();
    for(let obj of data) {
        
        blet = `
        <div class="card">
        <i class="fa fa-${obj.icon} icon" aria-hidden="true" ></i>
        <a class="a" href="#">${obj.title}</a>
        <p class="paragraph">${obj.desc}</p>
        </div>
        `;
        let doc = parser.parseFromString(blet, 'text/html');
        
        let DOMicon = doc.querySelector('.icon');
        DOMicon.style.setProperty('color', `${obj.colorFront}`);
        HTML += blet;
        
        /* const DOMicon = document.querySelector(icon);
        const DOMa = document.querySelector(a);
        const DOMp = document.querySelector(paragraph);
        DOMicon.style.setProperty('color', `${obj.colorFront}`); */
        
    }

    DOM.innerHTML= HTML;
    console.log(HTML);
}




export { aboutUs };