class renderBlogs{
    render() {
        return `<div class="blog-item">
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
      `
    }
}

export { renderBlogs };

