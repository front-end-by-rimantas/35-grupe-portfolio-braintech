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
import { renderPartners } from '../components/partners/partners.js';
import { partnersData } from '../data/partnersData.js';
import { renderPartners2 } from '../components/partners/partners2.js';
import { partnersData2 } from '../data/partnersData2.js';

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
/* -------------------nine points zone -------------------*/


/* -------------------nine points zone -------------------*/
/* -------------------search zone -------------------*/

document.querySelector('#ico').onclick = function() {
    document.querySelector('#sbox').style.left = "0%";
}
document.querySelector('#x').onclick = function() {
    document.querySelector('#sbox').style.left = "100%";
}
/* -------------------search zone -------------------*/

// hamburger
document.getElementById("myBtn").onclick = function() {myFunction()};


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// home
document.getElementById("myBtn1").onclick = function() {myFunction1()};

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// services
document.getElementById("myBtn2").onclick = function() {myFunction2()};

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

// pages
document.getElementById("myBtn3").onclick = function() {myFunction3()};

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

// blog
document.getElementById("myBtn4").onclick = function() {myFunction4()};

function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}


/* header: end */

/* hero: start */
/* hero: end */

/* companies1: start */
    renderPartners('#partners_container', partnersData);
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
renderPartners2('#partners2_container', partnersData2);
/* companies2: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */