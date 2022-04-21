function renderIconList (selector, data) {
const DOM = document.querySelector(selector);
let HTML = '';

for (const item of data){
    HTML += `
    <div class="col-lg-6 lt-info">
    <img src="./img/lets-talk/${item.icon}.png" class="lt-ico"></img>
    <div class="lt-text">
    <h3 class="title lt-title">${item.title}</h3>
    <p class="description lt-description">${item.desc}</p>
    </div>
    </div>`

    
}

DOM.innerHTML = HTML;
}

export { renderIconList };