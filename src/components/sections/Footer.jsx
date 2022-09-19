import logoVaoText from '../../assets/svg/Logo_Vao_Texto.svg';
const Footer = () => {
    return (
        <footer class="footer">
        <div class="footer__row">
            <div class="footer__section">
                <div class="footer__logo">
                    <img class="footer__img" src={logoVaoText} alt="" />

                </div>
            </div>
            <div class="footer__section">
                <h5 class="footer__title">Páginas</h5>
                <ul class="footer__list">
                    <li class="footer__list"><a href="" class="footer__paragraph">Inicio</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Tienda</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Planes</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Nosotros</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Contacto</a></li>
                </ul>
            </div>
            <div class="footer__section">
                <h5 class="footer__title">Tendencias</h5>
                <ul class="footer__list">
                    <li class="footer__list"><a href="" class="footer__paragraph">Imagine Dragons</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Maroon 5</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Artic Monkeys</a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Red Hot CHilli
                        </a></li>
                    <li class="footer__list"><a href="" class="footer__paragraph">Chainsmokers</a></li>
                </ul>
            </div>
            <div class="footer__section">
                <h5 class="footer__title">Suscríbete</h5>
                <p class="footer__paragraph_1">Recibe descuentos especiales y las ultimas noticias del mundo musical</p>
                <form>
                    <div class="footer__buttons">
                        <input type="email" placeholder="Correo" class="button-input" pattern="[0-9+]+"
                            title="Ingresar un número de celular" required />
                        <button class="button-text">Suscribirse</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="footer__sub">
            <ul class="footer__sub-menu">
                <div class="icon-container">
                    <li class="footer__icon">
                        <a href="#" class="footer__link-icon">
                            <i class="bi bi-facebook footer__icon-bi"></i>
                        </a>
                    </li>
                </div>
                <li class="footer__icon">
                    <a href="#" class="footer__link-icon">
                        <i class="bi bi-instagram footer__icon-bi"></i>
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link-icon">
                        <i class="bi bi-twitter footer__icon-bi"></i>
                    </a>
                </li>
                <li class="footer__icon">
                    <a href="#" class="footer__link-icon">
                        <i class="bi bi-youtube footer__icon-bi"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
    );
}

export default Footer;