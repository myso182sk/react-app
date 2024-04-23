import background1 from "../img/banner-slide-1.jpg";
import background2 from "../img/banner-slide-2.jpg";
import background3 from "../img/banner-slide-3.jpg";

function Carousel() {
    return (
        <div id="myCarousel" className="carousel slide">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active">
                    <div className="fill" style={{
                        backgroundImage: `url(${background1})`
                    }}>                        
                    </div>
                    <div className="carousel-caption slide-up">
                        <h1 className="banner_heading">Providing The <span>Highest </span>Lorem</h1>
                        <p className="banner_txt">Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                        <div className="slider_btn">
                            <button type="button" className="btn btn-default slide">Learn More <i className="fa fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className="item">
                <   div className="fill" style={{
                        backgroundImage: `url(${background2})`
                    }}>                        
                    </div>
                    <div className="carousel-caption slide-up">
                        <h1 className="banner_heading">Providing The <span>Highest </span>Lorem</h1>
                        <p className="banner_txt">Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                        <div className="slider_btn">
                            <button type="button" className="btn btn-default slide">Learn More <i className="fa fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="fill" style={{
                        backgroundImage: `url(${background3})`
                    }}>                        
                    </div>
                    <div className="carousel-caption slide-up">
                        <h1 className="banner_heading">Providing The <span>Highest </span>Lorem</h1>
                        <p className="banner_txt">Lorem ipsum dolor sit amet sit legimus copiosae instructior eiut vix denique fierentis ea saperet inimicu utqui dolor oratio mnesarchum.</p>
                        <div className="slider_btn">
                            <button type="button" className="btn btn-default slide">Learn More <i className="fa fa-caret-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
            </a>

        </div>

    );
}

export default Carousel;