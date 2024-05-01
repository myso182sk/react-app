import React from 'react';

class Navbar extends React.Component {
    
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
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/global?populate=deep,10`, params);
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

        const navLinks = data.attributes.mainMenu.link;
        var currentPathName = window.location.pathname;

        if ( currentPathName == '/' ) {
            currentPathName = '/home';
        }

        return (
            <div id="navbar" className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                    {navLinks.map(( navLink, i ) => 
                        <li key={i} className={( currentPathName == navLink.url ? 'active' : '' )}>       
                            <a target={( navLink.newTab == true ? '_blank' : '_self' )} href={navLink.url}>{navLink.text}</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }

}

export default Navbar;