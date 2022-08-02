import "./src/sass/main.scss";
import "./node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import { Header } from "./src/components/Header.js";
import { Hero } from "./src/components/Hero.js";
import { projectSection } from "./src/components/ProjectSection.js";
import { About } from "./src/components/About.js";
import { Contact } from "./src/components/Contact.js";

const root = document.querySelector("#app");

root.append(
    Header(),
    Hero(),
    projectSection("projects", "PROJECTS"),
    About("about", "About"),
    Contact("contact", "CONTACT")
);
