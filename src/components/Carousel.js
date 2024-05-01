import React from 'react';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { formatData, formatURL } from '../utils/formatData.js';

class Carousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.pageID = props.pageID;
        this.index = props.index;
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

        // get slides data
        var slidesObject = data.attributes.contentSections[this.index].slide;

        return (
            <div id="myCarousel" className="carousel slide">

                <ol className="carousel-indicators">
                    {slidesObject.map(( carouselNavItem, i ) => <li key={carouselNavItem.id} className={ i == 0 ? 'active' : '' } data-target="#myCarousel" data-slide-to={i} />)}
                </ol>

                <div className="carousel-inner">
                    {slidesObject.map(( slide, i ) => 
                        <div key={slide.id} className={ i == 0 ? 'item active' : 'item' }>
                            { 
                                slide.image.data !== null 
                                    ? 
                                <div className="fill" style={{
                                        backgroundImage: `url(` + formatURL( `${process.env.REACT_APP_BACKEND}` + `${slide.image.data.attributes.url}` ) + `)`                             
                                    }}>    
                                </div> 
                                    : 
                                <div></div> 
                            }
                            <div className="carousel-caption slide-up">
                                <BlocksRenderer content={slide.content} />
                                <div className="slider_btn">
                                    <a href={slide.buttonLink}>
                                        <button type="button" className="btn btn-default slide">{slide.buttonText} <i className="fa fa-caret-right"></i></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
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
}

export default Carousel;