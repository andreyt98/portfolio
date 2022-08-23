import {home,projects,about,contact} from '../../helpers/icons.js'
export const Navbar = () => {
  const nav = document.createElement("NAV");
  nav.classList.add("nav");

  nav.innerHTML = `
        <div class=nav__logo><a href=#>Andrey<span class=dot>.</span></a></div>
    
        <div><i class="bi bi-list-nested nav__icon"></i></div>

        <ul class=nav__links>
            <li> <a href=# class="link-home">${home}Home </a> </li>
            <li> <a href=# class="link-projects">${projects}Projects </a> </li>
            <li> <a href=# class="link-about">${about}About</a> </li>
            <li> <a href=# class="link-contact">${contact}Contact</a> </li>          
        </ul>
    `;

  return nav;
};

document.addEventListener("click", (e) => {
  const links = document.querySelector(".nav__links");

  // if (e.target.matches(".nav__icon")) {

    
  //   if(links.classList.contains("links-active")){
  //     document.querySelector(".overlay").remove();
  //     e.target.classList.add("bi-list-nested")
  //     e.target.classList.remove("bi-x-lg")
  //   }else{
  //     document.getElementById("app").insertAdjacentHTML("beforeend", "<div class='overlay'></div>");
  //     e.target.classList.remove("bi-list-nested")
  //     e.target.classList.add("bi-x-lg")
  //   }
  //   links.classList.toggle("links-active");

  // }

  if (e.target.matches(".arrows-down") || e.target.matches(".link-projects")) {
    e.preventDefault();
    const projectSection = document.querySelector(".projects").offsetTop - document.querySelector(".nav").offsetHeight+30;
    window.scrollTo(0, projectSection);
  }
  
  if (e.target.matches(".link-about")) {
    e.preventDefault();
    const aboutSection = document.querySelector(".about").offsetTop - document.querySelector(".nav").offsetHeight+40;
    window.scrollTo(0, aboutSection);
  }
  
  if (e.target.matches(".link-contact")) {
    e.preventDefault();
    const contactSection = document.querySelector(".contact").offsetTop - document.querySelector(".nav").offsetHeight+30;
    window.scrollTo(0, contactSection);
  }
  if (e.target.matches(".link-home") || e.target.matches(".nav__logo a")) {
    e.preventDefault();
    window.scrollTo(0, document.querySelector(".hero"));
  }
  
  // if (e.target.matches(".nav__links li a") || e.target.matches(".overlay") ) {
  //   links.classList.remove("links-active");
  //   document.querySelector(".overlay").remove();
  //   document.querySelector('.nav__icon').classList.add("bi-list-nested")
  //   document.querySelector('.nav__icon').classList.remove("bi-x-lg")
  // }
  
});
