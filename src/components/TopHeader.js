function TopHeader() {
    return (
        <section id="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-sm-7 col-xs-7 top-header-links">
                        <ul className="contact_links">
                            <li><i className="fa fa-phone"></i><a href="#">TODO +91 848 594 5080</a></li>
                            <li><i className="fa fa-envelope"></i><a href="#">TODO sales@aspiresoftware.in</a></li>
                        </ul>
                    </div>
                    <div className="col-md-5 col-sm-5 col-xs-5 social">
                        <ul className="social_links">
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="#"><i className="fa fa-skype"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopHeader;