import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

class PlainText extends React.Component {

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
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/pages/1?populate=contentSections`, params);
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
            <section id="plain-text">       
                <div className="container">
                    <div className="section-heading text-center">
                        <div className="col-md-12 col-xs-12">
                            <BlocksRenderer content={data.attributes.contentSections[1].content} />
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}

export default PlainText;