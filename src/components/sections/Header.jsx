import { useRef } from "react";
import '../../styles/css/library.css';

const Header = ({ logo }) => {
    const header = useRef();
    const headerNav = useRef();
    const headerNavMenuLinkList = useRef();

    const documentScroll = () => {
        const { scrollY } = window;
        header.current.classList.toggle('header--scroll', scrollY > 0);
    };

    const switchTheme = () => {
        const body = document.querySelector('.body');
        body.classList.toggle("body--dark");
        const btnSwitch = document.querySelector('.switch');
        btnSwitch.classList.toggle("active");
    };

    document.addEventListener('scroll', documentScroll);

    return (
        <header className="header" ref={header}>
            <nav className="nav" id="nav" ref={headerNav}>
                <div className="container container--nav-r">
                    <a href="#">
                        <img src={logo} alt="Concierto" width="100" height="100" className="nav__logo" />
                    </a>
                    <button className="nav__action nav__action--menu" id="navActionMenu">
                        <i className="bi bi-list nav__icon"></i>
                    </button>
                    <ul className="menu menu--header" ref={headerNavMenuLinkList}>
                        <li>
                            <a href="#" className="menu__link">INICIO</a>
                        </li>
                        <li>
                            <a href="./pages/about/about.html" className="menu__link">SOBRE NOSOTROS</a>
                        </li>
                        <li>
                            <a href="#" className="menu__link">ARTÍCULOS</a>
                        </li>
                        <li>
                            <a href="#" className="menu__link">EXCLUSIVOS</a>
                        </li>
                        <li>
                            <a href="#" className="menu__link">GRUPOS</a>
                        </li>
                        <button className="switch active" id="switch" onClick={switchTheme}>
                            <span className="nav_span"><i className="bi bi-brightness-high"></i></span>
                            <span className="nav_span"><i className="bi bi-moon-stars"></i></span>
                        </button>
                        <li className="nav__action nav__action--close" id="navActionClose">
                            <i className="bi bi-x-circle"></i>
                        </li>
                    </ul>
                    <button className="nav__action nav__action--search">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </nav>
        </header >
    );
}

export default Header;