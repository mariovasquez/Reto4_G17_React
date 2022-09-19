import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hero from '../components/index/Hero';
import News from '../components/index/News';

const IndexPage = () => {

    const contadores = document.querySelectorAll('.counter');
    const speed = 100000;

    const showAnimation = () => {
        for (const contador of contadores) {
            let heightElement = contador.getBoundingClientRect().top;
            let sizeWindow = window.innerHeight * 0.7;
            if (heightElement < sizeWindow) {
                const animateCounter = () => {
                    let maxNumber = +contador.dataset.maxNumber;
                    let currentNumber = +contador.innerText;
                    let increase = maxNumber / speed;

                    if (currentNumber < maxNumber) {
                        contador.innerText = Math.ceil((currentNumber) + increase);
                        setTimeout(animateCounter, 300);
                    } else {
                        contador.innerText = maxNumber;
                    }
                }
                animateCounter();
            }
        }
    };

    document.addEventListener('scroll', () => {
        showAnimation();
        //   header.classList.toggle('header--scroll', scrollY > 0);
    });

    return (
        <>
            <Hero />
            <section className="section section__featured">
                <div className="container container--featured">
                    <div className="section__featured-titles">
                        <h2 className="section__featured-title section__featured-title--selected" id="newReleases">Nuevos
                            Lanzamientos</h2>
                        <h2 className="section__featured-title" id="popular">Tendencias</h2>
                    </div>
                    <div className="container--featured-albums" id="newReleasesAlbums">
                        <div className="arrow__left" id="arrowLeft1">
                            <i className="bi bi-arrow-left" ></i>
                        </div>
                        <div className="slider-albumes-wrap">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, A11y]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: '#arrowLeft1',
                                    nextEl: '#arrowRight1',
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 4,
                                    }
                                }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                            >
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="1">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="1"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/radiohead-kid-a-sister-ray_480x.jpg?v=1570377516"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Radiohead</h3>
                                            <p className="section__featured-album-title">Kid A</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="1">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="2">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="2"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/oasis20000000170887_2_480x.jpg?v=1657700137"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Oasis</h3>
                                            <p className="section__featured-album-title">Be Here Now</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="2">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="3">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="3"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Parachutes-1593635064_480x.jpg?v=1594732369"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Coldplay</h3>
                                            <p className="section__featured-album-title">Parachutes</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="3">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="4">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="4"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Keane_Strangeland_360x.jpg?v=1654791292"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Keane</h3>
                                            <p className="section__featured-album-title">Strangeland</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="4">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="5">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="5"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Homework_Daft_Punk_480x.jpg?v=1576252617"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Daft Punk</h3>
                                            <p className="section__featured-album-title">Homework</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="5">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="6">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="6"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Gorillaz-RSDStoresExclNeonPurpleVinyl_e3cf8afa-e142-47d0-a188-5d9b6acf4a36_720x.png?v=1661958601"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Gorillaz</h3>
                                            <p className="section__featured-album-title">Craker Island</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="6">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="7">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="7"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/themarsvoltafrancesthemute_240x.jpg?v=1636978461"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">The Mars Volta</h3>
                                            <p className="section__featured-album-title">Frances the Mute</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="7">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="8">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="8"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Interpol-Antics-Sister-Ray_480x.jpg?v=1570375922"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Interpol</h3>
                                            <p className="section__featured-album-title">Antics</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="8">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="9">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="9"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/slowdive_5a1372d9-9123-40ed-9935-09447c1d1641_480x.jpg?v=1629376211"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Slowdive</h3>
                                            <p className="section__featured-album-title">Souvlaki</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="9">Comprar</a>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="section__featured-album-container" id="10">
                                        <a href="#" className="section__featured-album-link">
                                            <img id="10"
                                                src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/portishead_dummy_480x.jpg?v=1592397119"
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">Portishead</h3>
                                            <p className="section__featured-album-title">Dummy</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="10">Comprar</a>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            {/* <div className="swiper slider" id="newReleasesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                    <div className="swiper-slide">
                                        
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        <div className="arrow__right" id="arrowRight1">
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>
                    {/* <div className="container--featured-albums container--featured-albums-disabled" id="popularAlbums">
                        <div className="arrow__left" id="arrowLeft2">
                            <i className="bi bi-arrow-left"></i>
                        </div>
                        <div className="slider-albumes-wrap">
                            <div className="swiper slider" id="popularSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="11">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="11" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/MUS000356486_480x.jpg?v=1612541904" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Blur</h3>
                                                <p className="section__featured-album-title">Blur</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="11">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="12">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="12" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/gorillaz-demon-days-sister-ray_240x.jpg?v=1570377287" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Gorillaz</h3>
                                                <p className="section__featured-album-title">Demon Days</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="12">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="13">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="13" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/room_480x.jpg?v=1632999315" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">The Strokes</h3>
                                                <p className="section__featured-album-title">Room On Fire</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="13">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="14">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="14" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Arctic-Monkeys-AM-Sister-Ray_480x.jpg?v=1570377553" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Arctic Monkeys</h3>
                                                <p className="section__featured-album-title">AM</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="14">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="15">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="15" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/61Ms7wveh3L_480x.jpg?v=1592399218" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Queen</h3>
                                                <p className="section__featured-album-title">News of the World</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="15">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="16">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="16" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/bhouse_480x.jpg?v=1638806875" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Beach House</h3>
                                                <p className="section__featured-album-title">Depression Cherry</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="16">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="17">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="17" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Oasis-Definitely-Maybe-Sister-Ray_480x.jpg?v=1570374322" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Oasis</h3>
                                                <p className="section__featured-album-title">Definitely Maybe</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="17">Comprar</a>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="section__featured-album-container" id="18">
                                            <a href="#" className="section__featured-album-link">
                                                <img id="18" src="https://cdn.shopify.com/s/files/1/0096/1884/9839/products/currents_360x.jpg?v=1634815211" alt="" width="175" height="175" className="section__featured-album-img" />
                                                <h3 className="section__featured-album-artist">Tame Impala</h3>
                                                <p className="section__featured-album-title">Currents</p>
                                            </a>
                                            <a href="#" className="button button-text button-text--buy" id="18">Comprar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="arrow__right" id="arrowRight2">
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className="separator">
                <div className="container">
                    <div className="separator__container">
                        <h2 className="separator__title">Los mejores de la industria</h2>
                    </div>
                    <div className="separator__columns-flex" >
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="20">20</h3>
                            <p className="separator__columns-flex-paragraph">Empresas confían en nosotros</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="100">100</h3>
                            <p className="separator__columns-flex-paragraph">De satisfacción de nuestros clientes.</p>
                        </div>
                        <div className="separator__columns-flex-1">
                            <h3 className="separator__columns-flex-title counter" id="contador" data-max-number="20">20</h3>
                            <p className="separator__columns-flex-paragraph">Años de lideres en ventas de discos a nivel
                                mundial.</p>
                        </div>
                    </div>
                </div>
            </section>
            <News />
        </>
    );
}

export default IndexPage;