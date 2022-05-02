class Carousel {
    constructor(selector, cardClass, data, settings){
        this.selector = selector;
        this.cardClass = cardClass;
        this.data = data;
        this.settings = settings;
        this.carouselDOM = null;

        this.size = {
            mobile: 1,
            tablet: 1,
            desktop: 1
        }
        this.previousNext = true;
        this.dots = true;

        this.init();
    }

    init() {
        if(!this.isValidSelector()) {
            return [true, 'Neteisingas selektorius'];
        }
        if(!this.isValidData()) {
            return [true, 'Neteisingi data'];
        }
        if(!this.findTargetElement()) {
            return [true, 'toks Selector nerastas'];
        }

        this.updateDefaultSettings();

        this.render();
    }

    isValidSelector() {
        return typeof this.selector === 'string' && this.selector !== '';
    }

    isValidData() {
        if(!this.isObject(this.data)
        || !Array.isArray(this.data.list)
        || this.data.list.length === 0) {
            return false;
        }
        return true;
    }

    findTargetElement(){
        this.carouselDOM = document.querySelector(this.selector);
        return !!this.carouselDOM;
    }

    isObject(obj){
        if(typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)) {
            return false;
        }
        return true;
    }

    updateDefaultSettings(){
        if(!this.isObject(this.settings)) {
            return false;
        }
        if(this.isObject(this.settings.size)){
            if(Number.isInteger(this.settings.size.mobile)
            && this.settings.size.mobile > 0){
            this.size.mobile = this.settings.size.mobile;
            }
            if(Number.isInteger(this.settings.size.tablet)
            && this.settings.size.tablet > 0){
            this.size.tablet = this.settings.size.tablet;
            }
            if(Number.isInteger(this.settings.size.desktop)
            && this.settings.size.desktop > 0){
            this.size.desktop = this.settings.size.desktop;
            }
        }
        if(typeof this.settings.previousNext === 'boolean'){
            this.previousNext = this.settings.previousNext;
        }
        if(typeof this.settings.dots === 'boolean'){
            this.dots = this.settings.dots;
        }

    }

    actionsHTML() {
        if(!this.previousNext && !this.dots){
            return '';
        }

        let leftAngleHTML = '';
        let rightAngleHTML = '';
        let dotsHTML = '';

        if(this.previousNext){
             leftAngleHTML = '<i class="angle-icon fa fa-angle-left"></i>';
             rightAngleHTML = '<i class="angle-icon fa fa-angle-right"></i>';
        }
        if(this.dots){
            dotsHTML = `
            <div class="dots">
                <i class="dot active"></i>
                <i class="dot"></i>
                <i class="dot"></i>
                <i class="dot"></i>
            </div>
            `;
        }

        return `
        <div class="actions">
            ${leftAngleHTML}
            ${dotsHTML}
            ${rightAngleHTML}
       </div>
        `;
    }

    listHTML() {
        let HTML = '';
        let copyCount = 0;
        for(const key in this.size){
            if(copyCount < this.size[key]){
                copyCount = this.size[key];
            }
        }
        const list = [
            ...this.data.list.slice(-copyCount),
            ...this.data.list,
            ...this.data.list.slice(0, copyCount)
        ];
        const width = list.length / this.size.desktop * 100;
        const trans = 100 / list.length;

       

        for (const item of list){
            const card = new this.cardClass(this.data.srcFolder, item);
            HTML += `<div class="item">${card.render()}</div>`;  
               
        }
        return `
        <div class="list-view">
            <div  style="transform: translateX(-${trans}%);
                         width: ${width}%" 
                         class="list">${HTML}</div>
        </div>
        `;
    }

    render(){
        this.carouselDOM.innerHTML = this.listHTML() + this.actionsHTML();
    }

}
export { Carousel };