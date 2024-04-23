function Navbar() {
    return (
        <div id="navbar" className="collapse navbar-collapse navbar-right">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="features.html">Features</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Sign In</a></li>
                <li><a href="registration.html">Sign Up</a></li>
            </ul>
        </div>
    );
}

export default Navbar;