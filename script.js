
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
const languageToggle = document.getElementById("languageToggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const translations = {
  en: {
    navHome:"Home", navAbout:"About Me", navSkills:"Skills", navProjects:"Projects", navContact:"Contact",
    eyebrow:"TECHNOLOGY • CREATIVITY • SOLUTIONS", hello:"Hello, I am",
    role:"IT Support Technician | Web Developer",
    intro:"I am passionate about technology, programming and innovation. I build digital solutions and aim to turn ideas into useful, simple experiences.",
    seeProjects:"View projects", contactMe:"Get in touch", available:"Open to learning and collaboration",
    aboutLabel:"GET TO KNOW ME", aboutTitle:"About <span class='gradient-text'>Me</span>",
    aboutText:"I am a student and developing professional in Information Technology. I am interested in IT support, web development, networks and systems. I value continuous learning, creativity and problem-solving.",
    value1:"Continuous learning", value2:"Teamwork", value3:"Responsibility and innovation",
    skillsLabel:"WHAT I CAN DO", skillsTitle:"My <span class='gradient-text'>Skills</span>",
    skillStructure:"Web structure", skillStyle:"Style and layout", skillInteraction:"Interactivity",
    skillNetworks:"Networking", skillNetworkDesc:"Local networks", skillSupport:"IT Support", skillSupportDesc:"Technical assistance",
    skillDatabases:"Databases", skillDataDesc:"Basic knowledge",
    workLabel:"SELECTED WORK", projectsTitle:"Featured <span class='gradient-text'>Projects</span>",
    projectsSub:"Ideas turned into digital solutions.", projectTypeWeb:"WEB DEVELOPMENT",
    projectTypeBrand:"DIGITAL SOLUTIONS", projectTypeTech:"TECHNOLOGY",
    project1Desc:"Digital menu concept for restaurants, with food presentation and simple navigation. Planned to include a QR Code and an order cart.",
    project2Desc:"Brand concept for website creation, software systems and IT support services.",
    project3Desc:"Digital presence concept for electronic security, networking and technology services.",
    imageNote:"Note: project previews are illustrative. Replace them with screenshots of the final working systems when available.",
    contactLabel:"LET'S TALK", contactTitle:"Get in <span class='gradient-text'>Touch</span>",
    contactText:"Have an idea or opportunity? I am available to discuss technology and projects.",
    phone:"Phone", sendMessage:"Send a message", location:"Location", rights:"All rights reserved."
  }
};

let currentLanguage = "pt";
languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "pt" ? "en" : "pt";
  document.documentElement.lang = currentLanguage;
  languageToggle.textContent = currentLanguage === "pt" ? "EN" : "PT";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (currentLanguage === "en" && translations.en[key]) {
      element.innerHTML = translations.en[key];
    } else if (currentLanguage === "pt") {
      
      window.location.reload();
    }
  });
});
