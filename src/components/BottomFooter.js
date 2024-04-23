import React from 'react';
import { formatData } from '../utils/formatData.js';

class BottomFooter extends React.Component {
    
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

        const copyright = formatData(data.attributes.copyright);

        return(
            <section id="bottom-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12 btm-footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-12 copyright">
                            {copyright} | 
                            Developed by <a href="https://tridaz.eu" target="_blank">Tridaz</a>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}   

export default BottomFooter;