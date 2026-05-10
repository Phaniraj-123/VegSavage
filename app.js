/* 
   VEGSAVAGE - APP.JS
 */

/* 
   LOADER
*/

window.addEventListener('load', () => {

  const loader = document.querySelector('.loader');

  setTimeout(() => {

    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.transition = '1s';

    setTimeout(() => {
      loader.remove();
    }, 1000);

  }, 2200);

});

/*
   CUSTOM CURSOR
 */

const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', e => {

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

});

/*
   SCROLL PROGRESS BAR
 */

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {

  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = progress + '%';

});

/* 
   REVEAL ANIMATION
 */

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

/* 
   FLOATING CARDS PARALLAX
*/

const floatingCards = document.querySelectorAll('.floating-card');

window.addEventListener('mousemove', e => {

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  floatingCards.forEach(card => {

    const moveX = (x - 0.5) * 40;
    const moveY = (y - 0.5) * 40;

    card.style.transform =
      `translate(${moveX}px, ${moveY}px)`;

  });

});

/* 
   HERO PARALLAX
*/

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {

  let offset = window.pageYOffset;

  hero.style.backgroundPositionY = offset * 0.5 + 'px';

});

/*
   NAVBAR BACKGROUND
 */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if(window.scrollY > 80){

    navbar.style.background =
      'rgba(6,17,13,0.85)';

    navbar.style.backdropFilter =
      'blur(18px)';

  } else {

    navbar.style.background =
      'rgba(255,255,255,0.08)';

  }

});

/*
   ACTIVE NAV LINKS
 */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active-link');

    if(link.getAttribute('href').includes(current)){
      link.classList.add('active-link');
    }

  });

});

/* 
   MENU FILTER BUTTONS
*/

const filterButtons =
  document.querySelectorAll('.menu-filters button');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

  });

});

/*
   COUNTER ANIMATION
*/

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

  counter.innerText = '0';

  const updateCounter = () => {

    const target =
      +counter.getAttribute('data-target');

    const current =
      +counter.innerText;

    const increment = target / 200;

    if(current < target){

      counter.innerText =
        `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 15);

    } else {

      counter.innerText = target;

    }

  };

  updateCounter();

});

/* 
   MAGNETIC BUTTON EFFECT
*/

const magneticButtons =
  document.querySelectorAll(
    '.primary-btn, .secondary-btn, .nav-btn'
  );

magneticButtons.forEach(button => {

  button.addEventListener('mousemove', e => {

    const rect = button.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;

  });

  button.addEventListener('mouseleave', () => {

    button.style.transform =
      'translate(0px,0px)';

  });

});

/*
   GALLERY HOVER ZOOM
*/

const galleryImages =
  document.querySelectorAll('.gallery-item img');

galleryImages.forEach(image => {

  image.addEventListener('mousemove', e => {

    const rect = image.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    image.style.transformOrigin =
      `${x}% ${y}%`;

  });

});

/* 
   TESTIMONIAL AUTO SLIDER
*/

const testimonialTrack =
  document.querySelector('.testimonial-track');

let sliderPosition = 0;

function autoSlide(){

  if(!testimonialTrack) return;

  sliderPosition -= 1;

  testimonialTrack.style.transform =
    `translateX(${sliderPosition}px)`;

  if(Math.abs(sliderPosition) > 1200){

    sliderPosition = 0;

  }

}

setInterval(autoSlide, 20);

/* 
   FAQ ACCORDION
 */

const faqItems =
  document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const question =
    item.querySelector('.faq-question');

  question.addEventListener('click', () => {

    item.classList.toggle('active');

  });

});
 
/*
   SMOOTH SCROLL
*/

navLinks.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const target =
      document.querySelector(
        link.getAttribute('href')
      );

    window.scrollTo({

      top: target.offsetTop - 100,
      behavior: 'smooth'

    });

  });

});

/*
   RANDOM FLOATING PARTICLES
 */

for(let i = 0; i < 40; i++){

  const particle =
    document.createElement('span');

  particle.classList.add('particle');

  particle.style.left =
    Math.random() * 100 + '%';

  particle.style.animationDuration =
    3 + Math.random() * 8 + 's';

  particle.style.animationDelay =
    Math.random() * 5 + 's';

  hero.appendChild(particle);

}

/* =========================
   PARTICLE STYLES
========================= */

const particleStyle =
document.createElement('style');

particleStyle.innerHTML = `

.particle{
  position:absolute;
  bottom:-20px;
  width:8px;
  height:8px;
  background:rgba(61,220,132,0.4);
  border-radius:50%;
  animation:floatParticle linear infinite;
}

@keyframes floatParticle{

  0%{
    transform:translateY(0) scale(1);
    opacity:0;
  }

  10%{
    opacity:1;
  }

  100%{
    transform:translateY(-120vh) scale(0);
    opacity:0;
  }

}

.active-link{
  color:#3ddc84;
}

`;

document.head.appendChild(particleStyle);

/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
  document.querySelector('form');

if(reservationForm){

  reservationForm.addEventListener(
    'submit',
    e => {

      e.preventDefault();

      const inputs =
        reservationForm.querySelectorAll('input');

      let valid = true;

      inputs.forEach(input => {

        if(input.value.trim() === ''){

          valid = false;

          input.style.border =
            '1px solid red';

        } else {

          input.style.border =
            '1px solid #3ddc84';

        }

      });

      if(valid){

        alert(
          'Reservation Submitted Successfully'
        );

        reservationForm.reset();

      }

    }

  );

}

/* =========================
   DISH CARD HOVER EFFECT
========================= */

const dishCards =
  document.querySelectorAll('.dish-card');

dishCards.forEach(card => {

  card.addEventListener('mousemove', e => {

    const rect = card.getBoundingClientRect();

    const x =
      e.clientX - rect.left - rect.width / 2;

    const y =
      e.clientY - rect.top - rect.height / 2;

    card.style.transform =
      `
      rotateY(${x / 20}deg)
      rotateX(${-y / 20}deg)
      translateY(-10px)
      `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform =
      'rotateY(0deg) rotateX(0deg)';

  });

});

/* =========================
   NEWSLETTER SUBMIT
========================= */

const newsletterForm =
  document.querySelector('.newsletter-form');

if(newsletterForm){

  newsletterForm.addEventListener(
    'submit',
    e => {

      e.preventDefault();

      alert(
        'Subscribed Successfully To VegSavage Updates'
      );

      newsletterForm.reset();

    }

  );

}

/* =========================
   MOBILE NAV TOGGLE
========================= */

const mobileMenu =
  document.querySelector('.mobile-menu');

if(mobileMenu){

  mobileMenu.addEventListener('click', () => {

    navbar.classList.toggle('active-nav');

  });

}

/* =========================
   TEXT REVEAL EFFECT
========================= */

const heroHeading =
  document.querySelector('.hero-content h1');

if(heroHeading){

  const text =
    heroHeading.textContent;

  heroHeading.innerHTML = '';

  text.split('').forEach(letter => {

    const span =
      document.createElement('span');

    span.innerHTML =
      letter === ' ' ? '&nbsp;' : letter;

    span.style.opacity = '0';
    span.style.display = 'inline-block';
    span.style.transform =
      'translateY(80px)';

    heroHeading.appendChild(span);

  });

  const letters =
    heroHeading.querySelectorAll('span');

  letters.forEach((span,index) => {

    setTimeout(() => {

      span.style.transition =
        '0.6s ease';

      span.style.opacity = '1';

      span.style.transform =
        'translateY(0px)';

    }, index * 40);

  });

}