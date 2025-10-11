'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// project modal variables
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");
const projectModalContent = document.querySelector("[data-project-modal-content]");
const projectLinks = document.querySelectorAll("[data-project-link]");

// project modal toggle function
const projectModalFunc = function () {
  if (projectModalContainer) {
    projectModalContainer.classList.toggle("active");
    projectOverlay.classList.toggle("active");
  }
}

// project details data
const projectDetails = {
  profolio: {
    title: "Profolio - Real Estate Management",
    company: "Bayut (Dubizzle Labs)",
    duration: "Jun 2024 — July 2025",
    role: "Software Engineer",
    technologies: ["React Native", "TypeScript", "Expo", "Tanstack Query", "Elastic Search", "Firebase", "Xcode", "Android Studio"],
    description: "A comprehensive cross-platform real estate lead management application serving 1,075+ agencies across UAE and Egypt with 50K+ monthly active users.",
    features: [
      "Upgraded app from v2.0 to v3.0 with 30+ production features",
      "Improved onboarding completion by 40% and engagement by 15-20%",
      "Built redesigned navigation system and analytics-driven overview screen",
      "Implemented interactive dashboards for tracking agent responsiveness and property performance",
      "Developed advanced property filters and achievement badge system",
      "Integrated global haptic feedback increasing user sentiment by 25%"
    ],
    impact: [
      "50,000+ monthly active users",
      "1,075+ agencies across UAE and Egypt",
      "40% improvement in onboarding completion",
      "15-20% boost in user engagement"
    ],
    images: [
      "./assets/images/project-1.jpg",
      "./assets/images/project-1.jpg",
      "./assets/images/project-1.jpg"
    ]
  },
  triangle: {
    title: "Triangle Wallet - Crypto Wallet",
    company: "Devsinc",
    duration: "Aug 2023 — May 2024",
    role: "Associate Software Engineer",
    technologies: ["React Native", "Redux Toolkit", "Express.js", "Fireblocks API", "Xcode", "Android Studio"],
    description: "A secure cryptocurrency wallet application for iOS and Android offering real-time asset tracking, transactions, and interactive price analytics.",
    features: [
      "End-to-end frontend development with React Native",
      "Full ownership of core UI screens including authentication flows",
      "Real-time crypto price tracking with 24h trend visualizations",
      "Interactive price graphs with dynamic data visualization",
      "Wallet operations including buy/sell transactions",
      "Optimized performance with reusable components and efficient state management"
    ],
    impact: [
      "Seamless cross-platform experience on iOS and Android",
      "Real-time price updates for multiple cryptocurrencies",
      "Enhanced user engagement with interactive graphs",
      "Improved app performance through optimization"
    ],
    images: [
      "./assets/images/project-2.png",
      "./assets/images/project-2.png",
      "./assets/images/project-2.png"
    ]
  }
};

// add click event to all project links
for (let i = 0; i < projectLinks.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    
    const projectKey = this.getAttribute("data-project-link");
    const project = projectDetails[projectKey];
    
    if (project) {
      // Build modal content
      let modalHTML = `
        <div class="project-detail-header">
          <h2 class="h2">${project.title}</h2>
          <p class="project-meta">${project.company} | ${project.role}</p>
          <p class="project-duration">${project.duration}</p>
        </div>

        <div class="project-images">
          <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
        </div>

        <div class="project-detail-content">
          <h3 class="h3">About the Project</h3>
          <p class="project-description">${project.description}</p>

          <h3 class="h3">Technologies Used</h3>
          <ul class="tech-list">
            ${project.technologies.map(tech => `<li class="tech-item">${tech}</li>`).join('')}
          </ul>

          <h3 class="h3">Key Features</h3>
          <ul class="feature-list">
            ${project.features.map(feature => `<li class="feature-item"><ion-icon name="checkmark-circle-outline"></ion-icon> ${feature}</li>`).join('')}
          </ul>

          <h3 class="h3">Impact & Results</h3>
          <ul class="impact-list">
            ${project.impact.map(item => `<li class="impact-item"><ion-icon name="trending-up-outline"></ion-icon> ${item}</li>`).join('')}
          </ul>
        </div>
      `;
      
      projectModalContent.innerHTML = modalHTML;
      projectModalFunc();
    }
  });
}

// add click event to modal close button and overlay
if (projectModalCloseBtn) {
  projectModalCloseBtn.addEventListener("click", projectModalFunc);
}
if (projectOverlay) {
  projectOverlay.addEventListener("click", projectModalFunc);
}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}