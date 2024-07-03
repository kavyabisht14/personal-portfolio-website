// Selectors
const header = document.getElementById('header');
const nav = header.querySelector('nav');
const logo = nav.querySelector('img.logo');
const navLinks = nav.querySelectorAll('ul li a');
const headerText = header.querySelector('.header-text');
const aboutSection = document.getElementById('about');
const tabTitles = aboutSection.querySelectorAll('.tab-titles p');
const tabContents = aboutSection.querySelectorAll('.tab-contents');
const servicesSection = document.getElementById('services');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

// Functions
function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Event Listeners
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById(link.getAttribute('href').replace('#', ''));
    targetSection.scrollIntoView({ behavior: 'mooth' });
  });
});

tabTitles.forEach((title) => {
  title.addEventListener('click', (e) => {
    opentab(title.getAttribute('onclick').replace('opentab(\'', '').replace('\')', ''));
  });
});

// Initialize
window.addEventListener('load', () => {
  // Add event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.getElementById(link.getAttribute('href').replace('#', ''));
      targetSection.scrollIntoView({ behavior: 'mooth' });
    });
  });

  // Add event listeners to tab titles
  tabTitles.forEach((title) => {
    title.addEventListener('click', (e) => {
      opentab(title.getAttribute('onclick').replace('opentab(\'', '').replace('\')', ''));
    });
  });
});