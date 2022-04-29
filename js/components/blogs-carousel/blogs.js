class renderBlogs{
  constructor(folder, data) {
    this.folder=folder;
    this.data=data;
  }
  isValidFolder() {
    return typeof this.folder === 'string' && this.folder !== '';
}

isValidData() {
    if (typeof this.data !== 'object'
        || this.data === null
        || Array.isArray(this.data)
        || typeof this.data.image !== 'string'
        || this.data.image === ''
        || typeof this.data.alt !== 'string'
        || this.data.alt === '') {
        return false;
    }
    return true;
}
  render() {
        return `<div class="blog-item">
        <div class="blog-style">
          <img src="./img/blogs/${this.data.image}.jpg" alt="blog-image" class="blog-image"> 
          <a href="#" class="link btn blue-btn blog-btn">${this.data.button}</a>
        </div>
        <div class="blog-content">
          <ul class="blog-data">
             <li class="date"><i class="fa fa-calendar-check-o"></i>${this.data.date}</li>
             <li class="user"><i class="fa fa-user-o"></i>${this.data.user}</li>
         </ul>
          <a class="blog-title">${this.data.title}</a>
          <p class="blog-p">${this.data.desc}</p>
          <a class="link blog-info" href="#">${this.data.link}</a>
        </div>
  
      </div>
      `
    }
}

export { renderBlogs };

