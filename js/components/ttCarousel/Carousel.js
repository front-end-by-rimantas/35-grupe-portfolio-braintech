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

        this.currentlyVisibleIndex = 0;
        this.originalListSize = this.data.list.length;
        this.listSize = 0;

        this.copyCount = 0;
        this.animationInAction = false;
        this.animationDurationInMiliseconds = 1000;

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
        this.action();
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
        this.listSize = list.length;
        this.currentlyVisibleIndex = this.size.desktop;
        const width = this.listSize / this.size.desktop * 100;
        const trans = 100 / this.listSize * this.currentlyVisibleIndex;
       

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

    action() {
        const listDOM = this.carouselDOM.querySelector('.list');
        const nextDOM = this.carouselDOM.querySelector('.fa-angle-right');
        const previousDOM = this.carouselDOM.querySelector('.fa-angle-left');

        nextDOM.addEventListener('click', () => {
            if (!this.animationInAction) {
                this.currentlyVisibleIndex++;
                const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                listDOM.style.transform = `translateX(${trans}%)`;

                // teleportas i prieki
                if (this.currentlyVisibleIndex === this.originalListSize + this.copyCount) {
                    setTimeout(() => {
                        listDOM.style.transition = 'all 0s';
                        this.currentlyVisibleIndex = this.copyCount;
                        const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                        listDOM.style.transform = `translateX(${trans}%)`;
                        setTimeout(() => {
                            listDOM.style.transition = 'all 1s';
                        }, 24)
                    }, this.animationDurationInMiliseconds)
                }
                this.animationInAction = true;

                setTimeout(() => {
                    this.animationInAction = false;
                }, this.animationDurationInMiliseconds)
            }
        });

        previousDOM.addEventListener('click', ()=>{
            if (!this.animationInAction) {
                this.currentlyVisibleIndex--;
                const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                listDOM.style.transform = `translateX(${trans}%)`;

                // teleportas i gala
                if (this.currentlyVisibleIndex === 0) {
                    setTimeout(() => {
                        listDOM.style.transition = 'all 0s';
                        this.currentlyVisibleIndex = this.listSize - 2 * this.copyCount;
                        const trans = -100 / this.listSize * this.currentlyVisibleIndex;
                        listDOM.style.transform = `translateX(${trans}%)`;
                        setTimeout(() => {
                            listDOM.style.transition = 'all 1s';
                        }, 24)
                    }, this.animationDurationInMiliseconds)
                }

                this.animationInAction = true;

                setTimeout(() => {
                    this.animationInAction = false;
                }, this.animationDurationInMiliseconds)
            }
        });
    }

}
export { Carousel };