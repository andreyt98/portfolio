import "./src/sass/main.scss";
import "./node_modules/bootstrap-icons/font/bootstrap-icons.scss";
import { Hero } from "./src/components/Hero.js";
import { projectSection } from "./src/components/ProjectSection.js";
import { About } from "./src/components/About.js";
import { Contact } from "./src/components/Contact.js";
import { Navbar } from "./src/components/Navbar";

const root = document.querySelector("#app");

root.append(
    Navbar(),
    Hero(),
    projectSection(),
    About(),
    Contact()
);
