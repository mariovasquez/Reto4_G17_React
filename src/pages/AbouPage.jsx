import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const AboutPage = () => {
    // const header = document.querySelector('.header');
    // const headerAbout = () => {
    //     header.classList.add('header--scroll');
    // };
    // headerAbout();
    return (
        <>
         <article className="section section--about">
            <h2 class="about__title">Sobre Nosotros</h2>
             <div class="about__info">
                <ScrollContainer>
                    <ScrollPage page={0}>
                        <Animator animation={batch(Fade(), Sticky(), Move())}>
                            <div class="about__text">
                                <div class="about__text--container">
                                    <h3 class="about__subtitle">Nuestra historia</h3>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis molestias rem laboriosam quae, ipsa sed officiis repellat, molestiae ut maxime iste labore? Deleniti, explicabo expedita.</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0096/1884/9839/files/Our_History_img_1_600x600.jpg?v=1564565175" alt="" class="about__img" width="480" height="480"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={batch(Fade(), Sticky(), Move())}>
                            <div class="about__text">
                                <div>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                </div>
                                <img src="https://cdn.shopify.com/s/files/1/0096/1884/9839/files/Our_History_img_2_600x600.jpg?v=1564568805" alt="" class="about__img" width="480" height="480"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <Animator animation={batch(Fade(), Sticky())}>
                            <div class="about__text">
                                <div>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptas optio culpa adipisci fugiat aliquid atque quaerat rerum est debitis quia officia ipsa, provident praesentium numquam alias aliquam tempora voluptate ea, eos veritatis! Sint autem nesciunt esse doloribus nobis, voluptas repellendus omnis quasi molestias minus ratione sunt, nisi ab. Voluptatem.</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem similique debitis vitae molestiae provident totam ad reprehenderit itaque atque eveniet dolor, enim laborum quasi eaque, officia, consequuntur earum repellendus dolore!</p>
                                    <p class="about__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel, quo quam nemo non delectus quidem quaerat libero quibusdam distinctio numquam eius earum aliquid officia commodi, doloremque dolore dolores dolorum deserunt aut voluptatum repellat et?</p>
                                </div>
                                <img src="http://www.revistaexclama.com/exclama2014/wp-content/uploads/2014/06/sister-ray.jpg" alt="" class="about__img" width="480" height="480"/>
                            </div>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
                </div>
         </article>
        </>
    );
}

export default AboutPage;