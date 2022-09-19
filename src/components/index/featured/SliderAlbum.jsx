const SliderAlbum = ({id, urlImage, artist, album}) => {
    return (
        <div className="section__featured-album-container" id={id}>
            <a href="#" className="section__featured-album-link">
                <img id="1"
                    src={urlImage}
                    alt="" width="175" height="175" className="section__featured-album-img" />
                <h3 className="section__featured-album-artist">{artist}</h3>
                <p className="section__featured-album-title">{album}</p>
            </a>
            <a href="#" className="button button-text button-text--buy" id="1">Comprar</a>
        </div>
    );
}

export default SliderAlbum;