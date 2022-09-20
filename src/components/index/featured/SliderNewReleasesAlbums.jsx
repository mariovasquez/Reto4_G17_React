import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderAlbum from './SliderAlbum';
import { useEffect, useState } from 'react';
import axios from 'axios';
const SliderNewReleasesAlbums = () => {
    // try {
    //     const response = await fetch('https://mariovasquez.github.io/Reto4_G17_React/src/json/albums.json');
    //     const data = await response.json();
    // } catch (error) {
    //     console.log(error);
    // }
    // const listarAlbumes = () => {
        const [albums, setAlbums] = useState([]);

        useEffect(() => {
            getAlbums()
        }, [])

        const getAlbums = async () => {
            // try {
                const response = await fetch('https://mariovasquez.github.io/Reto4_G17_React/src/json/albums.json');
                const data = await response.json();
            // } catch (error) {
            //     console.log(error);
            // }
        }

    //     return albumes;
    // }

    // const albumes = listarAlbumes();

    return (
        <>
            <div className="arrow__left" id="arrowLeft1">
                <i className="bi bi-arrow-left" ></i>
            </div>
            <div className="slider-albumes-wrap">
                <Swiper
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
                        {
                            albums.map((element, index) => {
                                return (
                                    `
                                    <div className="section__featured-album-container" data-key=${index}>
                                        <a href="#" className="section__featured-album-link">
                                            <img id="1"
                                                src=${element.image_url}
                                                alt="" width="175" height="175" className="section__featured-album-img" />
                                            <h3 className="section__featured-album-artist">${element.artist}</h3>
                                            <p className="section__featured-album-title">${element.title}</p>
                                        </a>
                                        <a href="#" className="button button-text button-text--buy" id="1">Comprar</a>
                                    </div>
                                    `
                                );
                            })
                        }
                        {/* <SliderAlbum
                            id="1"
                            urlImage={data.image_url}
                            artist={data.artist}
                            album={data.title}
                        /> */}
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <SliderAlbum
                            id="2"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/oasis20000000170887_2_480x.jpg?v=1657700137"}
                            artist={"Oasis"}
                            album={"Be Here Now"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="3"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Parachutes-1593635064_480x.jpg?v=1594732369"}
                            artist={"Coldplay"}
                            album={"Parachutes"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="4"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Keane_Strangeland_360x.jpg?v=1654791292"}
                            artist={"Keane"}
                            album={"Strangeland"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="5"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Homework_Daft_Punk_480x.jpg?v=1576252617"}
                            artist={"Daft Punk"}
                            album={"Homework"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="6"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Gorillaz-RSDStoresExclNeonPurpleVinyl_e3cf8afa-e142-47d0-a188-5d9b6acf4a36_720x.png?v=1661958601"}
                            artist={"Gorillaz"}
                            album={"Craker Island"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="7"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/themarsvoltafrancesthemute_240x.jpg?v=1636978461"}
                            artist={"The Mars Volta"}
                            album={"Frances the Mute"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id="8"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Interpol-Antics-Sister-Ray_480x.jpg?v=1570375922"}
                            artist={"Interpol"}
                            album={"Antics"}
                        />
                    </SwiperSlide> */}
                </Swiper>
            </div>

            <div className="arrow__right" id="arrowRight1">
                <i className="bi bi-arrow-right"></i>
            </div>
        </>
    );
}

export default SliderNewReleasesAlbums;