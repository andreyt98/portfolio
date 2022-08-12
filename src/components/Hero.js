import { avatar, arrows } from "../../helpers/icons.js";

export const Hero = () => {
  const hero = document.createElement("DIV");
  hero.classList.add("hero");

  hero.innerHTML = `
    <img class="pattern-bg" src="https://res.cloudinary.com/andreyt/image/upload/q_auto/v1660263699/Portfolio-assets/pattern_qtvc2x.webp" alt="hero-pattern">
    <h1>
        <span>Andrey Torrente</br></span>
        <span class=bolder >Frontend developer</span>
    </h1>

    
    <div class="avatar">${avatar}</div>
    ${arrows} 
    `;
  return hero;
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".arrows-down") || e.target.matches(".link-projects")) {
    e.preventDefault();
    const projectSection = document.querySelector(".projects").offsetTop - document.querySelector(".nav").offsetHeight;
    window.scrollTo(0, projectSection);
  }
  
  if (e.target.matches(".link-about")) {
    e.preventDefault();
    const aboutSection = document.querySelector(".about").offsetTop - document.querySelector(".nav").offsetHeight;
    window.scrollTo(0, aboutSection);
  }
  
  if (e.target.matches(".link-contact")) {
    e.preventDefault();
    const contactSection = document.querySelector(".contact").offsetTop - document.querySelector(".nav").offsetHeight;
    window.scrollTo(0, contactSection);
  }
  if (e.target.matches(".link-home") || e.target.matches(".nav__logo a")) {
    e.preventDefault();
    window.scrollTo(0, document.querySelector(".hero"));
  }
});
