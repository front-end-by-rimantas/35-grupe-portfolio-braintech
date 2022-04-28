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

   
    console.log(list);

      for (const item of this.data.list) {
        HTML += `<div class="blog-item">
        <div class="blog-style">
          <img src="./img/blogs/1.jpg" alt="blog-image" class="blog-image"> 
          <a href="#" class="link btn blue-btn blog-btn">Digital Technology</a>
        </div>
        <div class="blog-content">
          <ul class="blog-data">
             <li class="date"><i class="fa fa-calendar-check-o"></i>16 November 2020</li>
             <li class="user"><i class="fa fa-user-o"></i>admin</li>
         </ul>
          <a class="blog-title">Tech Firms Support Huawei Restriction, Balk and Cost</a>
          <p class="blog-p">We denounce with righteous indige nation and dislike men who are so beguiled...</p>
          <a class="link blog-info" href="#">Learn More</a>
        </div>
        </div>
        `;
    }

    const trans = 100 / list.length * this.size.desktop;
        
        return `<div class="blog-list-view">
        <div class="blog-list" style="transform: translateX(-${trans}%)">
        ${HTML}
        </div>
       </div>`
    }
    render() {
        const HTML = this.listHTML();
         
        this.blogcarouselDOM.innerHTML = HTML;
       }
}

export { BlogCarousel }  