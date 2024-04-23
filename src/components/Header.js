import React from 'react';
import Navbar from './Navbar.js';
import { formatData } from '../utils/formatData.js';

class Header extends React.Component {
    
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

        const siteName = formatData(data.attributes.siteName);
        const siteSlogan = formatData(data.attributes.siteSlogan);

        return (
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container">
                        <div className="row">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">
                                    <h1>{siteName}</h1><span>{siteSlogan}</span>
                                </a>
                            </div>
                            <Navbar />
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

}

export default Header;