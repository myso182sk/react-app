import React from 'react';

// import Components
import Carousel from '../components/Carousel';
import PlainText from '../components/PlainText';
import PricingTable from '../components/PricingTable';

class PageBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.pageID = props.pageID;
        this.state = {
            data: [],
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
            const response = await fetch(`${process.env.REACT_APP_BACKEND}` + `api/pages/` + this.props.pageID + `?populate=contentSections` , params);
            const jsonData = await response.json();
            this.setState({ data: jsonData.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    RenderContentSection({ element, pageID, index }) {
        switch (element) {
            case 'elements.slideshow' :
                return <Carousel pageID={pageID} index={index} />;
            case 'elements.rich-text' :
                return <PlainText pageID={pageID} index={index} />;
            case 'elements.pricing-table' :
                return <PricingTable pageID={pageID} index={index} />;
        }
    }

    render() {

        const { data } = this.state;

        if ( !data.attributes && !data.id ) {
            return;
        }

        var sectionsObject = data.attributes.contentSections;
        
        return (
            <div>
                {sectionsObject.map(( section, i ) =>
                    <div key={i}>
                        <this.RenderContentSection element={section.__component} pageID={data.id} index={i} />
                    </div>
                )}
            </div>
        );
    }
}

export default PageBuilder;