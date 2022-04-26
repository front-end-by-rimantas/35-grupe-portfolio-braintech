// component imports
import { renderFeatures } from '../components/features/features.js';
import { aboutUsA, aboutUsB, aboutUsDataNext } from '../data/aboutUsData.js';
import { renderAboutUsBar } from '../components/aboutUsNext/aboutUsNext.js';
import { aboutUs } from '../components/aboutUsNext/aboutUs.js';
import { servicesData } from '../data/servicesData.js';
import { services } from '../components/services/services.js';
import { whyChooseUs } from '../data/whyChooseUs.js';
import { renderIconList } from '../components/lets-talk/lets-talk.js';
import { letstalkData } from '../data/letstalkData.js';
import { renderBlogs } from '../components/blogs/blogs.js';
import { search } from '../components/search/search.js';
import { blogsData } from '../data/blogsData.js';
// components execution

/* header: start */

const mainHeaderDOM = document.querySelector('.main-header');

addEventListener('scroll', function () {
    const headerPosition = 100;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('header-white');
    } else {
        mainHeaderDOM.classList.remove('header-white');
    }
});
addEventListener('click', function(){
       const searchDOM = document.querySelector('#search');
       
       if(searchDOM.click){
           searchDOM.querySelector('.searchbox').style.left = "0%";
        }
    });
    
/*     addEventListener('click', function(){
        const searchDOM = document.querySelector('#search');
        const searchX = document.querySelector('#x');
        
    if(searchX.click){
     searchDOM.querySelector('.searchbox').style.left = "100%";
    }
}); */

/* header: end */

/* hero: start */
/* hero: end */

/* companies1: start */
/* companies1: end */

/* about us 1: start */
    aboutUs('#aboutA', aboutUsA);
    aboutUs('#aboutB', aboutUsB);
/* about us 1: end */

/* about us 2: start */
    renderAboutUsBar('#bar', aboutUsDataNext);
/* about us 2: end */

/* services: start */
    services('#services', servicesData);
/* services: end */

/* why choose us: start */
    const [featureErr, featureContent] = renderFeatures('#choose_container', whyChooseUs);
    if(featureErr) {
        console.error(featureContent);
    }
/* why choose us: end */

/* let's talk: start */
    renderIconList('#letstalk_container', letstalkData);
/* let's talk: end */

/* blogs: start */
    renderBlogs('#blogs_container', blogsData);
/* blogs: end */

/* testimonials: start */ 
/* testimonials: end */

/* companies2: start */
/* companies2: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */