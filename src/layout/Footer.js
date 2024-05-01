import React from 'react';
import BottomFooter from '../components/BottomFooter.js';
import { formatData } from '../utils/formatData.js';

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const params = { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/global`, params);
            const jsonData = await response.json();
            this.setState({ data: jsonData.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {

        const { data } = this.state;

        if ( !data.attributes ) {
            return;
        }

        return (
            <div>
                <section id="footer">
                    <div className="container">
                        <div className="row">
                
                            <div className="col-md-3 col-sm-3 col-xs-12 block">
                                <div className="footer-block">
                                    <h4>Address</h4>
                                    <hr/>
                                    <p>Lorem ipsum dolor sit amet sit legimus copiosae instructior ei ut vix denique fierentis ea saperet inimicu ut qui dolor oratio mnesarchum.
                                    </p>
                                    <a href="#" className="learnmore">Learn More <i className="fa fa-caret-right"></i></a>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-3 col-xs-12 block">
                                <div className="footer-block">
                                    <h4>Useful Links</h4>
                                    <hr/>
                                    <ul className="footer-links">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Features</a></li>
                                        <li><a href="#">Portfolio</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Sign In</a></li>
                                        <li><a href="#">Sign Up</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-3 col-xs-12 block">
                                <div className="footer-block">
                                    <h4>Community</h4>
                                    <hr/>
                                    <ul className="footer-links">
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Forum</a></li>
                                        <li><a href="#">Free Goods</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-3 col-xs-12 <block></block>">
                                <div className="footer-block">
                                    <h4>Recent Posts</h4>
                                    <hr/>
                                    <ul className="footer-links">
                                        <li>
                                            <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                                            <p className="post-date">May 25, 2017</p>
                                        </li>
                                        <li>
                                            <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                                            <p className="post-date">May 25, 2017</p>
                                        </li>
                                        <li>
                                            <a href="#" className="post">Lorem ipsum dolor sit amet</a>
                                            <p className="post-date">May 25, 2017</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <BottomFooter />
            </div>
        );
    }
}

export default Footer;