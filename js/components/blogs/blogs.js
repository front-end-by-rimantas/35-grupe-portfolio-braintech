function renderBlogs(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `<div class="row">
        <div class="col-12 col-md-6 col-lg-4 blog-item">
          <div class="blog-style">
            <img src="./img/blogs/${item.image}.jpg" alt="blog-image" class="blog-image"> 
            <a href="#" class="link btn blue-btn blog-btn">${item.button}</a>
          </div>
          <div class="blog-content">
            <ul class="blog-meta">
              <li class="date"><i class="fa fa-calendar-check-o"></i>${item.date}</li>
              <li class="user"><i class="fa fa-user-o"></i>${item.user}</li></li>
            </ul>
            <a class="blog-title">${item.title}</a>
            <p class="blog-p">${item.desc}</p>
            <a class="link blog-info blog-info:after" href="#">${item.link}</a>
          </div>

         </div>
      </div>
       
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderBlogs };

/* function renderAboutUsBar(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    for (const item of data) {
        
        HTML += `
        <div class="bar">
            <span class="barname">${item.title}</span>
            <span class="barpercent">${item.percent}%</span>
        <div class="bar-img" style="background-color: ${item.color}; border-right: calc(100vh - ${item.percent}vh) solid var(--lgray); "></div>
      </div>
        `;
    }
    DOM.innerHTML = HTML;
}
export { renderAboutUsBar };*/