import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderAlbum from './SliderAlbum';
const SliderNewReleasesAlbums = () => {
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
                        <SliderAlbum
                            id="1"
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/radiohead-kid-a-sister-ray_480x.jpg?v=1570377516"}
                            artist={"Radiohead"}
                            album={"Kid A"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="arrow__right" id="arrowRight1">
                <i className="bi bi-arrow-right"></i>
            </div>
        </>
    );
}

export default SliderNewReleasesAlbums;