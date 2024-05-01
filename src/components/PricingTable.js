import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { formatData, formatURL } from '../utils/formatData.js';

class PricingTable extends React.Component {
    
    constructor(props) {
        super(props);
        this.pageID = this.props.pageID;
        this.index = this.props.index;
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
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/pages/` + this.props.pageID + `?populate=deep,10`, params);
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

        var pricingTableHeadline = data.attributes.contentSections[this.index].headline;
        var pricingTablecontent = data.attributes.contentSections[this.index].content;
        var objectPlans = data.attributes.contentSections[this.index].plans.data;

        return (

            <section id="testimonial">

                <div className="container">

                    <div className="section-heading text-center">
                        <div className="col-md-12 col-xs-12">
                            <h1>{pricingTableHeadline}</h1>
                            <BlocksRenderer content={pricingTablecontent} />
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        {objectPlans.map(( plan, i ) => 
                            <div key={i} className="col-md-3 col-sm-12 block">
                                <div className="testimonial_box">
                                    <h2 className="text-center"><span>{plan.attributes.name}</span></h2>
                                    <div className="plan-features">
                                        {plan.attributes.features.map(( feature, j ) =>
                                            ( 
                                                <p key={j}><i className={( feature.icon == true ) ? "fa fa-solid fa-check" : "fa fa-solid fa-times"}></i> {feature.label}</p> 
                                            )
                                        )}
                                    </div>
                                    <h3 className="text-center"><span>{plan.attributes.price}</span></h3>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </section>

        )

    }
}

export default PricingTable;