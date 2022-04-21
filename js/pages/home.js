// component imports
import { renderFeatures } from '../components/features/features.js';
import { aboutUsData, aboutUsDataNext } from '../data/aboutUsData.js';
import { renderAboutUsBar } from '../components/aboutUsNext/aboutUsNext.js';
import { servicesData } from '../data/servicesData.js';
import { whyChooseUs } from '../data/whyChooseUs.js';
// components execution

/* header: start */
/* header: end */

/* hero: start */
/* hero: end */

/* companies1: start */
/* companies1: end */

/* about us 1: start */

/* about us 1: end */

/* about us 2: start */
    renderAboutUsBar('#bar', aboutUsDataNext);
/* about us 2: end */

/* services: start */

/* services: end */

/* why choose us: start */
    const [featureErr, featureContent] = renderFeatures('#choose_container', whyChooseUs);
    if(featureErr) {
        console.error(featureContent);
    }
/* why choose us: end */

/* let's talk: start */
/* let's talk: end */

/* blogs: start */
/* blogs: end */

/* testimonials: start */ 
/* testimonials: end */

/* companies2: start */
/* companies2: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */