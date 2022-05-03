class BlogCarousel {
    constructor(selector, blogitemClass, data, settings) {
        this.selector = selector;
        this.blogitemClass = blogitemClass ;
        this.data = data;
        this.settings = settings;
        this.blogcarouselDOM = null;

        this.size = {
            mobile: 1,
            tablet: 1,
            desktop: 1,
        },
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
        if (!this.isValidSelector()) {
            return [true, 'Neteisingas selector'];
        }

        if (!this.isValidData()) {
            return [true, 'Neteisingi data'];
        }

        if (!this.findTargetElement()) {
            return [true, 'Pagal pateikta selector, nepavyko rasti norimo elemento'];
        }
        this.updateDefaultSettings();

        this.render();
        this.action();

    }

    isValidSelector() {
      return typeof this.selector === 'string' && this.selector !== '';
    }

    isValidData() {
      if (!this.isObject(this.data)
          || !Array.isArray(this.data.list)
          || this.data.list.length === 0) {
          return false;
      }
      return true;
  }

    findTargetElement() {
        this.blogcarouselDOM = document.querySelector(this.selector);
        return !!this.blogcarouselDOM;
    }

    isObject(obj) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)) {
            return false;
        }
        return true;
    }
    updateDefaultSettings(){
        if (!this.isObject(this.settings)) {
            return false;
        }

        if (this.isObject(this.settings.size)) {
            if (Number.isInteger(this.settings.size.mobile)
                && this.settings.size.mobile > 0) {
                this.size.mobile = this.settings.size.mobile;
            }
            if (Number.isInteger(this.settings.size.tablet)
                && this.settings.size.tablet > 0) {
                this.size.tablet = this.settings.size.tablet;
            }
            if (Number.isInteger(this.settings.size.desktop)
                && this.settings.size.desktop > 0) {
                this.size.desktop = this.settings.size.desktop;
            }
        }
        if (typeof this.settings.previousNext === 'boolean') {
            this.previousNext = this.settings.previousNext;
        }

        if (typeof this.settings.dots === 'boolean') {
            this.dots = this.settings.dots;
        }
    }

    
    listHTML () {
      let HTML = '';
      let copyCount = 0;

      for (const key in this.size) {
        if (copyCount < this.size[key]) {
            copyCount = this.size[key];
        }
    }
  
      const list = [
        ...this.data.list.slice(-copyCount),
        ...this.data.list,
        ...this.data.list.slice(0, copyCount),
    ];



      for (const item of this.data.list) {
        const card = new this.blogitemClass(this.data.imageFolder, item);
        
        HTML += `<div class="blog-item">${card.render()}</div>
        `;
    }

        this.listSize = list.length;
        this.currentlyVisibleIndex = this.size.desktop;
        const width = this.listSize / this.size.desktop * 100;
        const trans = 100 / this.listSize * this.currentlyVisibleIndex;
        
        return `<div class="blog-list-view">
        <div class="blog-list" style="transform: translateX(-${trans}%) width: ${width}%;">
        ${HTML}
        </div>
       </div>`
    }
    render() {
        const HTML = this.listHTML();
         
        this.blogcarouselDOM.innerHTML = HTML;
       }
       actionsHTML() {
        if (!this.previousNext && !this.dots) {
            return '';
        }

        let leftAngleHTML = '';
        let rightAngleHTML = '';
        let dotsHTML = '';

        if (this.previousNext) {
            leftAngleHTML = '<i class="angle-icon fa fa-angle-left"></i>';
            rightAngleHTML = '<i class="angle-icon fa fa-angle-right"></i>';
        }

        if (this.dots) {
            dotsHTML = `<div class="dots">
                            <i class="dot active"></i>
                            ${'<i class="dot"></i>'.repeat(this.originalListSize - 1)}
                        </div>`;
        }

        return `<div class="actions">
                    ${leftAngleHTML}
                    ${dotsHTML}
                    ${rightAngleHTML}
                </div>`;
    }

    render() {
        const HTML = this.listHTML() + this.actionsHTML();
        this.blogcarouselDOM.innerHTML = HTML;
    }


    action() {
        const listDOM = this.blogcarouselDOM.querySelector('.blog-list');
        const nextDOM = this.blogcarouselDOM.querySelector('.fa-angle-right');
        const previousDOM = this.blogcarouselDOM.querySelector('.fa-angle-left');

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
                        }, 16)
                    }, this.animationDurationInMiliseconds)
                }

                this.animationInAction = true;

                setTimeout(() => {
                    this.animationInAction = false;
                }, this.animationDurationInMiliseconds)
            }
        });

        previousDOM.addEventListener('click', () => {
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
                        }, 16)
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


export { BlogCarousel }  