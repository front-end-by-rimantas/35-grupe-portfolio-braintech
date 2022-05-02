class InterfaceCard {
    constructor(folder, data){
        this.folder = folder;
        this.data = data;
        console.log(this);
    }
    isValidFolder(){
        return typeof this.folder === 'string' && this.folder !=='';
    }
    isValidData(){
        if(typeof this.data !== 'object'
            || this.data === null
            || Array.isArray(this.data)
            || typeof this.data.foto !== 'string'
            || this.data.foto === ''
            || typeof this.data.alt !== 'string'
            || this.data.alt === ''){
                return false;
        }
        return true;
    }

    render(){
        return `<div class="interface-card">
            
        <div class="testimonials_slides">
        <img src="${this.folder}slides.png" alt="png" class="png">
        ${this.data.txt}
      </div>
      <div class="person">
        <img src="${this.folder}${this.data.foto}" alt="${this.data.alt}">
        <div class="person-info">
          <h2 class="person-name">${this.data.name}</h2>
          <p class="person-response">${this.data.resp}</p>
        </div>
      </div>

            </div>`
    }
}    
export { InterfaceCard };