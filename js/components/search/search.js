

function search(selector) {
        const DOM = document.querySelectorAll(selector);
        selector.addEventListener('click', DOM.querySelector('.searchbox').style.left = "40%");
        console.log(DOM);
}
export { search };