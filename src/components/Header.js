import { Navbar } from "./Navbar";

export const Header = () => {

    const header = document.createElement('HEADER');
    header.classList.add('header');

    header.appendChild(Navbar());

    return header;
}