import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderAlbum from './SliderAlbum';
const SliderPopularAlbums = () => {
    return (
        <>
            <div className="arrow__left" id="arrowLeft2">
                <i className="bi bi-arrow-left" ></i>
            </div>
            <div className="slider-albumes-wrap">
                <Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        prevEl: '#arrowLeft2',
                        nextEl: '#arrowRight2',
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
                            id={9}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/MUS000356486_480x.jpg?v=1612541904"}
                            artist={"Blur"}
                            album={"Blur"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={10}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/gorillaz-demon-days-sister-ray_240x.jpg?v=1570377287"}
                            artist={"Gorillaz"}
                            album={"Demon Days"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={11}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/room_480x.jpg?v=1632999315"}
                            artist={"The Strokes"}
                            album={"Room On Fire"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={12}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Arctic-Monkeys-AM-Sister-Ray_480x.jpg?v=1570377553"}
                            artist={"Arctic Monkeys"}
                            album={"AM"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={13}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/61Ms7wveh3L_480x.jpg?v=1592399218"}
                            artist={"Queen"}
                            album={"News of the World"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={14}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/bhouse_480x.jpg?v=1638806875"}
                            artist={"Beach House"}
                            album={"Depression Cherry"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={15}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Oasis-Definitely-Maybe-Sister-Ray_480x.jpg?v=1570374322"}
                            artist={"Oasis"}
                            album={"Definitely Maybe"}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderAlbum
                            id={16}
                            urlImage={"https://cdn.shopify.com/s/files/1/0096/1884/9839/products/currents_360x.jpg?v=1634815211"}
                            artist={"Tame Impala"}
                            album={"Currents"}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="arrow__right" id="arrowRight2">
                <i className="bi bi-arrow-right"></i>
            </div>
        </>
    );
}

export default SliderPopularAlbums;